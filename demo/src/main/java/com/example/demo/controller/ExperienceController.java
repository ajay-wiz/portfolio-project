package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Experience;
import com.example.demo.model.User;
import com.example.demo.repository.ExperienceRepository;
import com.example.demo.repository.UserRepository;

@RestController
@RequestMapping("/experience")
@CrossOrigin("*")
public class ExperienceController {

    @Autowired
    private ExperienceRepository experienceRepo;

    @Autowired
    private UserRepository userRepo;


    // ✅ CREATE EXPERIENCE FOR LOGGED USER
    @PostMapping("/{userId}")
    public Experience addExperience(
            @PathVariable Long userId,
            @RequestBody Experience exp) {

        User user = userRepo
                .findById(userId)
                .orElse(null);

        exp.setUser(user);

        return experienceRepo.save(exp);
    }


    // ✅ GET EXPERIENCES OF PARTICULAR USER
    @GetMapping("/{userId}")
    public List<Experience> getUserExperiences(
            @PathVariable Long userId) {

        User user = userRepo
                .findById(userId)
                .orElse(null);

        return experienceRepo.findByUser(user);
    }


    // ✅ UPDATE EXPERIENCE
    @PutMapping("/{id}")
    public Experience updateExperience(
            @PathVariable Long id,
            @RequestBody Experience exp) {

        exp.setId(id);
        return experienceRepo.save(exp);
    }


    // ✅ DELETE EXPERIENCE
    @DeleteMapping("/{id}")
    public String deleteExperience(
            @PathVariable Long id) {

        experienceRepo.deleteById(id);
        return "Experience Deleted Successfully";
    }
}