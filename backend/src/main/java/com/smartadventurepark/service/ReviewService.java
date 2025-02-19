package com.smartadventurepark.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.smartadventurepark.model.Review;
import com.smartadventurepark.repository.ReviewRepository;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    public Review submitReview(Review review) {
        return reviewRepository.save(review);
    }
}

