package org.example.piecesservice.service;

import org.example.piecesservice.dto.PartDTO;
import org.example.piecesservice.entity.Part;
import org.example.piecesservice.repository.PartsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PartsService {
    @Autowired
    private PartsRepository partsRepository;

    public List<PartDTO> getAllParts() {
        return partsRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public PartDTO getPartById(Long id) {
        Part part = partsRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Part not found"));
        return convertToDTO(part);
    }

    public PartDTO addPart(PartDTO partDTO) {
        Part part = convertToEntity(partDTO);
        return convertToDTO(partsRepository.save(part));
    }

    public List<PartDTO> addParts(List<PartDTO> partDTOs) {
        List<Part> parts = partDTOs.stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
        List<Part> savedParts = partsRepository.saveAll(parts);
        return savedParts.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public void deletePart(Long id) {
        partsRepository.deleteById(id);
    }

    private PartDTO convertToDTO(Part part) {
        PartDTO partDTO = new PartDTO();
        partDTO.setId(part.getId());
        partDTO.setName(part.getName());
        partDTO.setQuantity(part.getQuantity());
        partDTO.setPrice(part.getPrice());
        return partDTO;
    }

    private Part convertToEntity(PartDTO partDTO) {
        Part part = new Part();
        part.setId(partDTO.getId());
        part.setName(partDTO.getName());
        part.setQuantity(partDTO.getQuantity());
        part.setPrice(partDTO.getPrice());
        return part;
    }
}
