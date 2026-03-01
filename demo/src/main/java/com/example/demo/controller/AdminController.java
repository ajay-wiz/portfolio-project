package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.User;
import com.example.demo.model.Experience;
import com.example.demo.repository.UserRepository;
import com.example.demo.repository.ExperienceRepository;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private ExperienceRepository expRepo;

    // ✅ GET ALL USERS
    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    // ✅ DELETE USER
    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable Long id){
        userRepo.deleteById(id);
        return "User Deleted";
    }

    // ✅ GET ALL EXPERIENCES
    @GetMapping("/experiences")
    public List<Experience> getAllExperiences(){
        return expRepo.findAll();
    }
}