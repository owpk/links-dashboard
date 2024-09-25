package com.owpk.owpkhomepagebackend.services;

import com.owpk.owpkhomepagebackend.CustomCorsProcessor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity
public class WebConfig {

    @Bean
    @SuppressWarnings("removal")
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.authorizeHttpRequests().anyRequest().permitAll()
                .and()
                .addFilter(corsFilter())
                .csrf().disable()
                .build();
    }

    @Bean
    public CorsFilter corsFilter() {
        CorsConfigurationSource corsConfigurationSource = corsConfigurationSource();
        CorsFilter corsFilter = new CorsFilter(corsConfigurationSource);

        //Register our custom CorsProcessor that includes the Private Network allowed header
        corsFilter.setCorsProcessor(new CustomCorsProcessor());
        return corsFilter;
    }
    public CorsConfigurationSource corsConfigurationSource() {
        var configuration = new CorsConfiguration();
        configuration.setAllowCredentials(true);
        configuration.addAllowedOrigin("http://owpk");
        configuration.addAllowedOrigin("http://voyzvz.fvds.ru");
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");
        var source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
