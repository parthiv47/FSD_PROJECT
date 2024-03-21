package com.example.jobportal.services;

import com.example.jobportal.Exception.PageNotFoundException;
import com.example.jobportal.dao.UserDao;
import com.example.jobportal.entities.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {
    @Autowired
    private UserDao userDao;


//    @Override
//    public UserModel signup(UserModel userModel) {
//
//        userDao.save(userModel);
//        return userModel;
//    }
//
//    public UserModel login(UserModel userModel) {
//
//
//        userDao.save(userModel);
//        return userModel;
//    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //load user from database
         UserModel user=userDao.findByEmail(username).orElseThrow(()->  new PageNotFoundException("user not found"));

        return user;
    }



}
