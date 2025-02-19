import axios from './axioxConfig';
import { Payment } from '../types';

export const fetchPayments = () => axios.get<Payment[]>('/api/payments');
export const fetchPaymentById = (id: number) => axios.get<Payment>(`/api/payments/${id}`);
export const fetchPaymentsByClientId = (clientId: number) => axios.get<Payment[]>(`/api/payments/client/${clientId}`);
export const fetchPaymentsByMaintenanceId = (maintenanceId: number) => axios.get<Payment[]>(`/api/payments/maintenance/${maintenanceId}`);
export const processPayment = (data: Payment) => axios.post<Payment>('/api/payments', data);
export const updatePayment = (id: number, data: Payment) => axios.put<Payment>(`/api/payments/${id}`, data);