import { Users, Wrench, DollarSign, BarChart2, X, Bike } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => (
  <div className={`fixed inset-y-0 left-0 w-64 bg-[#229799] text-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:relative md:translate-x-0`}>
    <div className="flex justify-between items-center p-4 md:hidden">
      <h1 className="text-xl font-bold">Menu</h1>
      <button onClick={toggleSidebar} className="text-white">
        <X size={24} />
      </button>
    </div>
    <nav className="p-4">
      <ul className="space-y-4">
        <li className="flex items-center">
          <BarChart2 className="mr-2" />
          <Link to="/" onClick={toggleSidebar} className="hover:text-[#48CFCB]">Dashboard</Link>
        </li>
        <li className="flex items-center">
          <Users className="mr-2" />
          <Link to="/clients" onClick={toggleSidebar} className="hover:text-[#48CFCB]">Clients</Link>
        </li>
        <li className="flex items-center">
          <Bike className="mr-2" />
          <Link to="/motorcycles" onClick={toggleSidebar} className="hover:text-[#48CFCB]">Motorcycles</Link>
        </li>
        <li className="flex items-center">
          <Wrench className="mr-2" />
          <Link to="/maintenance" onClick={toggleSidebar} className="hover:text-[#48CFCB]">Maintenance</Link>
        </li>
        <li className="flex items-center">
          <DollarSign className="mr-2" />
          <Link to="/payments" onClick={toggleSidebar} className="hover:text-[#48CFCB]">Payments</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;