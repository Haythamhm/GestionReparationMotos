import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '../api/clientAPI';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createClient(formData)
            .then((response) => {
                console.log('Client registered:', response.data);
                navigate('/login'); // Redirect to the login page after successful registration
            })
            .catch((error) => console.error('Error registering client:', error));
    };

    return (
        <div className="container mx-auto text-[#EEEEEE] bg-[#222831] p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-center my-8 text-[#00ADB5]">Register</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
                <div>
                    <label className="block text-[#EEEEEE]">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border p-2 w-full rounded bg-[#393E46] text-[#EEEEEE]"
                        required
                    />
                </div>
                <div>
                    <label className="block text-[#EEEEEE]">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border p-2 w-full rounded bg-[#393E46] text-[#EEEEEE]"
                        required
                    />
                </div>
                <div>
                    <label className="block text-[#EEEEEE]">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="border p-2 w-full rounded bg-[#393E46] text-[#EEEEEE]"
                        required
                    />
                </div>
                <div>
                    <label className="block text-[#EEEEEE]">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border p-2 w-full rounded bg-[#393E46] text-[#EEEEEE]"
                        required
                    />
                </div>
                <div>
                    <label className="block text-[#EEEEEE]">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="border p-2 w-full rounded bg-[#393E46] text-[#EEEEEE]"
                        required
                    />
                </div>
                <button type="submit" className="bg-[#00ADB5] text-[#222831] p-2 w-full rounded mt-4">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;