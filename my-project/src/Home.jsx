// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      
      <div className="w-full max-w-xl bg-white shadow-xl rounded-lg p-6 md:p-10">
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          Blood Donation System
        </h1>

        {/* Responsive Grid */}
        <div className="
          grid 
          gap-4 
          grid-cols-1 
          md:grid-cols-2
        ">
          {/* Donor Registration */}
          <Link
            to="/register"
            className="
              w-full 
              text-center 
              bg-red-500 
              text-white 
              py-3 
              rounded-lg 
              text-lg 
              sm:text-xl 
              md:text-2xl
              font-semibold 
              hover:bg-red-600 
              transition
            "
          >
            Donor Registration
          </Link>

          {/* Find Donor */}
          <Link
            to="/find-donor"
            className="
              w-full 
              text-center 
              bg-blue-500 
              text-white 
              py-3 
              rounded-lg 
              text-lg 
              sm:text-xl 
              md:text-2xl
              font-semibold 
              hover:bg-blue-600 
              transition
            "
          >
            Find Blood Donor
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Home;
