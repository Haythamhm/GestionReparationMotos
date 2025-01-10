package com.springhm.paiementservice.dto;

import lombok.Data;

import java.time.LocalDateTime;


@Data
public class MaintenanceDto {
    private Long id;
    private Long clientId;
    private Double cost;
    private String status;
}
