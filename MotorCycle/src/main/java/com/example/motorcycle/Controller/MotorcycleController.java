package com.example.motorcycle.Controller;

import com.example.motorcycle.Model.Motorcycle;
import com.example.motorcycle.Service.MotorcycleService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/motorcycles")
@RequiredArgsConstructor
public class MotorcycleController {
    private final MotorcycleService motorcycleService;

    @GetMapping
    public ResponseEntity<List<Motorcycle>> getAllMotorcycles() {
        return ResponseEntity.ok(motorcycleService.getAllMotorcycles());
    }

    @GetMapping("/client/{clientId}")
    public ResponseEntity<List<Motorcycle>> getMotorcyclesByClientId(@PathVariable Long clientId) {
        return ResponseEntity.ok(motorcycleService.getMotorcyclesByClientId(clientId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Motorcycle> getMotorcycleById(@PathVariable Long id) {
        return ResponseEntity.ok(motorcycleService.getMotorcycleById(id));
    }

    @PostMapping
    public ResponseEntity<Motorcycle> createMotorcycle(@RequestBody Motorcycle motorcycle) {
        return ResponseEntity.ok(motorcycleService.createMotorcycle(motorcycle));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Motorcycle> updateMotorcycle(@PathVariable Long id, @RequestBody Motorcycle motorcycle) {
        return ResponseEntity.ok(motorcycleService.updateMotorcycle(id, motorcycle));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMotorcycle(@PathVariable Long id) {
        motorcycleService.deleteMotorcycle(id);
        return ResponseEntity.ok().build();
    }
}
