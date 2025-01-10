import { useEffect } from 'react';
import { fetchClients, deleteClient } from '../../api/clientAPI';
import { Link } from 'react-router-dom';
import { Client } from '../../types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

interface ClientListProps {
    clients: Client[];
    onClientUpdated: (clients: Client[]) => void;
}

const ClientList: React.FC<ClientListProps> = ({ clients, onClientUpdated }) => {
    useEffect(() => {
        fetchClients()
            .then(response => onClientUpdated(response.data))
            .catch(error => console.error('Error fetching clients:', error));
    }, [onClientUpdated]);

    const handleDelete = (id: number) => {
        deleteClient(id)
            .then(() => onClientUpdated(clients.filter(client => client.id !== id)))
            .catch(error => console.error('Error deleting client:', error));
    };

    return (
        <TableContainer component={Paper} className="mt-4">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients.map(client => (
                        <TableRow key={client.id} className="hover:bg-[#F5F5F5] transition-colors duration-300">
                            <TableCell>{client.name}</TableCell>
                            <TableCell>{client.email}</TableCell>
                            <TableCell>{client.address}</TableCell>
                            <TableCell>{client.phone}</TableCell>
                            <TableCell>
                                <Link to={`/clients/${client.id}`}>
                                    <IconButton color="primary">
                                        <Edit />
                                    </IconButton>
                                </Link>
                                <IconButton color="secondary" onClick={() => client.id !== undefined && handleDelete(client.id)}>
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

export default ClientList;