import React, { useState } from "react";
import EventList from "../components/EventList";
import EventForm from "../components/EventForm";

const Events = () => {
  const [events, setEvents] = useState([
    {
      title: "Community Prayer",
      date: "2025-04-10",
      category: "religious",
      location: "Kolkata",
      description: "Join us for a peaceful evening of prayer and reflection.",
    },
    {
      title: "Food Drive",
      date: "2025-03-25",
      category: "charity",
      location: "Mumbai",
      description:
        "Help us distribute food to the needy and make a difference.",
    },
    {
      title: "Neighborhood Party",
      date: "2025-05-01",
      category: "social",
      location: "New Delhi",
      description: "A fun-filled evening with music, dance, and food!",
    },
  ]);

  const [filter, setFilter] = useState("all");

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const filteredEvents =
    filter === "all"
      ? events
      : events.filter((event) => event.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 p-6">
      <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-8">
        Event Listing
      </h1>

      {/* Category Filter Dropdown */}
      <div className="flex justify-center mb-8">
        <select
          className="select select-bordered rounded-lg shadow-md text-lg"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Events</option>
          <option value="religious">Religious</option>
          <option value="social">Social</option>
          <option value="charity">Charity</option>
        </select>
      </div>

      {/* Show Events or "No Events Available" Message */}
      {filteredEvents.length > 0 ? (
        <EventList events={filteredEvents} />
      ) : filter !== "all" ? (
        <p className="text-center text-gray-500 text-lg mt-6">
          No Events Available for this Category.
        </p>
      ) : null}

      {/* Event Form to Add New Events */}
      <EventForm addEvent={addEvent} />
    </div>
  );
};

export default Events;
