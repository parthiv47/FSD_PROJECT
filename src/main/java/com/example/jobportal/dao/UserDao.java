package com.example.jobportal.dao;

import com.example.jobportal.entities.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserDao extends JpaRepository<UserModel,Long> {
    public Optional<UserModel> findByEmail(String email);
    public Optional<UserModel> findByRole(String role);
}
