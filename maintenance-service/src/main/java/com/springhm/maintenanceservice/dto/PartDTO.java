package com.springhm.maintenanceservice.dto;


import lombok.Data;

@Data
public class PartDTO {
    private Long id;
    private String name;
    private int quantity;
    private double price;
}
