import { useEffect, useState } from 'react';
import { fetchMaintenance, deleteMaintenance } from '../../api/maintenanceAPI';

const MaintenanceList = () => {
    const [maintenanceList, setMaintenanceList] = useState<any[]>([]);

    useEffect(() => {
        fetchMaintenance()
            .then(response => setMaintenanceList(response.data))
            .catch(error => console.error('Error fetching maintenance:', error));
    }, []);

    const handleDelete = (id: number) => {
        deleteMaintenance(id)
            .then(() => setMaintenanceList(maintenanceList.filter(maintenance => maintenance.id !== id)))
            .catch(error => console.error('Error deleting maintenance:', error));
    };

    return (
        <ul className="mt-4">
            {maintenanceList.map(maintenance => (
                <li key={maintenance.id} className="border p-2 my-2">
                    <p>Problem: {maintenance.problem}</p>
                    <p>Status: {maintenance.status}</p>
                    <button onClick={() => handleDelete(maintenance.id)} className="bg-red-500 text-white p-1 mt-1">Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default MaintenanceList;