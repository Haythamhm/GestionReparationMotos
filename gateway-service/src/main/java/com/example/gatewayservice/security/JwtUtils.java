package com.example.gatewayservice.security;


import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;


@Component
public class JwtUtils {

    @Value("${spring.security.jwtSecret}")
    private String jwtSecret;

    @Value("${spring.security.jwtExpirationMs}")
    private int jwtExpirationMs;

    public boolean validateJwtToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }
}

