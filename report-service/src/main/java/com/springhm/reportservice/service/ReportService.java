package com.springhm.reportservice.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.springhm.reportservice.feign.MaintenanceServiceClient;
import com.springhm.reportservice.feign.PaymentServiceClient;
import com.springhm.reportservice.model.Report;
import com.springhm.reportservice.model.ReportStatus;
import com.springhm.reportservice.repository.ReportRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReportService {
    @Autowired
    private ReportRepository reportRepository;
    @Autowired
    private MaintenanceServiceClient maintenanceServiceClient;
    @Autowired
    private PaymentServiceClient paymentServiceClient;
    private final ObjectMapper objectMapper;

    public List<Report> getAllReports() {
        return reportRepository.findAll();
    }

    public Report getReportById(Long id) {
        return reportRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Report not found"));
    }

    public List<Report> getReportsByUser(Long userId) {
        return reportRepository.findByGeneratedBy(userId);
    }

    public Report generateMaintenanceReport(Long userId) throws JsonProcessingException {
        Report report = new Report();
        report.setType("MAINTENANCE_SUMMARY");
        report.setTitle("Maintenance Summary Report");
        report.setGeneratedBy(userId);
        report.setGeneratedAt(LocalDateTime.now());
        report.setStatus(ReportStatus.GENERATING);

        var maintenances = maintenanceServiceClient.getAllMaintenance();
        report.setData(convertToJson(maintenances));
        report.setStatus(ReportStatus.COMPLETED);

        return reportRepository.save(report);
    }

    public Report generatePaymentReport(Long userId) throws JsonProcessingException {
        Report report = new Report();
        report.setType("PAYMENT_SUMMARY");
        report.setTitle("Payment Summary Report");
        report.setGeneratedBy(userId);
        report.setGeneratedAt(LocalDateTime.now());
        report.setStatus(ReportStatus.GENERATING);

        var payments = paymentServiceClient.getAllPayments();
        report.setData(convertToJson(payments));
        report.setStatus(ReportStatus.COMPLETED);

        return reportRepository.save(report);
    }

    public ReportService() {
        this.objectMapper = new ObjectMapper();
        this.objectMapper.registerModule(new JavaTimeModule());
    }

    public String convertToJson(Object object) throws JsonProcessingException {
        return objectMapper.writeValueAsString(object);
    }
}
