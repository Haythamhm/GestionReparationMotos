package com.springhm.reportservice.feign;

import com.springhm.reportservice.dto.MaintenanceDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "maintenance-service")
public interface MaintenanceServiceClient {
    @GetMapping("/api/maintenance")
    List<MaintenanceDto> getAllMaintenance();

    @GetMapping("/api/maintenance/client/{clientId}")
    List<MaintenanceDto> getMaintenanceByClientId(@PathVariable("clientId") Long clientId);
}
