package com.springhm.reportservice.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.springhm.reportservice.dto.ReportRequestDto;
import com.springhm.reportservice.model.Report;
import com.springhm.reportservice.service.ReportService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/reports")
public class ReportController {
    @Autowired
    private ReportService reportService;

    @GetMapping
    public ResponseEntity<List<Report>> getAllReports() {
        return ResponseEntity.ok(reportService.getAllReports());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Report> getReportById(@PathVariable Long id) {
        return ResponseEntity.ok(reportService.getReportById(id));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Report>> getReportsByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(reportService.getReportsByUser(userId));
    }

    @PostMapping("/maintenance")
    public ResponseEntity<Report> generateMaintenanceReport(@Valid @RequestBody ReportRequestDto request) throws JsonProcessingException {
        return ResponseEntity.ok(reportService.generateMaintenanceReport(request.getUserId()));
    }

    @PostMapping("/payment")
    public ResponseEntity<Report> generatePaymentReport(@Valid @RequestBody ReportRequestDto request) throws JsonProcessingException {
        return ResponseEntity.ok(reportService.generatePaymentReport(request.getUserId()));
    }
}
