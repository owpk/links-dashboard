package com.owpk.owpkhomepagebackend;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsProcessor;
import org.springframework.web.cors.DefaultCorsProcessor;

import java.io.IOException;

@Slf4j
public class CustomCorsProcessor extends DefaultCorsProcessor implements CorsProcessor {

    private static final String ACCESS_CONTROL_REQUEST_PRIVATE_NETWORK = "Access-Control-Request-Private-Network";
    private static final String ACCESS_CONTROL_ALLOW_PRIVATE_NETWORK = "Access-Control-Allow-Private-Network";

    @Override
    public boolean processRequest(CorsConfiguration config, HttpServletRequest request,
                                  HttpServletResponse response) throws IOException {

        log.info("process request: " + request.getPathInfo());

        //Allow DefaultCorsProcessor to run first
        boolean superResult = super.processRequest(config, request, response);
        if (!superResult) return false;

        ServerHttpRequest serverRequest = new ServletServerHttpRequest(request);

        //If the CORS header requesting Private Network access is present, respond allowing access
        if(serverRequest.getHeaders().containsKey(ACCESS_CONTROL_REQUEST_PRIVATE_NETWORK)) {
            response.addHeader(ACCESS_CONTROL_ALLOW_PRIVATE_NETWORK, Boolean.toString(true));
            log.info("adding cors header: " + ACCESS_CONTROL_ALLOW_PRIVATE_NETWORK);
        }

        return true;
    }
}