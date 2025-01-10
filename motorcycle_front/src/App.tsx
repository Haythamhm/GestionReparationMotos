import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientsPage from './pages/ClientsPage';
import MotorcyclesPage from './pages/MotorcyclesPage';
import MaintenancePage from './pages/MaintenancePage';
import PaymentsPage from './pages/PaymentsPage';
import Dashboard from './components/Dashboard';
import ClientDetails from './components/Clients/ClientDetails';
import Layout from './components/Layout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/clients" element={<ClientsPage />} />
                    <Route path="/clients/:id" element={<ClientDetails />} />
                    <Route path="/motorcycles" element={<MotorcyclesPage />} />
                    <Route path="/maintenance" element={<MaintenancePage />} />
                    <Route path="/payments" element={<PaymentsPage />} />
                    <Route path="/" element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;