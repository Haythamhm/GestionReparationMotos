import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';

const ClientHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-[#393E46] text-[#EEEEEE] shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <NavLink to="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-[#00ADB5]">MotoRepair</span>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                `transition duration-200 ${isActive ? 'text-[#00ADB5]' : 'hover:text-[#00ADB5]'}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => 
                                `transition duration-200 ${isActive ? 'text-[#00ADB5]' : 'hover:text-[#00ADB5]'}`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) => 
                                `transition duration-200 ${isActive ? 'text-[#00ADB5]' : 'hover:text-[#00ADB5]'}`
                            }
                        >
                            Contact
                        </NavLink>
                        <NavLink 
                            to="/login" 
                            className={({ isActive }) => 
                                `flex items-center space-x-1 transition duration-200 ${isActive ? 'text-[#00ADB5]' : 'hover:text-[#00ADB5]'}`
                            }
                        >
                            <LogIn size={16} />
                            <span>Login</span>
                        </NavLink>
                        <NavLink 
                            to="/register" 
                            className={({ isActive }) => 
                                `flex items-center space-x-1 transition duration-200 ${isActive ? 'text-[#00ADB5]' : 'hover:text-[#00ADB5]'}`
                            }
                        >
                            <UserPlus size={16} />
                            <span>Register</span>
                        </NavLink>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 space-y-4">
                        <NavLink 
                            to="/" 
                            className="block py-2 hover:text-[#00ADB5]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            className="block py-2 hover:text-[#00ADB5]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            className="block py-2 hover:text-[#00ADB5]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </NavLink>
                        <NavLink 
                            to="/login" 
                            className="block py-2 flex items-center space-x-1 hover:text-[#00ADB5]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <LogIn size={16} />
                            <span>Login</span>
                        </NavLink>
                        <NavLink 
                            to="/register" 
                            className="block py-2 flex items-center space-x-1 hover:text-[#00ADB5]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <UserPlus size={16} />
                            <span>Register</span>
                        </NavLink>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default ClientHeader;