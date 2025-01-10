package com.springhm.reportservice.repository;

import com.springhm.reportservice.model.Report;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReportRepository extends JpaRepository<Report, Long> {
    List<Report> findByGeneratedBy(Long userId);
    List<Report> findByType(String type);
}