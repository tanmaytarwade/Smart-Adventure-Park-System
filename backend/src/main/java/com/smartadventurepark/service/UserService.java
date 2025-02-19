package com.smartadventurepark.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.smartadventurepark.model.User;
import com.smartadventurepark.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Register User
    public User registerUser(User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new RuntimeException("User already exists with this email.");
        }
        return userRepository.save(user);
    }

    // Login User
    public boolean loginUser(String email, String password) {
        User existingUser = userRepository.findByEmail(email);
        return existingUser != null && existingUser.getPassword().equals(password);
    }
}






