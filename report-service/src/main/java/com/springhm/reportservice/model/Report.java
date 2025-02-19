package com.springhm.reportservice.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "reports")
@AllArgsConstructor
@NoArgsConstructor
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String type;
    private String title;
    private String content;
    private LocalDateTime generatedAt;
    private Long generatedBy;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ReportStatus status;

    @Column(columnDefinition = "json")
    private String data;
}
