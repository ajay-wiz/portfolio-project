package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Experience;
import com.example.demo.model.User;

public interface ExperienceRepository
        extends JpaRepository<Experience, Long> {

    List<Experience> findByUser(User user);
}