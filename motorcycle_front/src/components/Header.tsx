import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Bell } from 'lucide-react';
import { Badge, IconButton } from '@mui/material';
import Menu from '@mui/icons-material/Menu';

interface HeaderProps {
    toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
    const [notifications, setNotifications] = useState(0);

    useEffect(() => {
        // Simulate receiving notifications
        const interval = setInterval(() => {
            setNotifications(prev => (prev + 1) % 10);
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="bg-[#393E46] shadow-lg px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <button onClick={toggleSidebar} className="lg:hidden p-2 text-white">
                    <Menu fontSize="large" />
                </button>
                <NavLink to="/admin" className="text-white hover:text-[#00ADB5] transition-colors duration-200">
                    MotoRepair
                </NavLink>
            </div>
            <div className="flex items-center space-x-4">
                <IconButton className="text-[#EEEEEE] hover:text-[#00ADB5] transition-colors duration-200">
                    <Badge
                        badgeContent={notifications}
                        color="error"
                        className="animate-pulse"
                    >
                        <Bell size={20} />
                    </Badge>
                </IconButton>
            </div>
        </header>
    );
};

export default Header;