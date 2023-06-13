package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignupController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/api/signup")
    public String signup(@RequestBody User user) {
        // Vérifier si le nom d'utilisateur est déjà utilisé
        if (userRepository.findByUsername(user.getUsername()) != null) {
            return "Le nom d'utilisateur est déjà utilisé";
        }

        //Vérifier si les mots de passe correspondent
        if (!user.getPassword().equals(user.getRetypePassword())) {
            return "Les mots de passe ne correspondent pas";
        } 

        // Insertion dans la table authentication_table via UserRepository
        userRepository.save(user);

        return "Inscription réussie";
    }
}

