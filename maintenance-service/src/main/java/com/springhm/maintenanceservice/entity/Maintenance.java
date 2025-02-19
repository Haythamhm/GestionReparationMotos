package com.springhm.maintenanceservice.entity;

import com.springhm.maintenanceservice.dto.PartDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private Double cost; // Initial cost
    private Double costTotal; // Total cost after calculating parts

    @Transient
    private List<PartDTO> parts = new ArrayList<>();
}


