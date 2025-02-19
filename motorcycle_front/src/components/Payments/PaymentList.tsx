import { Payment } from '../../types';

const PaymentList = ({ payments }: { payments: Payment[] }) => {
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentList;