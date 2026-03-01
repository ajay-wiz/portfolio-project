package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Experience;
import com.example.demo.repository.ExperienceRepository;

@Service
public class ExperienceService {

    @Autowired
    private ExperienceRepository repository;

    // ✅ GET ALL EXPERIENCES
    public List<Experience> getAllExperiences() {
        return repository.findAll();
    }

    // ✅ SAVE EXPERIENCE (CREATE)
    public Experience saveExperience(Experience exp) {
        return repository.save(exp);
    }

    // ✅ DELETE EXPERIENCE
    public void deleteExperience(Long id) {
        repository.deleteById(id);
    }

    // ✅ UPDATE EXPERIENCE
    public Experience updateExperience(Long id,
                                       Experience exp) {

        exp.setId(id);
        return repository.save(exp);
    }

    // ✅ GET EXPERIENCE BY ID
    public Experience getExperienceById(Long id) {
        return repository.findById(id)
                .orElse(null);
    }
}