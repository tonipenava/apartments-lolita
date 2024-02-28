import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ical from 'ical.js';

const BookingCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchICalData = async () => {
      try {
        const response = await axios.get(
          'https://ical.booking.com/v1/export?t=bd1fa4f0-ca5b-407c-b6a0-e79e8c9eb885'
        );
        const jcalData = ical.parse(response.data);
        const comp = new ical.Component(jcalData);
        const vevents = comp.getAllProperties('vevent');
        const parsedEvents = vevents.map((event) => {
          return {
            summary: event.getFirstPropertyValue('summary'),
            start: new Date(event.getFirstPropertyValue('dtstart')),
            end: new Date(event.getFirstPropertyValue('dtend')),
            location: event.getFirstPropertyValue('location'),
            // Add more properties as needed
          };
        });
        setEvents(parsedEvents);
      } catch (error) {
        console.error('Error fetching iCal data:', error);
      }
    };

    fetchICalData();
  }, []);

  return (
    <div>
      <h2>Booking Calendar</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.summary}</strong>
            <p>Start: {event.start.toString()}</p>
            <p>End: {event.end.toString()}</p>
            <p>Location: {event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingCalendar;
