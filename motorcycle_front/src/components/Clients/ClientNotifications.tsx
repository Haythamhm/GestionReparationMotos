import { useState, useEffect } from 'react';

const ClientNotifications = () => {
    interface Notification {
        message: string;
    }

    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        // Fetch notifications from the server
        // Example: fetchNotificationsByClientId(clientId)
        // .then(response => setNotifications(response.data))
        // .catch(error => console.error('Error fetching notifications:', error));
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Notifications</h2>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index} className="mb-2">
                        {notification.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientNotifications;