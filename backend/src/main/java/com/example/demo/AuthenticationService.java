package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

  private final JdbcTemplate jdbcTemplate;

  @Autowired
  public AuthenticationService(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  public boolean isValidCredentials(String username, String password) {
    String query = "SELECT COUNT(*) FROM authentication_table WHERE username = ? AND password = ?";
    int count = jdbcTemplate.queryForObject(query, Integer.class, username, password);
    return count > 0;
  }
}