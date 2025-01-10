package com.springhm.notificationservice.feignclient;

import com.springhm.notificationservice.dto.ClientDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "client-service")
public interface ClientServiceClient {
    @GetMapping("/api/clients/{id}")
    ClientDto getClient(@PathVariable("id") Long id);
}
