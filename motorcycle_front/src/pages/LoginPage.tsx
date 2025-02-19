import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginClient } from '../api/clientAPI';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        loginClient(formData)
            .then((response) => {
                console.log('Client logged in:', response.data);
                // Store the token in localStorage
                localStorage.setItem('token', response.data.token);
                // Redirect to dashboard
                navigate('/');
                // Consider updating global state here if using context
            })
            .catch((error) => {
                console.error('Error logging in client:', error);
                // Optionally display an error message to the user
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#222831]">
            <div className="bg-[#393E46] p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-4xl font-bold mb-6 text-center text-[#00ADB5]">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-[#EEEEEE]">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border p-2 w-full rounded bg-[#222831] text-[#EEEEEE]"
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
                            className="border p-2 w-full rounded bg-[#222831] text-[#EEEEEE]"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-[#00ADB5] text-[#222831] p-2 w-full rounded mt-4">Login</button>
                </form>
                <p className="text-center mt-4 text-[#EEEEEE]">
                    Don't have an account? <a href="/register" className="text-[#00ADB5]">Register</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;