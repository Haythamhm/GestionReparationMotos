package com.springhm.reportservice.feign;

import com.springhm.reportservice.dto.PaymentDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "paiement-service")
public interface PaymentServiceClient {
    @GetMapping("/api/payments")
    List<PaymentDto> getAllPayments();

    @GetMapping("/api/payments/client/{clientId}")
    List<PaymentDto> getPaymentsByClientId(@PathVariable("clientId") Long clientId);
}
