package com.example.jobportal.entities;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import jakarta.persistence.*;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;

@Entity
public class ApplyJobModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(max = 50, message = "Name must be less than 50 characters")
    @Column(name = "name")
    private String name;

    @Email
    @Column(name = "email")
    private String email;

    @Digits(integer = 10, fraction = 0, message = "Contact number must be a numeric value with up to 10 digits")
    @Column(name = "contact_number")
    private Long contactNumber;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }


    @Column(name="Address")
    private String address;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserModel user;

    @Column(name = "resume")
    private String resume;

    public UserModel getUser() {
        return user;
    }

    public void setUser(UserModel user) {
        this.user = user;
    }
// Constructors, getters, and setters...

    public ApplyJobModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(Long contactNumber) {
        this.contactNumber = contactNumber;
    }





    public String getResume() {
        return resume;
    }

    public void setResume(String resume) {
        this.resume = resume;
    }

    public ApplyJobModel(Long id, String name, String email, Long contactNumber, UserModel user, String resume,String address) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.contactNumber = contactNumber;

        this.user = user;
        this.resume = resume;
        this.address=address;
    }

    // Getters and setters...
}
