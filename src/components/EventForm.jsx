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
      className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg mx-auto mt-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add a New Event</h2>

      {error && (
        <p className="text-red-500 bg-red-100 p-2 rounded mb-3">{error}</p>
      )}

      <input
        type="text"
        placeholder="Event Title"
        className="input input-bordered w-full mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="date"
        className="input input-bordered w-full mb-3"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <select
        className="select select-bordered w-full mb-3"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="religious">Religious</option>
        <option value="social">Social</option>
        <option value="charity">Charity</option>
      </select>

      <input
        type="text"
        placeholder="Location"
        className="input input-bordered w-full mb-3"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        className="textarea textarea-bordered w-full mb-3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button type="submit" className="btn btn-primary w-full mt-3">
        Add Event
      </button>
    </form>
  );
};

export default EventForm;
