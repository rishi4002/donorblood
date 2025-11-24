// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-xl sm:text-2xl font-semibold text-white">
          Blood Donation System
        </h2>

        <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-md mx-auto">
          Saving lives, one donation at a time.
        </p>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-gray-400 text-sm">
          © {new Date().getFullYear()} Blood Donation System. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
