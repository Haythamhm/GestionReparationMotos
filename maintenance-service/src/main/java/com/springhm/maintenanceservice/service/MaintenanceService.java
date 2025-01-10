package com.springhm.maintenanceservice.service;

import com.springhm.maintenanceservice.entity.Maintenance;
import com.springhm.maintenanceservice.feignclient.ClientServiceClient;
import com.springhm.maintenanceservice.feignclient.MotorcycleServiceClient;
import com.springhm.maintenanceservice.repository.MaintenanceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MaintenanceService {

    private final MaintenanceRepository maintenanceRepository;
    private final ClientServiceClient clientServiceClient;
    private final MotorcycleServiceClient motorcycleServiceClient;
    private static final List<String> VALID_STATUSES = List.of("PENDING", "IN PROGRESS", "COMPLETED");


    public List<Maintenance> getAllMaintenance() {
        return maintenanceRepository.findAll();
    }

    public List<Maintenance> getMaintenanceByClientId(Long clientId) {
        return maintenanceRepository.findByClientId(clientId);
    }

    public List<Maintenance> getMaintenanceByMotorcycleId(Long motorcycleId) {
        return maintenanceRepository.findByMotorcycleId(motorcycleId);
    }

    public Maintenance getMaintenanceById(Long id) {
        return maintenanceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Maintenance not found"));
    }

    public Maintenance createMaintenance(Maintenance maintenance) {
        clientServiceClient.getClient(maintenance.getClientId());
        motorcycleServiceClient.getMotorcycle(maintenance.getMotorcycleId());

        maintenance.setEntryDate(LocalDateTime.now());

        // Si le statut est null ou invalide, affecter "PENDING"
        if (maintenance.getStatus() == null || !VALID_STATUSES.contains(maintenance.getStatus().toUpperCase())) {
            maintenance.setStatus("PENDING");
        }

        return maintenanceRepository.save(maintenance);
    }

    public Maintenance updateMaintenance(Long id, Maintenance maintenance) {
        Maintenance existingMaintenance = getMaintenanceById(id);
        existingMaintenance.setProblem(maintenance.getProblem());
        existingMaintenance.setStatus(maintenance.getStatus());
        existingMaintenance.setExitDate(maintenance.getExitDate());
        existingMaintenance.setCost(maintenance.getCost());
        return maintenanceRepository.save(existingMaintenance);
    }

    public void deleteMaintenance(Long id) {
        maintenanceRepository.deleteById(id);
    }

}
