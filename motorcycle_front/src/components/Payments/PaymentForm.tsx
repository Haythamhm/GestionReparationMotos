import { useState } from 'react';
import { processPayment } from '../../api/paymentAPI';
import { Payment } from '../../types';

const PaymentForm = ({ onAdd }: { onAdd: (payment: Payment) => void }) => {
    const [formData, setFormData] = useState({
        maintenanceId: '',
        clientId: '',
        amount: '',
        status: 'Pending',
        paymentMethod: '',
        transactionId: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        processPayment(formData as any)
            .then(response => {
                onAdd(response.data);
                setFormData({
                    maintenanceId: '',
                    clientId: '',
                    amount: '',
                    status: 'Pending',
                    paymentMethod: '',
                    transactionId: '',
                });
            })
            .catch(error => console.error('Error processing payment:', error));
    };

    return (
        <form onSubmit={handleSubmit} className="border p-4 mt-4">
            <label className="block mb-2">
                Maintenance ID:
                <input
                    type="text"
                    name="maintenanceId"
                    value={formData.maintenanceId}
                    onChange={handleChange}
                    className="border p-1 w-full"
                    required
                />
            </label>
            <label className="block mb-2">
                Client ID:
                <input
                    type="text"
                    name="clientId"
                    value={formData.clientId}
                    onChange={handleChange}
                    className="border p-1 w-full"
                    required
                />
            </label>
            <label className="block mb-2">
                Amount:
                <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="border p-1 w-full"
                    required
                />
            </label>
            <label className="block mb-2">
                Status:
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="border p-1 w-full"
                    required
                >
                    <option value="Pending">En Attente</option>
                    <option value="In Progress">En Cours</option>
                    <option value="Completed">Complete</option>
                    
                </select>
            </label>
            <label className="block mb-2">
                Payment Method:
                <input
                    type="text"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="border p-1 w-full"
                    required
                />
            </label>
            <label className="block mb-2">
                Transaction ID:
                <input
                    type="text"
                    name="transactionId"
                    value={formData.transactionId}
                    onChange={handleChange}
                    className="border p-1 w-full"
                    required
                />
            </label>
            <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Pay Now</button>
        </form>
    );
};

export default PaymentForm;