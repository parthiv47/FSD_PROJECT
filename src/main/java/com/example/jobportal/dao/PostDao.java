package com.example.jobportal.dao;

import com.example.jobportal.entities.PostModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostDao extends JpaRepository<PostModel,Long> {
    List<PostModel> findJobPostsById(Long id);

    List<PostModel> findJobPostsByCompanyemail(String email);
}
