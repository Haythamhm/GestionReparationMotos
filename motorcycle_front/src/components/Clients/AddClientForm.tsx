/*import { useState, ChangeEvent, FormEvent } from 'react';
import { createClient } from '../../api/clientAPI';
import { Client } from '../../types';

interface AddClientFormProps {
    onClientAdded: (client: Client) => void;
}

const AddClientForm: React.FC<AddClientFormProps> = ({ onClientAdded }) => {
    const [formData, setFormData] = useState<Client>({ name: '', email: '', address: '', phone: '' });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        createClient(formData)
            .then(response => {
                onClientAdded(response.data);
                setFormData({ name: '', email: '', address: '', phone: '' });
            })
            .catch(error => console.error('Error creating client:', error));
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4 p-4 border">
            <label className="block">
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="border p-1 w-full" />
            </label>
            <label className="block">
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-1 w-full" />
            </label>
            <label className="block">
                Address:
                <input type="text" name="address" value={formData.address} onChange={handleChange} className="border p-1 w-full" />
            </label>
            <label className="block">
                Phone:
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="border p-1 w-full" />
            </label>
            <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Submit</button>
        </form>
    );
};

export default AddClientForm;*/