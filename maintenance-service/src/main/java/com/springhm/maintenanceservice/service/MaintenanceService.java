package com.springhm.maintenanceservice.service;

import com.springhm.maintenanceservice.dto.MaintenanceWithPartsDTO;
import com.springhm.maintenanceservice.dto.PartDTO;
import com.springhm.maintenanceservice.dto.PartRequestDTO;
import com.springhm.maintenanceservice.entity.Maintenance;
import com.springhm.maintenanceservice.repository.MaintenanceRepository;
import com.springhm.maintenanceservice.feignclient.ClientServiceClient;
import com.springhm.maintenanceservice.feignclient.MotorcycleServiceClient;
import com.springhm.maintenanceservice.feignclient.PartsServiceClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import feign.FeignException;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MaintenanceService {
    @Autowired
    private MaintenanceRepository maintenanceRepository;

    @Autowired
    private ClientServiceClient clientServiceClient;

    @Autowired
    private MotorcycleServiceClient motorcycleServiceClient;

    @Autowired
    private PartsServiceClient partsServiceClient;

    public List<MaintenanceWithPartsDTO> getAllMaintenance() {
        List<Maintenance> maintenances = maintenanceRepository.findAll();
        return maintenances.stream()
                .map(this::convertToMaintenanceWithPartsDTO)
                .collect(Collectors.toList());
    }

    public List<MaintenanceWithPartsDTO> getMaintenanceByClientId(Long clientId) {
        List<Maintenance> maintenances = maintenanceRepository.findByClientId(clientId);
        return maintenances.stream()
                .map(this::convertToMaintenanceWithPartsDTO)
                .collect(Collectors.toList());
    }

    public List<MaintenanceWithPartsDTO> getMaintenanceByMotorcycleId(Long motorcycleId) {
        List<Maintenance> maintenances = maintenanceRepository.findByMotorcycleId(motorcycleId);
        return maintenances.stream()
                .map(this::convertToMaintenanceWithPartsDTO)
                .collect(Collectors.toList());
    }

    public MaintenanceWithPartsDTO getMaintenanceById(Long id) {
        Maintenance maintenance = maintenanceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Maintenance not found"));
        return convertToMaintenanceWithPartsDTO(maintenance);
    }

    public Maintenance createMaintenance(Maintenance maintenance, List<PartRequestDTO> partRequests) {
        try {
            clientServiceClient.getClient(maintenance.getClientId());
            motorcycleServiceClient.getMotorcycle(maintenance.getMotorcycleId());

            List<PartDTO> parts = partRequests.stream()
                    .map(partRequest -> {
                        PartDTO part = partsServiceClient.getPartById(partRequest.getId());
                        if (part.getQuantity() < partRequest.getQuantity()) {
                            throw new RuntimeException("Insufficient quantity for part: " + part.getName());
                        }
                        part.setQuantity(partRequest.getQuantity());
                        return part;
                    })
                    .collect(Collectors.toList());

            double totalPartsCost = parts.stream()
                    .mapToDouble(part -> part.getPrice() * part.getQuantity())
                    .sum();

            maintenance.setCostTotal(maintenance.getCost() + totalPartsCost); // Set costTotal
            maintenance.setParts(parts);

            return maintenanceRepository.save(maintenance);
        } catch (FeignException.NotFound e) {
            throw new RuntimeException("Service not found: " + e.getMessage());
        } catch (Exception e) {
            throw new RuntimeException("Error creating maintenance: " + e.getMessage());
        }
    }

    public Maintenance updateMaintenance(Long id, Maintenance maintenance) {
        Maintenance existingMaintenance = maintenanceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Maintenance not found"));

        existingMaintenance.setProblem(maintenance.getProblem());
        existingMaintenance.setStatus(maintenance.getStatus());
        existingMaintenance.setExitDate(maintenance.getExitDate());
        existingMaintenance.setCost(maintenance.getCost());

        if (maintenance.getParts() != null && !maintenance.getParts().isEmpty()) {
            existingMaintenance.setParts(maintenance.getParts());
        }

        return maintenanceRepository.save(existingMaintenance);
    }

    public void deleteMaintenance(Long id) {
        maintenanceRepository.deleteById(id);
    }

    private MaintenanceWithPartsDTO convertToMaintenanceWithPartsDTO(Maintenance maintenance) {
        List<PartDTO> parts = maintenance.getParts().stream()
                .collect(Collectors.toList());

        return new MaintenanceWithPartsDTO(
                maintenance.getId(),
                maintenance.getClientId(),
                maintenance.getMotorcycleId(),
                maintenance.getProblem(),
                maintenance.getStatus(),
                maintenance.getEntryDate(),
                maintenance.getExitDate(),
                maintenance.getCost(),
                maintenance.getCostTotal(), // Include costTotal
                parts
        );
    }

}
