package com.springhm.maintenanceservice.dto;

import com.springhm.maintenanceservice.entity.Maintenance;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MaintenanceRequestDTO {
    private Maintenance maintenance;
    private List<PartRequestDTO> parts;
}

