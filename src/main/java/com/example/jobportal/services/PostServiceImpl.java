package com.example.jobportal.services;

import com.example.jobportal.dao.PostDao;
import com.example.jobportal.entities.PostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService{
    @Autowired
    private PostDao postDao;
    @Override
    public PostModel savePost(PostModel postModel) {
       PostModel postModel1= postDao.save(postModel);

        return postModel1;
    }

    @Override
    public List<PostModel> allPost() {
        List<PostModel> postmodel=postDao.findAll();
        return postmodel;
    }

    @Override
    public List<PostModel> jobPostById(String id) {

        return postDao.findJobPostsByCompanyemail(id);
    }

    @Override
    public PostModel updatePostByID(PostModel postModel, Long id) {
       Optional<PostModel> postModel1 =postDao.findById(id);

       if(postModel1.isPresent())
       {
           postModel.setId(id);
           return postDao.save(postModel);
       }
       else {
           return null;
       }
    }

    @Override
    public PostModel deletePostByID(Long id) {
        Optional<PostModel> postModel1 =postDao.findById(id);
        if(postModel1.isPresent())
        {
            PostModel postModel=postModel1.get();
            postDao.deleteById(id);
            return postModel;
        }
        else {
            return null;
        }



    }
}
