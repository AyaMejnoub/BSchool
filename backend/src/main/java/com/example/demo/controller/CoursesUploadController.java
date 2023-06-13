package com.example.demo.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Service.CourcesUploadService;

@RestController
public class CoursesUploadController {
@Autowired
CourcesUploadService courcesUploadService;

    @PostMapping("/upload_course")
    public void uploadFile(@RequestParam("file") MultipartFile file) throws IllegalStateException, IOException
    {
        courcesUploadService.uploadFile(file);
    }
}
