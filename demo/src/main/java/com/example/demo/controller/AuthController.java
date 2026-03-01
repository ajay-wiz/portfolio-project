package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

 @Autowired
 private UserRepository repo;

 // REGISTER
 @PostMapping("/register")
 public User register(@RequestBody User user){
     user.setRole("USER");
     return repo.save(user);
 }

 // LOGIN
@PostMapping("/login")
public User login(@RequestBody User user){

    User dbUser =
        repo.findByEmail(user.getEmail());

    if(dbUser == null){
        throw new RuntimeException("User not found");
    }

    if(!dbUser.getPassword()
            .equals(user.getPassword())){
        throw new RuntimeException("Wrong Password");
    }

    return dbUser;
}
 }
