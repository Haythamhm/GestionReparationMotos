import { useState, useEffect } from 'react';
import { Maintenance } from '../../types';
import { fetchMaintenanceByClientId, createMaintenance } from '../../api/maintenanceAPI';
import MaintenanceForm from '../Maintenance/MaintenanceForm';
import MaintenanceList from '../Maintenance/MaintenanceList';

    const ClientMaintenanceRequests = () => {
        const [maintenanceRequests, setMaintenanceRequests] = useState<Maintenance[]>([]);
    const clientId = 1; // Replace with actual client ID from context or props

    useEffect(() => {
        fetchMaintenanceByClientId(clientId)
            .then(response => setMaintenanceRequests(response.data))
            .catch(error => console.error('Error fetching maintenance requests:', error));
    }, [clientId]);

    const handleAddMaintenanceRequest = (maintenance: Maintenance) => {
        createMaintenance(maintenance)
            .then(response => setMaintenanceRequests([...maintenanceRequests, response.data]))
            .catch(error => console.error('Error adding maintenance request:', error));
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">My Maintenance Requests</h2>
            <MaintenanceForm onAdd={handleAddMaintenanceRequest} />
            <MaintenanceList 
                maintenanceList={maintenanceRequests} 
                setMaintenanceList={setMaintenanceRequests} 
            />
        </div>
    );
};

export default ClientMaintenanceRequests;