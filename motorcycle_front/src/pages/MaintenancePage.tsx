import { useEffect, useState } from 'react';
import { fetchMaintenance, createMaintenance } from '../api/maintenanceAPI';

const MaintenancePage = () => {
    interface Maintenance {
        id: number;
        problem: string;
        status: string;
    }

    const [maintenanceList, setMaintenanceList] = useState<Maintenance[]>([]);
    const [formData, setFormData] = useState({ clientId: '', motorcycleId: '', problem: '' });

    useEffect(() => {
        fetchMaintenance()
            .then(response => setMaintenanceList(response.data))
            .catch(error => console.error('Error fetching maintenance:', error));
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createMaintenance(formData)
            .then(response => {
                setMaintenanceList([...maintenanceList, response.data]);
                setFormData({ clientId: '', motorcycleId: '', problem: '' });
            })
            .catch(error => console.error('Error creating maintenance:', error));
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl">Maintenance</h1>

            <form onSubmit={handleSubmit} className="border p-4 mt-4">
                <label className="block">
                    Client ID:
                    <input type="text" name="clientId" value={formData.clientId} onChange={handleChange} className="border p-1 w-full" />
                </label>
                <label className="block">
                    Motorcycle ID:
                    <input type="text" name="motorcycleId" value={formData.motorcycleId} onChange={handleChange} className="border p-1 w-full" />
                </label>
                <label className="block">
                    Problem:
                    <input type="text" name="problem" value={formData.problem} onChange={handleChange} className="border p-1 w-full" />
                </label>
                <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Add Maintenance</button>
            </form>

            <ul className="mt-4">
                {maintenanceList.map(maintenance => (
                    <li key={maintenance.id} className="border p-2 my-2">
                        <p>Problem: {maintenance.problem}</p>
                        <p>Status: {maintenance.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MaintenancePage;