package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Cours {
    @Id
    @GeneratedValue
    private Long id;
    private String chaptername;
    @Column(name= "content", nullable = false)
    private String content;

    public Cours(){

    }
    public Cours(String content) {
        this.content = content;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getChaptername() {
        return chaptername;
    }
    public void setChaptername(String chaptername) {
        this.chaptername = chaptername;
    }
    public String getcontent() {
        return content;
    }
    public void setcontent(String content) {
        this.content = content;
    }

    
}
