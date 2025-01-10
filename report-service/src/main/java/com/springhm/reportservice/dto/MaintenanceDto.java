package com.springhm.reportservice.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class MaintenanceDto {
    private Long id;
    private Long clientId;
    private Long motorcycleId;
    private String problem;
    private String status;
    private LocalDateTime entryDate;
    private LocalDateTime exitDate;
    private Double cost;
}
