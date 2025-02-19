package com.springhm.maintenanceservice.controller;

import com.springhm.maintenanceservice.dto.MaintenanceWithPartsDTO;
import com.springhm.maintenanceservice.dto.MaintenanceRequestDTO;
import com.springhm.maintenanceservice.entity.Maintenance;
import com.springhm.maintenanceservice.service.MaintenanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/maintenance")
public class MaintenanceController {

    @Autowired
    private MaintenanceService maintenanceService;

    @GetMapping
    public ResponseEntity<List<MaintenanceWithPartsDTO>> getAllMaintenance() {
        try {
            List<MaintenanceWithPartsDTO> maintenanceDTOs = maintenanceService.getAllMaintenance();
            return ResponseEntity.ok(maintenanceDTOs);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }

    @GetMapping("/client/{clientId}")
    public ResponseEntity<List<MaintenanceWithPartsDTO>> getMaintenanceByClientId(@PathVariable Long clientId) {
        try {
            List<MaintenanceWithPartsDTO> maintenanceDTOs = maintenanceService.getMaintenanceByClientId(clientId);
            return ResponseEntity.ok(maintenanceDTOs);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }

    @GetMapping("/motorcycle/{motorcycleId}")
    public ResponseEntity<List<MaintenanceWithPartsDTO>> getMaintenanceByMotorcycleId(@PathVariable Long motorcycleId) {
        try {
            List<MaintenanceWithPartsDTO> maintenanceDTOs = maintenanceService.getMaintenanceByMotorcycleId(motorcycleId);
            return ResponseEntity.ok(maintenanceDTOs);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<MaintenanceWithPartsDTO> getMaintenanceById(@PathVariable Long id) {
        try {
            MaintenanceWithPartsDTO maintenanceDTO = maintenanceService.getMaintenanceById(id);
            return ResponseEntity.ok(maintenanceDTO);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }

    @PostMapping
    public ResponseEntity<Maintenance> createMaintenance(@RequestBody MaintenanceRequestDTO maintenanceRequestDTO) {
        try {
            Maintenance maintenance = maintenanceService.createMaintenance(
                    maintenanceRequestDTO.getMaintenance(), maintenanceRequestDTO.getParts());
            return ResponseEntity.status(HttpStatus.CREATED).body(maintenance);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Maintenance> updateMaintenance(@PathVariable Long id, @RequestBody Maintenance maintenance) {
        try {
            Maintenance updatedMaintenance = maintenanceService.updateMaintenance(id, maintenance);
            return ResponseEntity.ok(updatedMaintenance);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMaintenance(@PathVariable Long id) {
        try {
            maintenanceService.deleteMaintenance(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }
}

