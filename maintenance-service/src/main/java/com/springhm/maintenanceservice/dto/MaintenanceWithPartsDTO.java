package com.springhm.maintenanceservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MaintenanceWithPartsDTO {
    private Long id;
    private Long clientId;
    private Long motorcycleId;
    private String problem;
    private String status;
    private LocalDateTime entryDate;
    private LocalDateTime exitDate;
    private Double cost;
    private Double costTotal; // Total cost after calculating parts
    private List<PartDTO> parts;
}

