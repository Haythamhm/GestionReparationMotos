import { useState } from 'react';
import { createMotorcycle } from '../../api/motorcycleAPI';
import { Motorcycle } from '../../types';
import { TextField, Button, Box } from '@mui/material';

interface MotorcycleFormProps {
    onAdd: (motorcycle: Motorcycle) => void;
}

const MotorcycleForm: React.FC<MotorcycleFormProps> = ({ onAdd }) => {
    const [formData, setFormData] = useState<Motorcycle>({ clientId: 0, brand: '', model: '', color: '', mileage: 0, condition: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createMotorcycle(formData)
            .then(response => {
                onAdd(response.data);
                setFormData({ clientId: 0, brand: '', model: '', color: '', mileage: 0, condition: '' });
            })
            .catch(error => console.error('Error creating motorcycle:', error));
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4, p: 4, border: '1px solid #ccc', borderRadius: 2 }}>
            <TextField
                label="Client ID"
                name="clientId"
                type="number"
                value={formData.clientId}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Mileage"
                name="mileage"
                type="number"
                value={formData.mileage}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Condition"
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Add Motorcycle
            </Button>
        </Box>
    );
};

export default MotorcycleForm;