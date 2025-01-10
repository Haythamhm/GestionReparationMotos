package com.springhm.reportservice.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PaymentDto {
    private Long id;
    private Long maintenanceId;
    private Long clientId;
    private Double amount;
    private String status;
    private String paymentMethod;
    private LocalDateTime paymentDate;
    private String transactionId;
}
