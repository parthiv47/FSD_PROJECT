package com.example.jobportal.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import org.springframework.data.annotation.CreatedDate;

import java.util.Date;

@Entity
public class PostModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Size(max = 50, message = "Name must be less than 50 characters")
    @Column(name = "profile")
    private String profile;


    @Column(name = "type")
    private String type;

    @Email
    @Column(name="email")
    private String companyemail;

    @Digits(integer = 10, fraction = 0, message = "Contact number must be a numeric value with up to 10 digits")
    @Column(name="Contact Number")
    private Long contactNumber;
    @Column(name = "description")
    private String description;

    @Column(name = "experience")
    private String experience;


    @Column(name = "technology")
    private String technology;


    @Column(name = "salary")
    private String salary;

    @Column(name = "date")
    private String date;
    @Column(name = "address")
    private String address;


    @Column(name = "companyname")
    private String companyname;

    public String getCompanyemail() {
        return companyemail;
    }

    public void setCompanyemail(String companyemail) {
        this.companyemail = companyemail;
    }

    public Long getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(Long contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public PostModel() {
    }

    public PostModel(Long id, String profile, String type, String companyemail, Long contactNumber, String description, String experience, String technology, String salary, String date, String address, String companyname) {
        this.id = id;
        this.profile = profile;
        this.type = type;
        this.companyemail = companyemail;
        this.contactNumber = contactNumber;
        this.description = description;
        this.experience = experience;
        this.technology = technology;
        this.salary = salary;
        this.date = date;
        this.address = address;
        this.companyname = companyname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCompanyname() {
        return companyname;
    }

    public void setCompanyname(String companyname) {
        this.companyname = companyname;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getTechnology() {
        return technology;
    }

    public void setTechnology(String technology) {
        this.technology = technology;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }


}
