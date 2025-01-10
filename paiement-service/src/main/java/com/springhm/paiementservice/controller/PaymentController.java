package com.springhm.paiementservice.controller;

import com.springhm.paiementservice.model.Payment;
import com.springhm.paiementservice.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    @GetMapping
    public ResponseEntity<List<Payment>> getAllPayments() {
        return ResponseEntity.ok(paymentService.getAllPayments());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Payment> getPaymentById(@PathVariable Long id) {
        return ResponseEntity.ok(paymentService.getPaymentById(id));
    }

    @GetMapping("/client/{clientId}")
    public ResponseEntity<List<Payment>> getPaymentsByClientId(@PathVariable Long clientId) {
        return ResponseEntity.ok(paymentService.getPaymentsByClientId(clientId));
    }

    @GetMapping("/maintenance/{maintenanceId}")
    public ResponseEntity<List<Payment>> getPaymentsByMaintenanceId(@PathVariable Long maintenanceId) {
        return ResponseEntity.ok(paymentService.getPaymentsByMaintenanceId(maintenanceId));
    }

    @PostMapping
    public ResponseEntity<Payment> processPayment(@RequestBody Payment payment) {
        return ResponseEntity.ok(paymentService.processPayment(payment));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Payment> updatePayment(@PathVariable Long id, @RequestBody Payment payment) {
        return ResponseEntity.ok(paymentService.updatePayment(id, payment));
    }
}
