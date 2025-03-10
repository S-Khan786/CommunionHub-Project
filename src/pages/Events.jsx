import React, { useState } from 'react';
import EventList from '../components/EventList';
import EventForm from '../components/EventForm';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('all');

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const filteredEvents = filter === 'all' ? events : events.filter(event => event.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 p-6">
      <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-8">
        Event Listing
      </h1>
      <div className="flex justify-center mb-8">
        <select
          className="select select-bordered px-4 py-2 rounded-lg shadow-md text-lg"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Events</option>
          <option value="religious">Religious</option>
          <option value="social">Social</option>
          <option value="charity">Charity</option>
        </select>
      </div>
      <EventList events={filteredEvents} />
      <EventForm addEvent={addEvent} />
    </div>
  );
};

export default Events;
