import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
                
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-[#393E46] p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-[#EEEEEE]">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="border p-2 w-full rounded bg-[#222831] text-[#EEEEEE]"
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
                                    className="border p-2 w-full rounded bg-[#222831] text-[#EEEEEE]"
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
                                    className="border p-2 w-full rounded bg-[#222831] text-[#EEEEEE]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-[#EEEEEE]">Service</label>
                                <input
                                    type="text"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="border p-2 w-full rounded bg-[#222831] text-[#EEEEEE]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-[#EEEEEE]">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="border p-2 w-full rounded bg-[#222831] text-[#EEEEEE]"
                                    required
                                />
                            </div>
                            <button type="submit" className="bg-[#00ADB5] text-[#222831] p-2 w-full rounded mt-4">Send Message</button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <Phone className="text-[#00ADB5]" size={32} />
                            <div>
                                <h2 className="text-xl font-bold text-[#EEEEEE]">Phone</h2>
                                <p className="text-[#EEEEEE]">+1 234 567 890</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Mail className="text-[#00ADB5]" size={32} />
                            <div>
                                <h2 className="text-xl font-bold text-[#EEEEEE]">Email</h2>
                                <p className="text-[#EEEEEE]">info@motorepair.com</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <MapPin className="text-[#00ADB5]" size={32} />
                            <div>
                                <h2 className="text-xl font-bold text-[#EEEEEE]">Address</h2>
                                <p className="text-[#EEEEEE]">123 MotoRepair St, City, Country</p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Facebook className="text-[#00ADB5]" size={32} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <Instagram className="text-[#00ADB5]" size={32} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Twitter className="text-[#00ADB5]" size={32} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;