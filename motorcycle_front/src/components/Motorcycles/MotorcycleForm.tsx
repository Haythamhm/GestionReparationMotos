import { useState } from 'react';
import { createMotorcycle } from '../../api/motorcycleAPI';
import { Motorcycle } from '../../types';

interface MotorcycleFormProps {
    onAdd: (motorcycle: Motorcycle) => void;
}

const MotorcycleForm: React.FC<MotorcycleFormProps> = ({ onAdd }) => {
    const [formData, setFormData] = useState({ clientId: '', brand: '', model: '', color: '', mileage: 0, condition: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createMotorcycle(formData)
            .then(response => {
                onAdd(response.data);
                setFormData({ clientId: '', brand: '', model: '', color: '', mileage: 0, condition: '' });
            })
            .catch(error => console.error('Error creating motorcycle:', error));
    };

    return (
        <form onSubmit={handleSubmit} className="border p-4 mt-4">
            <label className="block">
                Client ID:
                <input type="number" name="clientId" value={formData.clientId} onChange={handleChange} className="border p-1 w-full" />
            </label>
            <label className="block">
                Brand:
                <input type="text" name="brand" value={formData.brand} onChange={handleChange} className="border p-1 w-full" />
            </label>
            <label className="block">
                Model:
                <input type="text" name="model" value={formData.model} onChange={handleChange} className="border p-1 w-full" />
            </label>
            <label className="block">
                Color:
                <input type="text" name="color" value={formData.color} onChange={handleChange} className="border p-1 w-full" />
            </label>
            <label className="block">
                Mileage:
                <input type="number" name="mileage" value={formData.mileage} onChange={handleChange} className="border p-1 w-full" />
            </label>
            <label className="block">
                Condition:
                <input type="text" name="condition" value={formData.condition} onChange={handleChange} className="border p-1 w-full" />
            </label>
            <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Add Motorcycle</button>
        </form>
    );
};

export default MotorcycleForm;