package org.example.piecesservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PartDTO {
    private Long id;
    private String name;
    private int quantity;
    private double price;
}
