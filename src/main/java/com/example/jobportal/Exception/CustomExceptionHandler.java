package com.example.jobportal.Exception;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(PageNotFoundException.class)
    public ResponseEntity<ErrorResponse> handlePostNotFoundException(RuntimeException ex) {
        ErrorResponse response = new ErrorResponse(HttpStatus.NOT_FOUND.value(), ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGenericException(Exception ex) {
        ErrorResponse response = new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Internal Server Error");
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }
    @ExceptionHandler(NoContentFoundException.class)
    public ResponseEntity<ErrorResponse> handleNoContentException(NoContentFoundException ex) {
        ErrorResponse response = new ErrorResponse(HttpStatus.NO_CONTENT.value(), ex.getMessage());
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(response);
    }
    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ErrorResponse> handleBadCredentialsException(BadCredentialsException ex) {
        // Customize the error message as needed
        ErrorResponse response = new ErrorResponse(HttpStatus.NOT_FOUND.value(),"INVALID CREDIANTIALS");

        // Return a ResponseEntity with a 200 OK status and the error message
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }

}
