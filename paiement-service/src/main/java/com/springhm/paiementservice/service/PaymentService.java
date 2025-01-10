package com.springhm.paiementservice.service;

import com.springhm.paiementservice.feign.MaintenanceServiceClient;
import com.springhm.paiementservice.model.Payment;
import com.springhm.paiementservice.repository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PaymentService {
    private final PaymentRepository paymentRepository;
    private final MaintenanceServiceClient maintenanceServiceClient;

    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public Payment getPaymentById(Long id) {
        return paymentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Payment not found"));
    }

    public List<Payment> getPaymentsByClientId(Long clientId) {
        return paymentRepository.findByClientId(clientId);
    }

    public List<Payment> getPaymentsByMaintenanceId(Long maintenanceId) {
        return paymentRepository.findByMaintenanceId(maintenanceId);
    }

    public Payment processPayment(Payment payment) {
        var maintenance = maintenanceServiceClient.getMaintenance(payment.getMaintenanceId());
        payment.setClientId(maintenance.getClientId());
        payment.setAmount(maintenance.getCost());
        payment.setPaymentDate(LocalDateTime.now());
        payment.setTransactionId(UUID.randomUUID().toString());
        payment.setStatus("COMPLETED");

        return paymentRepository.save(payment);
    }

    public Payment updatePayment(Long id, Payment payment) {
        Payment existingPayment = getPaymentById(id);
        existingPayment.setStatus(payment.getStatus());
        existingPayment.setPaymentMethod(payment.getPaymentMethod());
        return paymentRepository.save(existingPayment);
    }
}