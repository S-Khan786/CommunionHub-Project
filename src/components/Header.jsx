import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure this path is correct

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 p-4 transition-all duration-300 hover:shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo with Animation */}
        <NavLink to="/" className="flex items-center space-x-3 group">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 transition-transform duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110"
          />
          <span className="text-2xl font-bold text-blue-700 transition-all duration-300 ease-in-out group-hover:text-blue-600">
            CommunionHub
          </span>
        </NavLink>

        {/* Right Side: Navigation */}
        <div className="flex-none">
          <ul className="flex gap-6 px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 font-bold border-b-2 border-blue-700"
                    : "text-black hover:text-purple-600 transition-colors duration-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 font-bold border-b-2 border-blue-700"
                    : "text-black hover:text-purple-600 transition-colors duration-300"
                }
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 font-bold border-b-2 border-blue-700"
                    : "text-black hover:text-purple-600 transition-colors duration-300"
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
