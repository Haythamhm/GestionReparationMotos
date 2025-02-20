import { useState, useEffect } from 'react';
import { fetchMaintenance } from '../api/maintenanceAPI';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Maintenance } from '../types';

const RecentMaintenance = () => {
    const [recentMaintenance, setRecentMaintenance] = useState<Maintenance[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const maintenanceResponse = await fetchMaintenance();
                const recent: Maintenance[] = maintenanceResponse.data.slice(0, 5); // Get the 5 most recent maintenances
                setRecentMaintenance(recent);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching recent maintenance:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-white p-6 rounded shadow mt-6">
            <h3 className="text-lg font-bold">Recent Maintenance</h3>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <TableContainer component={Paper} className="mt-4">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Client</TableCell>
                                <TableCell>Motorcycle</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Cost</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {recentMaintenance.map((maintenance) => (
                                <TableRow key={maintenance.id} className="hover:bg-[#F5F5F5] transition-colors duration-300">
                                    <TableCell>{maintenance.clientId}</TableCell>
                                    <TableCell>{maintenance.motorcycleId}</TableCell>
                                    <TableCell>
                                        <span className={`px-2 rounded ${maintenance.status === 'IN_PROGRESS' ? 'bg-yellow-200' : 'bg-green-200'}`}>
                                            {maintenance.status}
                                        </span>
                                    </TableCell>
                                    <TableCell>{new Date(maintenance.entryDate).toLocaleDateString()}</TableCell>
                                    <TableCell>{maintenance.cost}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
};

export default RecentMaintenance;