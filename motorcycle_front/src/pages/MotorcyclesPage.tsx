import { useEffect, useState } from 'react';
import MotorcycleForm from '../components/Motorcycles/MotorcycleForm';
import MotorcycleList from '../components/Motorcycles/MotorcycleList';
import { Motorcycle } from '../types';
import { fetchMotorcycles } from '../api/motorcycleAPI';

const MotorcyclesPage = () => {
    const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);

    useEffect(() => {
        fetchMotorcycles()
            .then(response => setMotorcycles(response.data))
            .catch(error => console.error('Error fetching motorcycles:', error));
    }, []);

    const handleAddMotorcycle = (newMotorcycle: Motorcycle) => {
        setMotorcycles([...motorcycles, newMotorcycle]);
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl">Motorcycles</h1>
            <MotorcycleForm onAdd={handleAddMotorcycle} />
            <MotorcycleList motorcycles={motorcycles} setMotorcycles={setMotorcycles} />
        </div>
    );
};

export default MotorcyclesPage;