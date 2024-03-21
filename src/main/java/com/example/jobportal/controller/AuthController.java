package com.example.jobportal.controller;

import com.example.jobportal.entities.JwtRequest;
import com.example.jobportal.entities.JwtResponse;
import com.example.jobportal.entities.UserModel;
import com.example.jobportal.security.JwtHelper;
import com.example.jobportal.services.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;



@RestController
//@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/auth")
public class AuthController {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtHelper helper;

    private Logger logger =  LoggerFactory.getLogger(AuthController.class);


    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody JwtRequest request) {
        System.out.println("hello");
        this.doAuthenticate(request.getEmail(), request.getPassword());


        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
        String token = this.helper.generateToken(userDetails);

        JwtResponse response = JwtResponse.builder()
                .jwtToken(token)
                .username(userDetails.getUsername()).build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private void doAuthenticate(String email, String password) {

        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, password);
        try {
            manager.authenticate(authentication);


        } catch (BadCredentialsException e) {
            throw new BadCredentialsException(" Invalid Username or Password  !!");
        }

    }




    @PostMapping("/signup")
    public UserModel signup(@RequestBody UserModel userModel)
    {
       return this.userService.createuser(userModel);


    }


    @GetMapping("/userdetails")
    public ResponseEntity<UserDetails> getUserDetails(@RequestHeader("Authorization") String jwtToken) {

        System.out.println("jwtToken");
        String username = extractUsernameFromToken(jwtToken);
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        return new ResponseEntity<>(userDetails, HttpStatus.OK);
    }

    private String extractUsernameFromToken(String jwtToken) {
        // Assuming the JWT is in the format "Bearer <token>"
        String token = jwtToken.substring(7).trim();
        return helper.getUsernameFromToken(token);
    }

}



