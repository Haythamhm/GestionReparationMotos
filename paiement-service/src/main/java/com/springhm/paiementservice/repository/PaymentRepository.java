package com.springhm.paiementservice.repository;

import com.springhm.paiementservice.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
    List<Payment> findByClientId(Long clientId);
    List<Payment> findByMaintenanceId(Long maintenanceId);
 }
