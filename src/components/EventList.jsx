import React from 'react';

const EventList = ({ events }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
      {events.map((event, index) => (
        <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800"><strong>Title:</strong> {event.title}</h2>
            <p className="text-gray-500 mt-2"><strong>Date:</strong> {event.date}</p>
            <p className="text-gray-500"><strong>Location:</strong> {event.location}</p>
            <p className="text-gray-600 mt-3"><strong>Description:</strong> <div>{event.description}</div></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
