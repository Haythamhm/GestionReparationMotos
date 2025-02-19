package com.springhm.maintenanceservice.feignclient;

import com.springhm.maintenanceservice.dto.PartDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "pieces-service")
public interface PartsServiceClient {
    @GetMapping("/api/parts")
    List<PartDTO> getAllParts();

    @GetMapping("/api/parts/{id}")
    PartDTO getPartById(@PathVariable("id") Long id);
}
