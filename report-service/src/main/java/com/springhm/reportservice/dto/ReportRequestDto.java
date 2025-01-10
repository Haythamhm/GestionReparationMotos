package com.springhm.reportservice.dto;

import lombok.Data;
import jakarta.validation.constraints.NotNull;

@Data
public class ReportRequestDto {
    @NotNull(message = "User ID is required")
    private Long userId;

    private String reportType;
    private String dateRange;
}
