package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Cours;
import com.example.demo.repository.CoursRepository;

@RestController
@RequestMapping("/")
public class EditorSaverController {
        @Autowired
        private CoursRepository coursRepository;

        @PostMapping("/save-content")
        public void saveContent(@RequestBody String content) {
            Cours newCours = new Cours(content);
            coursRepository.save(newCours);
        }
    }
 