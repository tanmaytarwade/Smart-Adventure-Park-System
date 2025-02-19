package com.smartadventurepark.service;

import com.smartadventurepark.model.Event;
import java.util.List;

public interface EventService {
    Event createEvent(Event event);
    List<Event> getAllEvents();
    List<Event> getEventsByDate(String date);
    void deleteEvent(Long id);
}
