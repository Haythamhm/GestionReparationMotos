package com.springhm.notificationservice.controller;

import com.springhm.notificationservice.model.Notification;
import com.springhm.notificationservice.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @GetMapping
    public ResponseEntity<List<Notification>> getAllNotifications() {
        return ResponseEntity.ok(notificationService.getAllNotifications());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Notification> getNotificationById(@PathVariable Long id) {
        return ResponseEntity.ok(notificationService.getNotificationById(id));
    }

    @GetMapping("/client/{clientId}")
    public ResponseEntity<List<Notification>> getNotificationsByClientId(@PathVariable Long clientId) {
        return ResponseEntity.ok(notificationService.getNotificationsByClientId(clientId));
    }

    @GetMapping("/client/{clientId}/unread")
    public ResponseEntity<List<Notification>> getUnreadNotificationsByClientId(@PathVariable Long clientId) {
        return ResponseEntity.ok(notificationService.getUnreadNotificationsByClientId(clientId));
    }

    @PostMapping
    public ResponseEntity<Notification> createNotification(@RequestBody Notification notification) {
        return ResponseEntity.ok(notificationService.createNotification(notification));
    }

    @PutMapping("/{id}/read")
    public ResponseEntity<Notification> markNotificationAsRead(@PathVariable Long id) {
        return ResponseEntity.ok(notificationService.markAsRead(id));
    }

    @PostMapping("/maintenance-status")
    public ResponseEntity<Notification> createMaintenanceStatusNotification(
            @RequestParam Long clientId,
            @RequestParam String maintenanceStatus) {
        return ResponseEntity.ok(notificationService.createMaintenanceStatusNotification(clientId, maintenanceStatus));
    }

    @PostMapping("/payment-confirmation")
    public ResponseEntity<Notification> createPaymentConfirmationNotification(
            @RequestParam Long clientId,
            @RequestParam String transactionId) {
        return ResponseEntity.ok(notificationService.createPaymentConfirmationNotification(clientId, transactionId));
    }
}
