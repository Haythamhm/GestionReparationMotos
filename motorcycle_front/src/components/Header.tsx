import { Sun, Bell } from 'lucide-react';

interface HeaderProps {
    toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
    return (
        <header className="header flex items-center justify-between px-4 py-2 shadow-md bg-[#424242] text-white">
            <button onClick={toggleSidebar} className="p-2 md:hidden">
                <Sun size={24} />
            </button>
            <h1 className="text-xl">Motorcycle Repair Management</h1>
            <div className="flex items-center space-x-4">
                <button className="p-2">
                    <Sun size={24} />
                </button>
                <button className="p-2">
                    <Bell size={24} />
                </button>
            </div>
        </header>
    );
};

export default Header;