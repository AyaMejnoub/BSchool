package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

  private final AuthenticationService authenticationService;

  @Autowired
  public LoginController(AuthenticationService authenticationService) {
    this.authenticationService = authenticationService;
  }

  @PostMapping("/api/login")
  public String login(@RequestBody LoginForm loginForm) {
    // Retrieve the username and password from the LoginForm
    String username = loginForm.getUsername();
    String password = loginForm.getPassword();

    // Validate the username and password against the database
    // Perform necessary authentication logic here

    if (authenticationService.isValidCredentials(username, password)) {
      return "Login successful";
    } else {
      return "Invalid username or password";
    }
  }
}



