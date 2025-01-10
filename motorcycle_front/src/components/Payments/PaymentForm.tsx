import { useState } from 'react';
import { processPayment } from '../../api/paymentAPI';

const PaymentForm = ({ onAdd }: { onAdd: (payment: any) => void }) => {
    const [formData, setFormData] = useState({ maintenanceId: '', paymentMethod: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        processPayment(formData)
            .then(response => {
                onAdd(response.data);
                setFormData({ maintenanceId: '', paymentMethod: '' });
            })
            .catch(error => console.error('Error processing payment:', error));
    };

    return (
        <form onSubmit={handleSubmit} className="border p-4 mt-4">
            <label className="block">
                Maintenance ID:
                <input type="text" name="maintenanceId" value={formData.maintenanceId} onChange={handleChange} className="border p-1 w-full" />
            </label>
            <label className="block">
                Payment Method:
                <input type="text" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="border p-1 w-full" />
            </label>
            <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Pay Now</button>
        </form>
    );
};

export default PaymentForm;