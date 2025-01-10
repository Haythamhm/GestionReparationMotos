import { useState } from 'react';
import ClientList from '../components/Clients/ClientsList';
import AddClientForm from '../components/Clients/AddClientForm';
import { Client } from '../types';

const ClientsPage = () => {
    const [clients, setClients] = useState<Client[]>([]);

    const handleClientAdded = (newClient: Client) => {
        setClients([...clients, newClient]);
    };

    const handleClientUpdated = (updatedClients: Client[]) => {
        setClients(updatedClients);
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl">Clients Management</h1>
            <AddClientForm onClientAdded={handleClientAdded} />
            <ClientList clients={clients} onClientUpdated={handleClientUpdated} />
        </div>
    );
};

export default ClientsPage;