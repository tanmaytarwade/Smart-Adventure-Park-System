package com.smartadventurepark.controller;

import com.smartadventurepark.model.Event;
import com.smartadventurepark.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventService eventService;

    // Create Event
    @PostMapping("/create")
    public Event createEvent(@RequestBody Event event) {
        return eventService.createEvent(event);
    }

    // Get All Events
    @GetMapping("/all")
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    // Get Events by Date
    @GetMapping("/date/{date}")
    public List<Event> getEventsByDate(@PathVariable String date) {
        return eventService.getEventsByDate(date);
    }

    // Delete Event
    @DeleteMapping("/delete/{id}")
    public String deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
        return "Event deleted successfully!";
    }
}

