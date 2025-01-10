import { useState } from 'react';
import { createMaintenance } from '../../api/maintenanceAPI';

const MaintenanceForm = ({ onAdd }: { onAdd: (maintenance: any) => void }) => {
    const [formData, setFormData] = useState({ clientId: '', motorcycleId: '', problem: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createMaintenance(formData)
            .then((response) => {
                onAdd(response.data);
                setFormData({ clientId: '', motorcycleId: '', problem: '' });
            })
            .catch((error) => console.error('Error creating maintenance:', error));
    };

    return (
        <form onSubmit={handleSubmit} className="border p-4 mt-4">
            <label className="block">
                Client ID:
                <input type="number" name="clientId" value={formData.clientId} onChange={handleChange} className="border p-1 w-full" />
            </label>
            <label className="block">
                Motorcycle ID:
                <input type="number" name="motorcycleId" value={formData.motorcycleId} onChange={handleChange} className="border p-1 w-full" />
            </label>
            <label className="block">
                Problem:
                <input type="text" name="problem" value={formData.problem} onChange={handleChange} className="border p-1 w-full" />
            </label>
            <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Submit</button>
        </form>
    );
};

export default MaintenanceForm;