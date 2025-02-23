package com.springhm.maintenanceservice.repository;

import com.springhm.maintenanceservice.entity.Maintenance;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MaintenanceRepository extends JpaRepository<Maintenance, Long> {
    List<Maintenance> findByClientId(Long clientId);
    List<Maintenance> findByMotorcycleId(Long motorcycleId);
    //List<Maintenance> findByClientIdAndMotorcycleId(Long clientId, Long motorcycleId);
}
