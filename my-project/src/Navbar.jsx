// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaUsers, FaUserPlus } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6"; // Import droplet icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-red-600 text-white relative z-50">
      
      {/* Logo */}
      <div className="flex items-center text-2xl font-semibold gap-2">
        <FaDroplet className="text-3xl" />
        <span className="hidden md:inline">Blood Finder</span> {/* Hidden on small screens */}
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6">
        <Link to="/" className="hover:text-gray-200 transition duration-300">Home</Link>
        <Link to="/find-donor" className="hover:text-gray-200 transition duration-300">Find Donors</Link>
        <Link to="/register" className="hover:text-gray-200 transition duration-300">Become a Donor</Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden relative">
        <GiHamburgerMenu 
          className="text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-red-600 rounded-lg shadow-lg flex flex-col z-50">
            <Link 
              to="/" 
              className="flex items-center gap-2 px-4 py-2 hover:bg-red-700 transition duration-200"
              onClick={() => setMenuOpen(false)}
            >
              <FaHome /> Home
            </Link>
            <Link 
              to="/find-donor" 
              className="flex items-center gap-2 px-4 py-2 hover:bg-red-700 transition duration-200"
              onClick={() => setMenuOpen(false)}
            >
              <FaUsers /> Find Donors
            </Link>
            <Link 
              to="/register" 
              className="flex items-center gap-2 px-4 py-2 hover:bg-red-700 transition duration-200"
              onClick={() => setMenuOpen(false)}
            >
              <FaUserPlus /> Become a Donor
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
