package com.smartadventurepark.controller;

import com.smartadventurepark.service.PaymentService;
import com.smartadventurepark.model.Payment;
import com.razorpay.RazorpayException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/payment")  // ✅ Ensure this matches the frontend call
@CrossOrigin(origins = "http://localhost:3000")  // ✅ Allow frontend access
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    // ✅ Create Order (Initiate Payment)
    @PostMapping("/create-order")
    public ResponseEntity<?> createOrder(@RequestBody Map<String, Integer> request) {
        try {
            int amount = request.get("amount");
            Map<String, Object> orderResponse = paymentService.createOrder(amount);
            return ResponseEntity.ok(orderResponse);
        } catch (RazorpayException e) {
            return ResponseEntity.badRequest().body("Error creating Razorpay order: " + e.getMessage());
        }
    }

    // ✅ Verify Payment (Fix 404 issue)
    @PostMapping("/verify-payment")
    public ResponseEntity<?> verifyPayment(@RequestBody Map<String, String> request) {
        String orderId = request.get("orderId");
        String paymentId = request.get("paymentId");

        if (orderId == null || paymentId == null) {
            return ResponseEntity.badRequest().body("Missing orderId or paymentId");
        }

        // ✅ Save Payment Details
        paymentService.savePaymentDetails(orderId, paymentId, 0, "Paid"); 

        return ResponseEntity.ok().body("Payment verified successfully!");
    }
}

