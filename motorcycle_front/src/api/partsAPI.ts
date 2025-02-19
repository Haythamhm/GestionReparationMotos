import axios from './axioxConfig';
import { Part } from '../types';

export const getParts = async () => {
  const response = await axios.get<Part[]>('/api/parts');
  return response.data;
};

export const addPart = async (part: Part) => {
  const response = await axios.post<Part[]>('/api/parts/batch', [part]);
  return response.data[0]; // Assuming the response is a list of parts
};