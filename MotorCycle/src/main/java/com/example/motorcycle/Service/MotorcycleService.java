package com.example.motorcycle.Service;

import com.example.motorcycle.Model.Motorcycle;
import com.example.motorcycle.Repository.MotorcycleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MotorcycleService {
    private final MotorcycleRepository motorcycleRepository;

    public List<Motorcycle> getAllMotorcycles() {
        return motorcycleRepository.findAll();
    }

    public List<Motorcycle> getMotorcyclesByClientId(Long clientId) {
        return motorcycleRepository.findByClientId(clientId);
    }

    public Motorcycle getMotorcycleById(Long id) {
        return motorcycleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Motorcycle not found"));
    }

    public Motorcycle createMotorcycle(Motorcycle motorcycle) {
        return motorcycleRepository.save(motorcycle);
    }

    public Motorcycle updateMotorcycle(Long id, Motorcycle motorcycle) {
        Motorcycle existingMotorcycle = getMotorcycleById(id);
        existingMotorcycle.setBrand(motorcycle.getBrand());
        existingMotorcycle.setModel(motorcycle.getModel());
        existingMotorcycle.setColor(motorcycle.getColor());
        existingMotorcycle.setMileage(motorcycle.getMileage());
        existingMotorcycle.setCondition(motorcycle.getCondition());
        return motorcycleRepository.save(existingMotorcycle);
    }

    public void deleteMotorcycle(Long id) {
        motorcycleRepository.deleteById(id);
    }
}