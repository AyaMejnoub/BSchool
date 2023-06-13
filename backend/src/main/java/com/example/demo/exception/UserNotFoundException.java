package com.example.demo.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id)
    {
        super("Could not found the user with the Id = "+ id);
    }
}
