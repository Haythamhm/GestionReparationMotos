package com.example.gatewayservice.config;

import com.example.gatewayservice.security.AuthFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {

    @Autowired
    private AuthFilter authFilter;

    @Bean
    public GlobalFilter globalFilter() {
        return authFilter;
    }
}
