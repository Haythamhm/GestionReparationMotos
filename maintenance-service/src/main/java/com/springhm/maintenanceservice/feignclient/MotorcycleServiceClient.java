package com.springhm.maintenanceservice.feignclient;

import com.springhm.maintenanceservice.dto.MotorcycleDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "motorcycle-service")
public interface MotorcycleServiceClient {
    @GetMapping("/api/motorcycles/{id}")
    MotorcycleDto getMotorcycle(@PathVariable("id") Long id);
}
