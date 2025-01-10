import { useEffect, useState } from 'react';
import { fetchMotorcycles, createMotorcycle } from '../api/motorcycleAPI';

const MotorcyclesPage = () => {
    const [motorcycles, setMotorcycles] = useState<any[]>([]);
    const [formData, setFormData] = useState({ brand: '', model: '', color: '', mileage: 0, condition: '' });

    useEffect(() => {
        fetchMotorcycles()
            .then(response => setMotorcycles(response.data))
            .catch(error => console.error('Error fetching motorcycles:', error));
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createMotorcycle(formData)
            .then(response => {
                setMotorcycles([...motorcycles, response.data]);
                setFormData({ brand: '', model: '', color: '', mileage: 0, condition: '' });
            })
            .catch(error => console.error('Error creating motorcycle:', error));
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl">Motorcycles</h1>

            <form onSubmit={handleSubmit} className="border p-4 mt-4">
                <label className="block">
                    Brand:
                    <input type="text" name="brand" value={formData.brand} onChange={handleChange} className="border p-1 w-full" />
                </label>
                <label className="block">
                    Model:
                    <input type="text" name="model" value={formData.model} onChange={handleChange} className="border p-1 w-full" />
                </label>
                <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Add Motorcycle</button>
            </form>

            <ul className="mt-4">
                {motorcycles.map(motorcycle => (
                    <li key={motorcycle.id} className="border p-2 my-2">
                        <p>{motorcycle.brand} - {motorcycle.model}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MotorcyclesPage;