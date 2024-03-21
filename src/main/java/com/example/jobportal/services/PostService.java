package com.example.jobportal.services;

import com.example.jobportal.entities.PostModel;

import java.util.List;

public interface PostService {

    public PostModel savePost(PostModel postModel);
    public List<PostModel> allPost();
    public List<PostModel> jobPostById(String id);
    public PostModel updatePostByID(PostModel postModel,Long id);
    public PostModel deletePostByID(Long id);

}
