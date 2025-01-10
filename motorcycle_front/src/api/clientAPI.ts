import axios from './axioxConfig';
import { Client } from '../types';

export const fetchClients = () => axios.get<Client[]>('/api/clients');
export const fetchClientById = (id: number) => axios.get<Client>(`/api/clients/${id}`);
export const createClient = (data: Client) => axios.post<Client>('/api/clients', data);
export const updateClient = (id: number, data: Client) => axios.put<Client>(`/api/clients/${id}`, data);
export const deleteClient = (id: number) => axios.delete(`/api/clients/${id}`);