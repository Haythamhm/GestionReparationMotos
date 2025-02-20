import { useEffect, useState } from 'react';
import MotorcycleForm from '../components/Motorcycles/MotorcycleForm';
import MotorcycleList from '../components/Motorcycles/MotorcycleList';
import UpdateMotorcycleForm from '../components/Motorcycles/UpdateMotorcycleForm';
import { Motorcycle } from '../types';
import { fetchMotorcycles } from '../api/motorcycleAPI';
import { Container, Typography, Paper } from '@mui/material';

const MotorcyclesPage = () => {
    const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);
    const [editingMotorcycle, setEditingMotorcycle] = useState<Motorcycle | null>(null);

    useEffect(() => {
        fetchMotorcycles()
            .then(response => setMotorcycles(response.data))
            .catch(error => console.error('Error fetching motorcycles:', error));
    }, []);

    const handleAddMotorcycle = (newMotorcycle: Motorcycle) => {
        setMotorcycles([...motorcycles, newMotorcycle]);
    };

    const handleUpdateMotorcycle = (updatedMotorcycle: Motorcycle) => {
        setMotorcycles(motorcycles.map(m => (m.id === updatedMotorcycle.id ? updatedMotorcycle : m)));
        setEditingMotorcycle(null);
    };

    const handleEditMotorcycle = (motorcycle: Motorcycle) => {
        setEditingMotorcycle(motorcycle);
    };

    const handleCancelEdit = () => {
        setEditingMotorcycle(null);
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Motorcycles
            </Typography>
            {editingMotorcycle ? (
                <UpdateMotorcycleForm
                    motorcycleId={editingMotorcycle.id!}
                    onUpdate={handleUpdateMotorcycle}
                    onCancel={handleCancelEdit}
                />
            ) : (
                <Paper sx={{ p: 4, mt: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Add Motorcycle
                    </Typography>
                    <MotorcycleForm onAdd={handleAddMotorcycle} />
                </Paper>
            )}
            <MotorcycleList
                motorcycles={motorcycles}
                onDelete={id => setMotorcycles(motorcycles.filter(m => m.id !== id))}
                onEdit={handleEditMotorcycle}
            />
        </Container>
    );
};

export default MotorcyclesPage;