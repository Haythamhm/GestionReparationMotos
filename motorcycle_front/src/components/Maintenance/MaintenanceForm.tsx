import React, { useState, useEffect } from 'react';
import { getParts } from '../../api/partsAPI';
import { Part } from '../../types';
import { 
    TextField, 
    Button, 
    Box, 
    Typography, 
    MenuItem, 
    Select, 
    FormControl, 
    InputLabel, 
    IconButton,
    SelectChangeEvent 
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface MaintenanceFormProps {
    onSubmit: (data: any) => void;
}

interface FormData {
    clientId: string;
    motorcycleId: string;
    problem: string;
    status: string;
    startDate: string;
    endDate: string;
    parts: { partId: number; quantity: number }[];
}

const MaintenanceForm: React.FC<MaintenanceFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<FormData>({
        clientId: '',
        motorcycleId: '',
        problem: '',
        status: 'Pending',
        startDate: '',
        endDate: '',
        parts: [],
    });
    const [parts, setParts] = useState<Part[]>([]);
    const [selectedParts, setSelectedParts] = useState<{ partId: number; quantity: number }[]>([]);

    useEffect(() => {
        getParts()
            .then((response) => setParts(response))
            .catch((error) => console.error('Error fetching parts:', error));
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (e: SelectChangeEvent<string>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleQuantityChange = (partId: number, change: number) => {
        setSelectedParts(prev => {
            const existingPart = prev.find(part => part.partId === partId);
            const part = parts.find(p => p.id === partId);
            if (!part) return prev;

            const newQuantity = Math.min(
                Math.max((existingPart?.quantity || 0) + change, 0),
                part.quantity
            );

            if (existingPart) {
                return prev.map(p => 
                    p.partId === partId ? { ...p, quantity: newQuantity } : p
                );
            } else {
                return [...prev, { partId, quantity: newQuantity }];
            }
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ ...formData, parts: selectedParts });
    };

    return (
        <Box 
            component="form" 
            onSubmit={handleSubmit} 
            sx={{ 
                mt: 4, 
                p: 4, 
                border: '1px solid #ccc', 
                borderRadius: 2,
                bgcolor: '#ffffff',
            }}
        >
            <TextField
                label="Client ID"
                name="clientId"
                value={formData.clientId}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Motorcycle ID"
                name="motorcycleId"
                value={formData.motorcycleId}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Problem"
                name="problem"
                value={formData.problem}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                multiline
                rows={4}
            />
            <FormControl fullWidth margin="normal">
                <InputLabel>Status</InputLabel>
                <Select
                    name="status"
                    value={formData.status}
                    onChange={handleSelectChange}
                >
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label="Start Date"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                label="End Date"
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
            />

            <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
                Parts
            </Typography>

            <Box sx={{ mb: 3 }}>
                {parts.map(part => (
                    <Box 
                        key={part.id} 
                        sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            mb: 2,
                            p: 2,
                            border: '1px solid #e0e0e0',
                            borderRadius: 1,
                            bgcolor: '#fafafa',
                        }}
                    >
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="body1">
                                {part.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Cost: ${part.price} | Available: {part.quantity}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <IconButton 
                                size="small"
                                onClick={() => handleQuantityChange(part.id!, -1)}
                                color="primary"
                            >
                                <RemoveIcon />
                            </IconButton>
                            <Typography sx={{ minWidth: '40px', textAlign: 'center' }}>
                                {selectedParts.find(p => p.partId === part.id)?.quantity || 0}
                            </Typography>
                            <IconButton 
                                size="small"
                                onClick={() => handleQuantityChange(part.id!, 1)}
                                color="primary"
                            >
                                <AddIcon />
                            </IconButton>
                        </Box>
                    </Box>
                ))}
            </Box>

            <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                sx={{ mt: 2 }}
            >
                Add Maintenance
            </Button>
        </Box>
    );
};

export default MaintenanceForm;