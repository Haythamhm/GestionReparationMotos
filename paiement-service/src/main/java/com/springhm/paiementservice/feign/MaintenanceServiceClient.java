package com.springhm.paiementservice.feign;

import com.springhm.paiementservice.dto.MaintenanceDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "maintenance-service")
public interface MaintenanceServiceClient {
    @GetMapping("/api/maintenance/{id}")
    MaintenanceDto getMaintenance(@PathVariable("id") Long id);
}
