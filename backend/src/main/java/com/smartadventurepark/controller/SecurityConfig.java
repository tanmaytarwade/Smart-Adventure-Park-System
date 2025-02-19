package com.smartadventurepark.controller;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Disable CSRF for API calls
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/payment/**").permitAll() // ✅ Allow public access to payment API
                .anyRequest().authenticated() // Require authentication for other requests
            )
            .formLogin(form -> form.disable()) // Disable default login form
            .httpBasic(basic -> basic.disable()); // Disable basic authentication

        return http.build();
    }
}