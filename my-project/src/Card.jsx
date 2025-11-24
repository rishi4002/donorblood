// DonorCard.jsx
import React from "react";

const DonorCard = ({ donor }) => {
  const { name, district, bloodGroup, mobile, whatsapp } = donor;

  return (
    <div className="w-full bg-white shadow-md rounded-xl p-5 border border-red-200 hover:shadow-lg transition">

      {/* Blood Group */}
      <div className="text-center mb-4">
        <span className="text-4xl font-bold text-red-600">{bloodGroup}</span>
      </div>

      {/* Donor Details */}
      <div className="text-center sm:text-left">
        <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-lg mt-1">District: {district}</p>
      </div>

      {/* Contact Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-5">
        <a
          href={`tel:${mobile}`}
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition text-center font-semibold"
        >
          Call
        </a>

        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition text-center font-semibold"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default DonorCard;
