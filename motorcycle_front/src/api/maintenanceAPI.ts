import axios from './axioxConfig';

export const fetchMaintenance = () => axios.get('/api/maintenance');
export const fetchMaintenanceById = (id: number) => axios.get(`/api/maintenance/${id}`);
export const fetchMaintenanceByClientId = (clientId: number) => axios.get(`/api/maintenance/client/${clientId}`);
export const fetchMaintenanceByMotorcycleId = (motorcycleId: number) => axios.get(`/api/maintenance/motorcycle/${motorcycleId}`);
export const createMaintenance = (data: Record<string, unknown>) => axios.post('/api/maintenance', data);
export const updateMaintenance = (id: number, data: Record<string, unknown>) => axios.put(`/api/maintenance/${id}`, data);
export const deleteMaintenance = (id: number) => axios.delete(`/api/maintenance/${id}`);