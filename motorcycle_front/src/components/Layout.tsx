import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
    return (
        <div className="flex min-h-screen bg-[#EEEEEE]">
            <Sidebar isOpen={false} toggleSidebar={function (): void {
                throw new Error('Function not implemented.');
            } } />
            <div className="flex-1 flex flex-col">
                <Header toggleSidebar={function (): void {
                    throw new Error('Function not implemented.');
                } } />
                <main className="flex-1 p-6 overflow-x-hidden overflow-y-auto">
                    <div className="max-w-7xl mx-auto animate-fadeIn">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;