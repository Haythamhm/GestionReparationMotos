import { useEffect, useState } from 'react';
import { fetchPayments, processPayment } from '../api/paymentAPI';

const PaymentsPage = () => {
    const [payments, setPayments] = useState<any[]>([]);
    const [formData, setFormData] = useState({ maintenanceId: '', paymentMethod: '' });

    useEffect(() => {
        fetchPayments()
            .then(response => setPayments(response.data))
            .catch(error => console.error('Error fetching payments:', error));
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        processPayment(formData)
            .then(response => {
                setPayments([...payments, response.data]);
                setFormData({ maintenanceId: '', paymentMethod: '' });
            })
            .catch(error => console.error('Error processing payment:', error));
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl">Payments</h1>

            <form onSubmit={handleSubmit} className="border p-4 mt-4">
                <label className="block">
                    Maintenance ID:
                    <input type="text" name="maintenanceId" value={formData.maintenanceId} onChange={handleChange} className="border p-1 w-full" />
                </label>
                <label className="block">
                    Payment Method:
                    <input type="text" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="border p-1 w-full" />
                </label>
                <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Process Payment</button>
            </form>

            <ul className="mt-4">
                {payments.map(payment => (
                    <li key={payment.id} className="border p-2 my-2">
                        <p>Maintenance ID: {payment.maintenanceId}</p>
                        <p>Amount: ${payment.amount}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PaymentsPage;