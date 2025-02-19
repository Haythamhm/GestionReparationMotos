import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const ClientFooter = () => {
    return (
        <footer className="bg-[#393E46] text-[#EEEEEE]">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#00ADB5]">MotoRepair</h3>
                        <p className="text-sm text-gray-300">
                            Your trusted partner for motorcycle maintenance and repair services.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <h4 className="font-bold">Quick Links</h4>
                        <nav className="flex flex-col space-y-2">
                            <NavLink to="/" className="text-gray-300 hover:text-[#00ADB5] transition">Home</NavLink>
                            <NavLink to="/services" className="text-gray-300 hover:text-[#00ADB5] transition">Services</NavLink>
                            <NavLink to="/about" className="text-gray-300 hover:text-[#00ADB5] transition">About</NavLink>
                            <NavLink to="/contact" className="text-gray-300 hover:text-[#00ADB5] transition">Contact</NavLink>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold">Services</h4>
                        <nav className="flex flex-col space-y-2">
                            <a href="#" className="text-gray-300 hover:text-[#00ADB5] transition">Maintenance</a>
                            <a href="#" className="text-gray-300 hover:text-[#00ADB5] transition">Repairs</a>
                            <a href="#" className="text-gray-300 hover:text-[#00ADB5] transition">Diagnostics</a>
                            <a href="#" className="text-gray-300 hover:text-[#00ADB5] transition">Customization</a>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold">Contact Info</h4>
                        <div className="space-y-2 text-gray-300">
                            <p className="flex items-center space-x-2">
                                <Phone size={16} />
                                <span>+1 (555) 123-4567</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <Mail size={16} />
                                <span>contact@motorepair.com</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <MapPin size={16} />
                                <span>123 Repair Street, Mechanic City</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-300">
                            &copy; {new Date().getFullYear()} MotoRepair. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-300 hover:text-[#00ADB5] transition">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-[#00ADB5] transition">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-[#00ADB5] transition">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ClientFooter;