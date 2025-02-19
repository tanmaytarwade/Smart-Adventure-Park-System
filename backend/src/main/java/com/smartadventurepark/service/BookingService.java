package com.smartadventurepark.service;

import com.smartadventurepark.model.Booking;
import com.smartadventurepark.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    public Booking createBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Optional<Booking> getBookingById(Long id) {
        return bookingRepository.findById(id);
    }

    public Booking updateBooking(Long id, Booking updatedBooking) {
        return bookingRepository.findById(id).map(booking -> {
            booking.setName(updatedBooking.getName());
            booking.setEmail(updatedBooking.getEmail());
            booking.setPhone(updatedBooking.getPhone());
            booking.setSelectedActivities(updatedBooking.getSelectedActivities());
            booking.setTicketCount(updatedBooking.getTicketCount());
            booking.setSelectedDate(updatedBooking.getSelectedDate());
            booking.setFoodAndBeverage(updatedBooking.isFoodAndBeverage());
            booking.setIdentityProof(updatedBooking.getIdentityProof());
            booking.setIdentityNumber(updatedBooking.getIdentityNumber());
            booking.setSelectedOffer(updatedBooking.getSelectedOffer());
            booking.setTotalPrice(updatedBooking.getTotalPrice());
            return bookingRepository.save(booking);
        }).orElse(null);
    }

    public boolean deleteBooking(Long id) {
        if (bookingRepository.existsById(id)) {
            bookingRepository.deleteById(id);
            return true;
        }
        return false;
    }
}

