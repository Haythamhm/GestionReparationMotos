import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchClientById } from '../../api/clientAPI';
import { Client } from '../../types';
import { Paper, Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const ClientDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [client, setClient] = useState<Client | null>(null);

    useEffect(() => {
        fetchClientById(Number(id))
            .then(response => setClient(response.data))
            .catch(error => console.error('Error fetching client:', error));
    }, [id]);

    if (!client) {
        return <Typography variant="h6">Loading...</Typography>;
    }

    return (
        <Paper className="p-4">
            <IconButton component={Link} to="/admin/clients">
                <ArrowBack />
            </IconButton>
            <Typography variant="h4" className="mb-4">Client Details</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Field</TableCell>
                            <TableCell>Info</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>{client.id}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>{client.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell>{client.email}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Address</TableCell>
                            <TableCell>{client.address}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phone</TableCell>
                            <TableCell>{client.phone}</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={2}>
                                <IconButton component={Link} to="/admin/clients">
                                    <ArrowBack />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default ClientDetails;