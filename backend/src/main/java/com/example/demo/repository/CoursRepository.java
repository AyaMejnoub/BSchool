package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Cours;



public interface CoursRepository extends JpaRepository<Cours,Long> {
    
}
