import { useEffect } from 'react';
import { fetchMaintenance, deleteMaintenance } from '../../api/maintenanceAPI';
import { Maintenance } from '../../types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

interface MaintenanceListProps {
    maintenanceList: Maintenance[];
    setMaintenanceList: (maintenanceList: Maintenance[]) => void;
}

const MaintenanceList: React.FC<MaintenanceListProps> = ({ maintenanceList, setMaintenanceList }) => {
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
    }, [setMaintenanceList]);

    const handleDelete = (id: number) => {
        deleteMaintenance(id)
            .then(() => setMaintenanceList(maintenanceList.filter(maintenance => maintenance.id !== id)))
            .catch(error => console.error('Error deleting maintenance:', error));
    };

    return (
        <TableContainer component={Paper} className="mt-4">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Client ID</TableCell>
                        <TableCell>Motorcycle ID</TableCell>
                        <TableCell>Problem</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Entry Date</TableCell>
                        <TableCell>Exit Date</TableCell>
                        <TableCell>Cost</TableCell>
                        <TableCell>Total Cost</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {maintenanceList.map(maintenance => (
                        <TableRow key={maintenance.id} className="hover:bg-[#F5F5F5] transition-colors duration-300">
                            <TableCell>{maintenance.clientId}</TableCell>
                            <TableCell>{maintenance.motorcycleId}</TableCell>
                            <TableCell>{maintenance.problem}</TableCell>
                            <TableCell>{maintenance.status}</TableCell>
                            <TableCell>{new Date(maintenance.entryDate).toLocaleDateString()}</TableCell>
                            <TableCell>{new Date(maintenance.exitDate).toLocaleDateString()}</TableCell>
                            <TableCell>{maintenance.cost}</TableCell>
                            <TableCell>{maintenance.costTotal}</TableCell>
                            <TableCell>
                                <IconButton color="secondary" onClick={() => maintenance.id !== undefined && handleDelete(maintenance.id)}>
                                    <Delete />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MaintenanceList;
