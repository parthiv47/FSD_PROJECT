package com.example.jobportal.dao;

import com.example.jobportal.entities.ApplyJobModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface ApplyJobDao extends JpaRepository<ApplyJobModel,Long> {
    List<ApplyJobModel> findApplyJobsById(Long id);
}
