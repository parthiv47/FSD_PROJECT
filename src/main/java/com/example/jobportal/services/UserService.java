package com.example.jobportal.services;

import com.example.jobportal.Exception.PageNotFoundException;
import com.example.jobportal.dao.UserDao;
import com.example.jobportal.entities.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;
 @Autowired
    private PasswordEncoder passwordEncoder;
    public UserModel createuser(UserModel user)
    {
        Optional<UserModel> user1=userDao.findByEmail(user.getEmail());
        if(user1.isPresent())
        {
            throw new PageNotFoundException("Email Allready use..");
        }

         user.setPassword(passwordEncoder.encode(user.getPassword())) ;

         System.out.print(user.getPassword());

        return userDao.save(user);
    }


}
