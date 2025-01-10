import { useEffect, useState } from 'react';
import { fetchPayments, updatePayment } from '../../api/paymentAPI';

const PaymentList = () => {
    const [payments, setPayments] = useState<any[]>([]);
    const [editingPayment, setEditingPayment] = useState<any | null>(null); // Paiement en cours d'édition
    const [formData, setFormData] = useState({ amount: '', status: '', paymentMethod: '' }); // Données du formulaire

    // Charger la liste des paiements
    useEffect(() => {
        fetchPayments()
            .then(response => setPayments(response.data))
            .catch(error => console.error('Error fetching payments:', error));
    }, []);

    // Gérer le changement dans le formulaire
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Soumettre les modifications du paiement
    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingPayment) return;

        try {
            await updatePayment(editingPayment.id, formData);
            const updatedPayments = payments.map(payment =>
                payment.id === editingPayment.id ? { ...payment, ...formData } : payment
            );
            setPayments(updatedPayments);
            setEditingPayment(null); // Fermer l'édition après la mise à jour
        } catch (error) {
            console.error('Error updating payment:', error);
        }
    };

    // Ouvrir le formulaire d'édition avec les données existantes
    const handleEdit = (payment: any) => {
        setEditingPayment(payment);
        setFormData({
            amount: payment.amount,
            status: payment.status,
            paymentMethod: payment.paymentMethod,
        });
    };

    return (
        <div className="mt-4">
            <ul>
                {payments.map(payment => (
                    <li key={payment.id} className="border p-2 my-2">
                        <p>Maintenance ID: {payment.maintenanceId}</p>
                        <p>Amount: {payment.amount}</p>
                        <p>Status: {payment.status}</p>
                        <p>Payment Method: {payment.paymentMethod}</p>
                        <button
                            onClick={() => handleEdit(payment)}
                            className="bg-blue-500 text-white p-1 mt-1"
                        >
                            Edit
                        </button>
                    </li>
                ))}
            </ul>

            {editingPayment && (
                <form onSubmit={handleUpdate} className="border p-4 mt-4">
                    <h3 className="text-lg mb-2">Edit Payment</h3>
                    <label className="block mb-2">
                        Amount:
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            className="border p-1 w-full"
                        />
                    </label>
                    <label className="block mb-2">
                        Status:
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="border p-1 w-full"
                        >
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            <option value="Failed">Failed</option>
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
                        />
                    </label>
                    <button type="submit" className="bg-green-500 text-white p-2 mt-2">Update</button>
                    <button
                        type="button"
                        onClick={() => setEditingPayment(null)}
                        className="bg-gray-400 text-white p-2 mt-2 ml-2"
                    >
                        Cancel
                    </button>
                </form>
            )}
        </div>
    );
};

export default PaymentList;