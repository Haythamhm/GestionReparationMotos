import axios from './axioxConfig';
import { Maintenance } from '../types';

const API_BASE_URL = '/api/maintenance';

export const fetchMaintenance = () => axios.get<Maintenance[]>(`${API_BASE_URL}`);
export const fetchMaintenanceById = (id: number) => axios.get<Maintenance>(`${API_BASE_URL}/${id}`);
export const fetchMaintenanceByClientId = (clientId: number) => axios.get<Maintenance[]>(`${API_BASE_URL}/client/${clientId}`);
export const fetchMaintenanceByMotorcycleId = (motorcycleId: number) => axios.get<Maintenance[]>(`${API_BASE_URL}/motorcycle/${motorcycleId}`);
export const createMaintenance = (data: Maintenance) => axios.post<Maintenance>(`${API_BASE_URL}`, data);
export const deleteMaintenance = (id: number) => axios.delete(`${API_BASE_URL}/${id}`);
