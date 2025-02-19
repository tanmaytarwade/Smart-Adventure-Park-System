package com.smartadventurepark.repository;


import com.smartadventurepark.model.Offer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfferRepository extends JpaRepository<Offer, Long> {
}

// OfferService.java (Service)
