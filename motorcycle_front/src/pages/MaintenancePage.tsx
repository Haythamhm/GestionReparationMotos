import { useState, useEffect } from 'react';
import MaintenanceForm from '../components/Maintenance/MaintenanceForm';
import MaintenanceList from '../components/Maintenance/MaintenanceList';
import { Maintenance } from '../types';
import { fetchMaintenance } from '../api/maintenanceAPI';

const MaintenancePage = () => {
    const [maintenanceList, setMaintenanceList] = useState<Maintenance[]>([]);

    useEffect(() => {
        fetchMaintenance()
            .then(response => {
                if (Array.isArray(response.data)) {
                    setMaintenanceList(response.data);
                } else {
                    console.error('Unexpected response data format:', response.data);
                }
            })
            .catch(error => console.error('Error fetching maintenance:', error));
    }, []);

    const handleAddMaintenance = (newMaintenance: Maintenance) => {
        setMaintenanceList([...maintenanceList, newMaintenance]);
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl">Maintenance</h1>
            <MaintenanceForm onSubmit={handleAddMaintenance} />
            <MaintenanceList maintenanceList={maintenanceList} setMaintenanceList={setMaintenanceList} />
        </div>
    );
};

export default MaintenancePage;