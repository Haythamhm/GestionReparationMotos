import ClientMotorcycles from './ClientMotorcycles';
import ClientMaintenanceRequests from './ClientMaintenanceRequests';
import ClientNotifications from './ClientNotifications';
import ClientProfile from './ClientProfile';

const ClientDashboard = () => {
    return (
        <div className="space-y-8">
            <ClientProfile />
            <ClientMotorcycles />
            <ClientMaintenanceRequests />
            <ClientNotifications />
        </div>
    );
};

export default ClientDashboard;