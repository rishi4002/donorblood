// FindDonor.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DonorPage = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    district: "",
    bloodGroup: "",
  });

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const districts = [
    "Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun",
    "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh",
    "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const district = filters.district;
    const bg = filters.bloodGroup;

    // FIXED: correct variable used
    navigate(`/donor/${district}/${bg}`);
  };

  return (
    <div className="flex justify-center my-16">
      <div className="w-full max-w-xl bg-white/90 p-6 rounded-xl shadow-lg backdrop-blur">

        <h2 className="text-2xl text-center font-bold text-red-600 mb-6">
          Find Blood Donor
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* District */}
          <div className="sm:col-span-2">
            <label className="font-medium">Select District</label>
            <select
              value={filters.district}
              onChange={(e) =>
                setFilters({ ...filters, district: e.target.value })
              }
              required
              className="w-full mt-1 px-3 py-2 border rounded-lg outline-none 
              focus:ring-2 focus:ring-red-500"
            >
              <option value="">Choose district</option>
              {districts.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Blood Group */}
          <div className="sm:col-span-2">
            <label className="font-medium">Select Blood Group</label>
            <select
              value={filters.bloodGroup}
              onChange={(e) =>
                setFilters({ ...filters, bloodGroup: e.target.value })
              }
              required
              className="w-full mt-1 px-3 py-2 border rounded-lg outline-none 
              focus:ring-2 focus:ring-red-500"
            >
              <option value="">Choose blood group</option>
              {bloodGroups.map((bg) => (
                <option key={bg} value={bg}>{bg}</option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 
              rounded-lg font-semibold text-lg transition"
            >
              Search Donors
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default DonorPage;
