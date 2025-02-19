import { Outlet } from 'react-router-dom';
import ClientHeader from './ClientHeader';
import ClientFooter from './ClientFooter';
import HomePage from '../pages/HomePage';
import AboutUsPage from '../pages/AboutUsPage';
import ContactUsPage from '../pages/ContactUsPage';

const ClientLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#222831] text-[#EEEEEE]">
            <ClientHeader />
            <main className="flex-1">
                <Outlet />
            </main>
            <ClientFooter />
        </div>
    );
};

export { ClientLayout, HomePage, AboutUsPage, ContactUsPage };