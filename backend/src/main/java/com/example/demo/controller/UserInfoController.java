package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.UserInfo;
import com.example.demo.repository.UserInfoRepository;



@RestController
@CrossOrigin("http://localhost:3000")
public class UserInfoController
{
    @Autowired
    private UserInfoRepository userRepository;

    @PostMapping("/add_user")
    UserInfo newUser(@RequestBody UserInfo newUser)
    {
        return userRepository.save(newUser);
    }

    @GetMapping("/get_all")
    List<com.example.demo.User> getAllUsers()
    {
        return userRepository.findAll();
    }
    @GetMapping("/get_user/{id}")
    com.example.demo.User getUserById(@PathVariable Long id)
    {
        return userRepository.findById(id)
            .orElseThrow(()->new UserNotFoundException(id));
    }



    @PutMapping("/update_user/{id}")
    com.example.demo.User updateUser(@RequestBody UserInfo newUser,@PathVariable Long id)
    {
        return userRepository.findById(id)
                .map(user -> {
                    if(newUser.getUsername() != null && !newUser.getUsername().isEmpty())
                    {
                        user.setUsername(newUser.getUsername());
                    }
                    if(newUser.getName() != null && !newUser.getName().isEmpty())
                    {
                    user.setName(newUser.getName());
                    }
                    if(newUser.getEmail() != null && !newUser.getEmail().isEmpty())
                    {
                    user.setEmail(newUser.getEmail());
                    }
                    return userRepository.save(user);
                }).orElseThrow(()->new UserNotFoundException(id));

    }
    @DeleteMapping("/delete_user/{id}")
    String deleteUser(@PathVariable Long id)
    {
        if(!userRepository.existsById(id))
        {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "user with Id="+id+" has been deleted successfully" ;
    }




}
