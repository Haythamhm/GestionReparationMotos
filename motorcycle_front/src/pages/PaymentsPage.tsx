import { useEffect, useState } from 'react';
import { fetchPayments } from '../api/paymentAPI';
import { Payment } from '../types';
import PaymentForm from '../components/Payments/PaymentForm';
import PaymentList from '../components/Payments/PaymentList';

const PaymentsPage = () => {
    const [payments, setPayments] = useState<Payment[]>([]);

    useEffect(() => {
        fetchPayments()
            .then(response => setPayments(response.data))
            .catch(error => console.error('Error fetching payments:', error));
    }, []);

    const handleAddPayment = (newPayment: Payment) => {
        setPayments([...payments, newPayment]);
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Payments</h1>
            <PaymentForm onAdd={handleAddPayment} />
            <PaymentList payments={payments} />
        </div>
    );
};

export default PaymentsPage;