import React, { useState } from "react";

const EventForm = ({ addEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("religious");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (title.length < 3) {
      setError("Title must be at least 3 characters long.");
      return;
    }
    if (description.length < 10) {
      setError("Description must be at least 10 characters long.");
      return;
    }

    // Clear error message after successful validation
    setError("");

    const newEvent = { title, date, category, location, description };
    addEvent(newEvent);
    setTitle("");
    setDate("");
    setCategory("religious");
    setLocation("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg mx-auto mt-6
                 backdrop-blur-md bg-opacity-90 border border-gray-200"
    >
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
        📅 Add a New Event
      </h2>

      {error && (
        <p className="text-red-600 bg-red-100 p-3 rounded-md text-center mb-4 shadow-sm">
          {error}
        </p>
      )}

      {/* Event Title */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Event Title"
          className="input input-bordered w-full px-4 py-3 rounded-lg text-lg shadow-sm focus:ring-2 focus:ring-blue-400 transition-all"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      {/* Event Date */}
      <div className="mb-4">
        <input
          type="date"
          className="input input-bordered w-full px-4 py-3 rounded-lg text-lg shadow-sm focus:ring-2 focus:ring-blue-400 transition-all"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      {/* Category Dropdown */}
      <div className="mb-4">
        <select
          className="select select-bordered w-full rounded-lg text-lg shadow-sm focus:ring-2 focus:ring-blue-400 transition-all cursor-pointer"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="religious">Religious</option>
          <option value="social">Social</option>
          <option value="charity">Charity</option>
        </select>
      </div>

      {/* Location */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Location"
          className="input input-bordered w-full px-4 py-3 rounded-lg text-lg shadow-sm focus:ring-2 focus:ring-blue-400 transition-all"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <textarea
          placeholder="Description"
          className="textarea textarea-bordered w-full px-4 py-3 rounded-lg text-lg shadow-sm focus:ring-2 focus:ring-blue-400 transition-all resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md 
                   transition-all transform hover:scale-105 active:scale-95"
      >
        🚀 Add Event
      </button>
    </form>
  );
};

export default EventForm;
