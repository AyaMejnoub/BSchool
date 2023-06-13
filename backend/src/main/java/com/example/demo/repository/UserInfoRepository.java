package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.User;


public interface UserInfoRepository extends JpaRepository<User,Long> {

    com.example.demo.model.UserInfo save(com.example.demo.model.UserInfo newUser);

    
}
