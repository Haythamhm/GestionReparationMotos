package com.springhm.notificationservice.service;

import com.springhm.notificationservice.feignclient.ClientServiceClient;
import com.springhm.notificationservice.model.Notification;
import com.springhm.notificationservice.model.NotificationType;
import com.springhm.notificationservice.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class NotificationService {
    private final NotificationRepository notificationRepository;
    private final ClientServiceClient clientServiceClient;

    public List<Notification> getAllNotifications() {
        return notificationRepository.findAll();
    }

    public Notification getNotificationById(Long id) {
        return notificationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Notification not found"));
    }

    public List<Notification> getNotificationsByClientId(Long clientId) {
        return notificationRepository.findByClientId(clientId);
    }

    public List<Notification> getUnreadNotificationsByClientId(Long clientId) {
        return notificationRepository.findByClientIdAndStatus(clientId, "UNREAD");
    }

    public Notification createNotification(Notification notification) {
        var client = clientServiceClient.getClient(notification.getClientId());
        notification.setSentAt(LocalDateTime.now());
        notification.setStatus("UNREAD");
        return notificationRepository.save(notification);
    }

    public Notification markAsRead(Long id) {
        Notification notification = getNotificationById(id);
        notification.setStatus("READ");
        notification.setReadAt(LocalDateTime.now());
        return notificationRepository.save(notification);
    }

    public Notification createMaintenanceStatusNotification(Long clientId, String maintenanceStatus) {
        Notification notification = new Notification();
        notification.setClientId(clientId);
        notification.setType("MAINTENANCE_STATUS");
        notification.setNotificationType(NotificationType.MAINTENANCE_STATUS);
        notification.setMessage("Your maintenance status has been updated to: " + maintenanceStatus);
        return createNotification(notification);
    }

    public Notification createPaymentConfirmationNotification(Long clientId, String transactionId) {
        Notification notification = new Notification();
        notification.setClientId(clientId);
        notification.setType("PAYMENT_CONFIRMATION");
        notification.setNotificationType(NotificationType.PAYMENT_CONFIRMATION);
        notification.setMessage("Payment confirmed with transaction ID: " + transactionId);
        return createNotification(notification);
    }
}
