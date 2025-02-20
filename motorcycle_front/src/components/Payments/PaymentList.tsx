import React from 'react';
import { Payment } from '../../types';
import { generatePdfReceipt } from '../../utils/generatePdfReceipt';

interface PaymentListProps {
    payments: Payment[];
}

const PaymentList: React.FC<PaymentListProps> = ({ payments }) => {
    return (
        <div className="mt-4">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">Maintenance ID</th>
                        <th className="py-2">Client ID</th>
                        <th className="py-2">Amount</th>
                        <th className="py-2">Status</th>
                        <th className="py-2">Payment Method</th>
                        <th className="py-2">Payment Date</th>
                        <th className="py-2">Transaction ID</th>
                        <th className="py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map(payment => (
                        <tr key={payment.id} className="border-t">
                            <td className="py-2">{payment.maintenanceId}</td>
                            <td className="py-2">{payment.clientId}</td>
                            <td className="py-2">{payment.amount}</td>
                            <td className="py-2">{payment.status}</td>
                            <td className="py-2">{payment.paymentMethod}</td>
                            <td className="py-2">{new Date(payment.paymentDate).toLocaleDateString()}</td>
                            <td className="py-2">{payment.transactionId}</td>
                            <td className="py-2">
                                <button
                                    onClick={() => generatePdfReceipt(payment)}
                                    className="bg-blue-500 text-white px-2 py-1 rounded"
                                >
                                    Download Receipt
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentList;