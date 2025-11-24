// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-red-600 text-white">
      <div className="text-2xl font-semibold">
        <h2>Blood Finder</h2>
      </div>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-200 transition duration-300">Home</Link>
        <Link to="/find-donor" className="hover:text-gray-200 transition duration-300">Find Donors</Link>
        <Link to="/register" className="hover:text-gray-200 transition duration-300">Become a Donor</Link>
        {/* <Link to="/about" className="hover:text-gray-200 transition duration-300">About</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
