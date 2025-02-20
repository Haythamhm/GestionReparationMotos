import { useState, useEffect } from 'react';
import { updateMotorcycle, fetchMotorcycleById } from '../../api/motorcycleAPI';
import { Motorcycle } from '../../types';
import { TextField, Button, Box, Paper, Typography } from '@mui/material';

interface UpdateMotorcycleFormProps {
    motorcycleId: number;
    onUpdate: (motorcycle: Motorcycle) => void;
    onCancel: () => void;
}

const UpdateMotorcycleForm: React.FC<UpdateMotorcycleFormProps> = ({ motorcycleId, onUpdate, onCancel }) => {
    const [formData, setFormData] = useState<Motorcycle | null>(null);

    useEffect(() => {
        fetchMotorcycleById(motorcycleId)
            .then(response => setFormData(response.data))
            .catch(error => console.error('Error fetching motorcycle:', error));
    }, [motorcycleId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (formData) {
            const { name, value } = e.target;
            setFormData(prev => (prev ? { ...prev, [name]: value } : null));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData) {
            updateMotorcycle(motorcycleId, formData)
                .then(response => {
                    onUpdate(response.data);
                })
                .catch(error => console.error('Error updating motorcycle:', error));
        }
    };

    if (!formData) return <p>Loading...</p>;

    return (
        <Paper sx={{ p: 4, mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                Update Motorcycle
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Button type="submit" variant="contained" color="primary">
                        Update Motorcycle
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={onCancel}>
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
};

export default UpdateMotorcycleForm;