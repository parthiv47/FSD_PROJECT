package com.example.jobportal.controller;

import com.example.jobportal.Exception.ErrorResponse;
import com.example.jobportal.entities.PostModel;
import com.example.jobportal.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping("/api/v1/jobposts")
    public ResponseEntity<?> savePost(@RequestBody PostModel postModel)
    {
        PostModel p= null;
        try {
          p=this.postService.savePost(postModel);
          return ResponseEntity.of(Optional.of(p));
         }
         catch(Exception e)
         {
             e.printStackTrace();
             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),"Internal Server Error"));
         }
    }

    @GetMapping("/api/v1/jobposts/all")
    public ResponseEntity <?> allPost()
    {


        try{
            List<PostModel> ap=this.postService.allPost();
            if(ap.size()<=0)
            {

                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(new ErrorResponse(HttpStatus.NOT_FOUND.value(), "no post found"));
            }
            return ResponseEntity.of(Optional.of(ap));
        }
        catch(Exception e)
        {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),"Internal Server Error"));
        }

    }

    @GetMapping("/api/v1/jobposts/{id}")
    public ResponseEntity<?> jobPostById( @PathVariable("id") String email)
    {
        try
        {
            List<PostModel> pb=this.postService.jobPostById(email);
            if(pb.size()<=0) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(new ErrorResponse(HttpStatus.NOT_FOUND.value(),  "No Jobpost found "));
            }
            return ResponseEntity.of(Optional.of(pb));
        }
        catch(Exception e)
        {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),"Internal Server Error"));
        }

    }
    @PutMapping("/api/v1/jobposts/{id}")
    public ResponseEntity<?> updatePostById(@RequestBody PostModel postmodel, @PathVariable("id") Long postid)
    {
        try
        {
            PostModel pb=this.postService.updatePostByID(postmodel,postid);
            if(pb==null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(new ErrorResponse(HttpStatus.NOT_FOUND.value(), "Post not found with id: " + postid));
            }
            return ResponseEntity.of(Optional.of(pb));
        }
        catch(Exception e)
        {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),"Internal Server Error"));
        }

    }

    @DeleteMapping ("/api/v1/jobposts/{id}")
    public ResponseEntity<?> deletePostById(@PathVariable("id") Long postid)
    {
        try
        {
            PostModel pb=this.postService.deletePostByID(postid);
            if(pb==null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(new ErrorResponse(HttpStatus.NOT_FOUND.value(), "Post not found with id: " + postid));
            }


            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new ErrorResponse(HttpStatus.NO_CONTENT.value(),"Delete successfully "));
        }
        catch(Exception e)
        {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),"Internal Server Error"));
        }

    }


}
