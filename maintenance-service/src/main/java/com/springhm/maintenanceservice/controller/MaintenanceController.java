package com.springhm.maintenanceservice.controller;

import com.springhm.maintenanceservice.entity.Maintenance;
import com.springhm.maintenanceservice.service.MaintenanceService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/maintenance")
public class MaintenanceController {
    @Autowired
    private MaintenanceService maintenanceService;

    @GetMapping
    public ResponseEntity<List<Maintenance>> getAllMaintenance() {
        return ResponseEntity.ok(maintenanceService.getAllMaintenance());
    }

    @GetMapping("/client/{clientId}")
    public ResponseEntity<List<Maintenance>> getMaintenanceByClientId(@PathVariable Long clientId) {
        return ResponseEntity.ok(maintenanceService.getMaintenanceByClientId(clientId));
    }

    @GetMapping("/motorcycle/{motorcycleId}")
    public ResponseEntity<List<Maintenance>> getMaintenanceByMotorcycleId(@PathVariable Long motorcycleId) {
        return ResponseEntity.ok(maintenanceService.getMaintenanceByMotorcycleId(motorcycleId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Maintenance> getMaintenanceById(@PathVariable Long id) {
        return ResponseEntity.ok(maintenanceService.getMaintenanceById(id));
    }

    @PostMapping
    public ResponseEntity<Maintenance> createMaintenance(@RequestBody Maintenance maintenance) {
        return ResponseEntity.ok(maintenanceService.createMaintenance(maintenance));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Maintenance> updateMaintenance(@PathVariable Long id, @RequestBody Maintenance maintenance) {
        return ResponseEntity.ok(maintenanceService.updateMaintenance( id, maintenance));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMaintenance(@PathVariable Long id) {
        maintenanceService.deleteMaintenance(id);
        return ResponseEntity.ok().build();
    }
}
