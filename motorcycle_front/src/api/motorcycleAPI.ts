import axios from './axioxConfig';
import { Motorcycle } from '../types';

export const fetchMotorcycles = () => axios.get<Motorcycle[]>('/api/motorcycles');
export const fetchMotorcycleById = (id: number) => axios.get<Motorcycle>(`/api/motorcycles/${id}`);
export const fetchMotorcyclesByClientId = (clientId: number) => axios.get<Motorcycle[]>(`/api/motorcycles/client/${clientId}`);
export const createMotorcycle = (data: Motorcycle) => axios.post<Motorcycle>('/api/motorcycles', data);
export const updateMotorcycle = (id: number, data: Motorcycle) => axios.put<Motorcycle>(`/api/motorcycles/${id}`, data);
export const deleteMotorcycle = (id: number) => axios.delete(`/api/motorcycles/${id}`);