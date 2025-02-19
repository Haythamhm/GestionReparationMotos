package org.example.piecesservice.controller;

import org.example.piecesservice.dto.PartDTO;
import org.example.piecesservice.service.PartsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/parts")
public class PartsController {
    @Autowired
    private PartsService partsService;

    @GetMapping
    public List<PartDTO> getAllParts() {
        return partsService.getAllParts();
    }

    @GetMapping("/{id}")
    public PartDTO getPartById(@PathVariable Long id) {
        return partsService.getPartById(id);
    }

    @PostMapping("/batch")
    public List<PartDTO> addParts(@RequestBody List<PartDTO> parts) {
        return partsService.addParts(parts);
    }

    @DeleteMapping("/{id}")
    public void deletePart(@PathVariable Long id) {
        partsService.deletePart(id);
    }
}
