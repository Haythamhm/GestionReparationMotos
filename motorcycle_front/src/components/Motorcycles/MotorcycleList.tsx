import { useEffect, useState } from 'react';
import { fetchMotorcycles, deleteMotorcycle } from '../../api/motorcycleAPI';

const MotorcycleList = () => {
    const [motorcycles, setMotorcycles] = useState<any[]>([]);

    useEffect(() => {
        fetchMotorcycles()
            .then(response => setMotorcycles(response.data))
            .catch(error => console.error('Error fetching motorcycles:', error));
    }, []);

    const handleDelete = (id: number) => {
        deleteMotorcycle(id)
            .then(() => setMotorcycles(motorcycles.filter(motorcycle => motorcycle.id !== id)))
            .catch(error => console.error('Error deleting motorcycle:', error));
    };

    return (
        <ul className="mt-4">
            {motorcycles.map(motorcycle => (
                <li key={motorcycle.id} className="border p-2 my-2">
                    <p>{motorcycle.brand} - {motorcycle.model} - {motorcycle.color}</p>
                    <button onClick={() => handleDelete(motorcycle.id)} className="bg-red-500 text-white p-1 mt-1">Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default MotorcycleList;