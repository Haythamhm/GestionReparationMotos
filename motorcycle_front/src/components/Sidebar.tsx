import React from 'react';
import { NavLink } from 'react-router-dom';
import { Bike, X, Menu, Users, Wrench, DollarSign, BarChart2, Package } from 'lucide-react';

const navigation = [
    { name: 'Dashboard', path: '/admin', icon: BarChart2 },
    { name: 'Clients', path: '/admin/clients', icon: Users },
    { name: 'Motorcycles', path: '/admin/motorcycles', icon: Bike },
    { name: 'Parts', path: '/admin/parts', icon: Package },
    { name: 'Maintenance', path: '/admin/maintenance', icon: Wrench },
    { name: 'Payments', path: '/admin/payments', icon: DollarSign }
];

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <>
            {/* Mobile menu button */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#393E46]"
                onClick={toggleSidebar}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-[#393E46] transform transition-transform duration-300 ease-in-out
                           ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 p-4">
                        <Bike className="h-8 w-8 text-[#00ADB5]" />
                        <span className="text-xl font-bold text-white">MotoRepair</span>
                    </div>

                    <nav className="flex-1 px-2 py-4 space-y-1">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center p-2 text-base font-medium rounded-md text-white hover:bg-[#00ADB5] transition-colors duration-200 ${isActive ? 'bg-[#00ADB5]' : ''}`
                                }
                                onClick={toggleSidebar}
                            >
                                <item.icon className="h-5 w-5 mr-3" />
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;