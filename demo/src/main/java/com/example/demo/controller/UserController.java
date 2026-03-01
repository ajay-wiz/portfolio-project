package com.example.demo.controller;

import java.io.File;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserRepository repo;

    private final String uploadDir =
            System.getProperty("user.dir")
            + "/uploads/";

    // ✅ UPLOAD PROFILE PHOTO
    @PostMapping("/upload/{id}")
    public User uploadPhoto(
            @PathVariable Long id,
            @RequestParam("file")
            MultipartFile file)
            throws IOException {

        User user =
            repo.findById(id).orElse(null);

        String fileName =
            System.currentTimeMillis()
            + "_" + file.getOriginalFilename();

        File saveFile =
            new File(uploadDir + fileName);

        file.transferTo(saveFile);

        user.setProfilePhoto(fileName);

        return repo.save(user);
    }
}