import axios from './axioxConfig';

export const fetchMotorcycles = () => axios.get('/api/motorcycles');
export const fetchMotorcycleById = (id: number) => axios.get(`/api/motorcycles/${id}`);
export const fetchMotorcyclesByClientId = (clientId: number) => axios.get(`/api/motorcycles/client/${clientId}`);
export const createMotorcycle = (data: { [key: string]: unknown }) => axios.post('/api/motorcycles', data);
export const updateMotorcycle = (id: number, data: { [key: string]: unknown }) => axios.put(`/api/motorcycles/${id}`, data);
export const deleteMotorcycle = (id: number) => axios.delete(`/api/motorcycles/${id}`);