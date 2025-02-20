import { useState, useEffect } from 'react';
import { fetchMotorcyclesByClientId, createMotorcycle, updateMotorcycle, deleteMotorcycle } from '../../api/motorcycleAPI';
import MotorcycleForm from '../Motorcycles/MotorcycleForm';
import MotorcycleList from '../Motorcycles/MotorcycleList';
import UpdateMotorcycleForm from '../Motorcycles/UpdateMotorcycleForm';
import { Motorcycle } from '../../types';

const ClientMotorcycles = () => {
    const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);
    const [editingMotorcycle, setEditingMotorcycle] = useState<Motorcycle | null>(null);
    const clientId = 1; // Replace with actual client ID from context or props

    useEffect(() => {
        fetchMotorcyclesByClientId(clientId)
            .then(response => setMotorcycles(response.data))
            .catch(error => console.error('Error fetching motorcycles:', error));
    }, [clientId]);

    const handleAddMotorcycle = (motorcycle: Motorcycle) => {
        createMotorcycle(motorcycle)
            .then(response => setMotorcycles([...motorcycles, response.data]))
            .catch(error => console.error('Error adding motorcycle:', error));
    };

    const handleUpdateMotorcycle = (updatedMotorcycle: Motorcycle) => {
        updateMotorcycle(updatedMotorcycle.id!, updatedMotorcycle)
            .then(response => {
                setMotorcycles(motorcycles.map(m => (m.id === updatedMotorcycle.id ? response.data : m)));
                setEditingMotorcycle(null);
            })
            .catch(error => console.error('Error updating motorcycle:', error));
    };

    const handleEditMotorcycle = (motorcycle: Motorcycle) => {
        setEditingMotorcycle(motorcycle);
    };

    const handleCancelEdit = () => {
        setEditingMotorcycle(null);
    };

    const handleDeleteMotorcycle = (id: number) => {
        deleteMotorcycle(id)
            .then(() => setMotorcycles(motorcycles.filter(m => m.id !== id)))
            .catch(error => console.error('Error deleting motorcycle:', error));
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">My Motorcycles</h2>
            {editingMotorcycle ? (
                <UpdateMotorcycleForm
                    motorcycleId={editingMotorcycle.id!}
                    onUpdate={handleUpdateMotorcycle}
                    onCancel={handleCancelEdit}
                />
            ) : (
                <MotorcycleForm onAdd={handleAddMotorcycle} />
            )}
            <MotorcycleList
                motorcycles={motorcycles}
                onDelete={handleDeleteMotorcycle}
                onEdit={handleEditMotorcycle}
            />
        </div>
    );
};

export default ClientMotorcycles;