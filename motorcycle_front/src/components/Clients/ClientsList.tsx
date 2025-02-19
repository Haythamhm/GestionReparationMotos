import { useEffect } from 'react';
import { fetchClients, deleteClient } from '../../api/clientAPI';
import { Link } from 'react-router-dom';
import { Client } from '../../types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Delete, Edit, Visibility } from '@mui/icons-material';

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
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients.map(client => (
                        <TableRow key={client.id}>
                            <TableCell>{client.id}</TableCell>
                            <TableCell>{client.name}</TableCell>
                            <TableCell>{client.email}</TableCell>
                            <TableCell>{client.address}</TableCell>
                            <TableCell>{client.phone}</TableCell>
                            <TableCell>
                                <IconButton component={Link} to={`/admin/clients/${client.id}`}>
                                    <Visibility color="primary" />
                                </IconButton>
                                <IconButton component={Link} to={`/clients/edit/${client.id}`}>
                                    <Edit color="primary" />
                                </IconButton>
                                <IconButton onClick={() => handleDelete(client.id!)}>
                                    <Delete color="secondary" />
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