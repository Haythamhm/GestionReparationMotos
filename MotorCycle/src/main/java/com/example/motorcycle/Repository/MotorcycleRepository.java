package com.example.motorcycle.Repository;

import com.example.motorcycle.Model.Motorcycle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MotorcycleRepository extends JpaRepository<Motorcycle, Long> {
    List<Motorcycle> findByClientId(Long clientId);
}
