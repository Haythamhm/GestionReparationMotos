import { useState, useEffect } from 'react';
import { fetchClientById, updateClient } from '../../api/clientAPI';

interface Client {
    name: string;
    email: string;
    // Add other properties as needed
}

const ClientProfile = () => {
    const [client, setClient] = useState<Client>({ name: '', email: '' });
    const clientId = 1; // Replace with actual client ID from context or props

    useEffect(() => {
        fetchClientById(clientId)
            .then(response => setClient(response.data))
            .catch(error => console.error('Error fetching client:', error));
    }, [clientId]);

    const handleUpdateClient = (updatedClient: any) => {
        updateClient(clientId, updatedClient)
            .then(response => setClient(response.data))
            .catch(error => console.error('Error updating client:', error));
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">My Profile</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleUpdateClient(client);
            }}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300">Name</label>
                    <input 
                        type="text" 
                        value={client.name || ''} 
                        onChange={(e) => setClient({ ...client, name: e.target.value })} 
                        className="border p-2 w-full rounded bg-[#EEEEEE] text-[#222831]"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300">Email</label>
                    <input 
                        type="email" 
                        value={client.email || ''} 
                        onChange={(e) => setClient({ ...client, email: e.target.value })} 
                        className="border p-2 w-full rounded bg-[#EEEEEE] text-[#222831]"
                    />
                </div>
                <button type="submit" className="bg-[#00ADB5] text-white p-2 w-full rounded mt-4">Update Profile</button>
            </form>
        </div>
    );
};

export default ClientProfile;