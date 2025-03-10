import React from "react";

const EventList = ({ events }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
      {events.map((event, index) => (
        <div
          key={index}
          className="relative bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform"
        >
          {/* Category Badge (Top-Right Corner) */}
          <span
            className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-semibold text-white ${
              event.category === "Religious"
                ? "bg-blue-500"
                : event.category === "Social"
                ? "bg-green-500"
                : "bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg"
            }`}
          >
            {event.category}
          </span>

          <div className="p-6">
            {/* Event Title */}
            <h2 className="text-2xl font-bold text-gray-800">
              <strong>Title:</strong> {event.title}
            </h2>

            {/* Event Date & Location */}
            <p className="text-gray-500 mt-2">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="text-gray-500">
              <strong>Location:</strong> {event.location}
            </p>

            {/* Description */}
            <p className="text-gray-600 mt-3">
              <strong>Description:</strong>{" "}
              <span className="block">{event.description}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
