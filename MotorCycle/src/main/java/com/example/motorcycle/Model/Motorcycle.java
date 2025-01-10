package com.example.motorcycle.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "motorcycles")
@Data
public class Motorcycle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long clientId;
    private String brand;
    private String model;
    private String color;
    private Integer mileage;

    @jakarta.persistence.Column(name = "`condition`")
    private String condition;

}
