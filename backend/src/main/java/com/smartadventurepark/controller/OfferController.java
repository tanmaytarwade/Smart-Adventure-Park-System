package com.smartadventurepark.controller;


import com.smartadventurepark.model.Offer;
import com.smartadventurepark.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/offers")
@CrossOrigin(origins = "http://localhost:3000")
public class OfferController {
    @Autowired
    private OfferService offerService;

    @GetMapping("/all")
    public List<Offer> getAllOffers() {
        return offerService.getAllOffers();
    }

    @PostMapping("/create")
    public Offer createOffer(@RequestBody Offer offer) {
        return offerService.createOffer(offer);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteOffer(@PathVariable Long id) {
        boolean isDeleted = offerService.deleteOffer(id);
        if (isDeleted) {
            return ResponseEntity.ok("Offer deleted successfully.");
        } else {
            return ResponseEntity.status(404).body("Offer not found.");
        }
    }
}
