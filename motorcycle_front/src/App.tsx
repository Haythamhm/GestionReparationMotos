import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ClientLayout from './components/ClientLayout';
import ClientsPage from './pages/ClientsPage';
import ClientDetails from './components/Clients/ClientDetails';
import MotorcyclesPage from './pages/MotorcyclesPage';
import MaintenancePage from './pages/MaintenancePage';
import PartsPage from './pages/PartsPage';
import PaymentsPage from './pages/PaymentsPage';
import Dashboard from './components/Dashboard';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ClientMotorcycles from './components/Clients/ClientMotorcycles';
import ClientMaintenanceRequests from './components/Clients/ClientMaintenanceRequests';
import ClientProfile from './components/Clients/ClientProfile';
import ClientNotifications from './components/Clients/ClientNotifications';
import ClientDashboardPage from './pages/ClientDashboardPage';

function App() {
    return (
        <Router>
            <Routes>
                {/* Admin Routes */}
                <Route path="/admin" element={<Layout />}>
                    <Route path="clients" element={<ClientsPage />} />
                    <Route path="clients/:id" element={<ClientDetails />} />
                    <Route path="motorcycles" element={<MotorcyclesPage />} />
                    <Route path="maintenance" element={<MaintenancePage />} />
                    <Route path="parts" element={<PartsPage />} />
                    <Route path="payments" element={<PaymentsPage />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route index element={<Dashboard />} />
                </Route>
                {/* Client Routes */}
                <Route path="/" element={<ClientLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutUsPage />} />
                    <Route path="contact" element={<ContactUsPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="motorcycles" element={<ClientMotorcycles />} />
                    <Route path="maintenance-requests" element={<ClientMaintenanceRequests />} />
                    <Route path="profile" element={<ClientProfile />} />
                    <Route path="notifications" element={<ClientNotifications />} />
                    <Route path="dashboard" element={<ClientDashboardPage />} /> {/* Client Dashboard */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;