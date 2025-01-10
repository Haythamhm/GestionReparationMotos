import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchClientById } from '../../api/clientAPI';
import { Client } from '../../types';
import { Paper, Typography, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ClientDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [client, setClient] = useState<Client | null>(null);

    useEffect(() => {
        fetchClientById(Number(id))
            .then(response => setClient(response.data))
            .catch(error => console.error('Error fetching client:', error));
    }, [id]);

    if (!client) {
        return <div>Loading...</div>;
    }

    return (
        <Paper className="p-8">
            <Link to="/clients">
                <IconButton>
                    <ArrowBack />
                </IconButton>
            </Link>
            <Typography variant="h4" className="mb-4 text-[#424242]">Client Details</Typography>
            <Typography variant="body1" className="text-[#229799]"><strong>Name:</strong> {client.name}</Typography>
            <Typography variant="body1" className="text-[#229799]"><strong>Email:</strong> {client.email}</Typography>
            <Typography variant="body1" className="text-[#229799]"><strong>Address:</strong> {client.address}</Typography>
            <Typography variant="body1" className="text-[#229799]"><strong>Phone:</strong> {client.phone}</Typography>
        </Paper>
    );
};

export default ClientDetails;