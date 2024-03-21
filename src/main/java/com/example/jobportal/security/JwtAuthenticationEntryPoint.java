package com.example.jobportal.security;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.PrintWriter;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        response.setContentType("application/json");

        // Set the HTTP status code to 401 (Unauthorized)
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

        // Create a JSON object with status and message
        String jsonMessage = String.format("{\"status\": %d, \"message\": \"%s\"}",
                HttpServletResponse.SC_UNAUTHORIZED,
                "Access Denied: " + authException.getMessage());

        // Write the JSON content to the response
        PrintWriter writer = response.getWriter();
        writer.println(jsonMessage);
    }
}
