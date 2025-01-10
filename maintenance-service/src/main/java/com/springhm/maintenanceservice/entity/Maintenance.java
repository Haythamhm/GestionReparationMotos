package com.springhm.maintenanceservice.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "maintenance")
@AllArgsConstructor
@NoArgsConstructor
public class Maintenance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long clientId;
    private Long motorcycleId;
    private String problem;
    private String status;
    private LocalDateTime entryDate;
    private LocalDateTime exitDate;
    private Double cost;
}

