import axios from './axioxConfig';

export const fetchPayments = () => axios.get('/api/payments');
export const fetchPaymentById = (id: number) => axios.get(`/api/payments/${id}`);
export const fetchPaymentsByClientId = (clientId: number) => axios.get(`/api/payments/client/${clientId}`);
export const fetchPaymentsByMaintenanceId = (maintenanceId: number) => axios.get(`/api/payments/maintenance/${maintenanceId}`);
export const processPayment = (data: Record<string, unknown>) => axios.post('/api/payments', data);
export const updatePayment = (id: number, data: Record<string, unknown>) => axios.put(`/api/payments/${id}`, data);