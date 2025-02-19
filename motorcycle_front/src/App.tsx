import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { ClientLayout, HomePage, AboutUsPage, ContactUsPage } from './components/ClientLayout';
import ClientsPage from './pages/ClientsPage';
import MotorcyclesPage from './pages/MotorcyclesPage';
import MaintenancePage from './pages/MaintenancePage';
import PaymentsPage from './pages/PaymentsPage';
import Dashboard from './components/Dashboard';
import ClientDetails from './components/Clients/ClientDetails';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import PartsPage from './pages/PartsPage';

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
                    <Route index element={<Dashboard />} />
                </Route>
                {/* Client Routes */}
                <Route path="/" element={<ClientLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutUsPage />} />
                    <Route path="contact" element={<ContactUsPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="login" element={<LoginPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;