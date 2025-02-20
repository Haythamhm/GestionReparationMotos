import jsPDF from 'jspdf';
import { Payment } from '../types';

export const generatePdfReceipt = (payment: Payment): void => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text('Payment Receipt', 10, 20);

    // Add payment details
    doc.setFontSize(12);
    doc.text(`Payment ID: ${payment.id}`, 10, 30);
    doc.text(`Maintenance ID: ${payment.maintenanceId}`, 10, 40);
    doc.text(`Client ID: ${payment.clientId}`, 10, 50);
    doc.text(`Amount: $${payment.amount}`, 10, 60);
    doc.text(`Status: ${payment.status}`, 10, 70);
    doc.text(`Payment Method: ${payment.paymentMethod}`, 10, 80);
    doc.text(`Payment Date: ${new Date(payment.paymentDate).toLocaleDateString()}`, 10, 90);
    doc.text(`Transaction ID: ${payment.transactionId}`, 10, 100);

    // Save the PDF
    doc.save(`payment_receipt_${payment.id}.pdf`);
};