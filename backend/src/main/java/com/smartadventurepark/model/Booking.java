package com.smartadventurepark.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String email;
    private String phone;
    
    @ElementCollection
    private List<String> selectedActivities;
    
    private int ticketCount;
    private String selectedDate;
    private boolean foodAndBeverage;
    private String identityProof;
    private String identityNumber;
    private String selectedOffer;
    private double totalPrice;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public List<String> getSelectedActivities() {
		return selectedActivities;
	}
	public void setSelectedActivities(List<String> selectedActivities) {
		this.selectedActivities = selectedActivities;
	}
	public int getTicketCount() {
		return ticketCount;
	}
	public void setTicketCount(int ticketCount) {
		this.ticketCount = ticketCount;
	}
	public String getSelectedDate() {
		return selectedDate;
	}
	public void setSelectedDate(String selectedDate) {
		this.selectedDate = selectedDate;
	}
	public boolean isFoodAndBeverage() {
		return foodAndBeverage;
	}
	public void setFoodAndBeverage(boolean foodAndBeverage) {
		this.foodAndBeverage = foodAndBeverage;
	}
	public String getIdentityProof() {
		return identityProof;
	}
	public void setIdentityProof(String identityProof) {
		this.identityProof = identityProof;
	}
	public String getIdentityNumber() {
		return identityNumber;
	}
	public void setIdentityNumber(String identityNumber) {
		this.identityNumber = identityNumber;
	}
	public String getSelectedOffer() {
		return selectedOffer;
	}
	public void setSelectedOffer(String selectedOffer) {
		this.selectedOffer = selectedOffer;
	}
	public double getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

    // Getters and Setters
    
}




