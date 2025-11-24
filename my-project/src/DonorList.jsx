// DonorList.jsx
import React from "react";
import { useParams } from "react-router-dom";
import DonorCard from "./Card"; // your DonorCard component
import Dummy from "./dummy"; // import your full dummy donor array

const DonorList = () => {
  const { district, bloodGroup } = useParams();
  const decodedBloodGroup = decodeURIComponent(bloodGroup); // handle + signs

  // Filter donors from Dummy array
  const filteredDonors = Dummy.filter(
    (donor) =>
      donor.district.toLowerCase() === district.toLowerCase() &&
      donor.bloodGroup.toLowerCase() === decodedBloodGroup.toLowerCase()
  );

  return (
    <div className="my-10 px-4">
      <h2 className="text-3xl font-bold text-center text-red-600">
        Donors in {district} ({decodedBloodGroup})
      </h2>

      <div className="max-w-3xl mx-auto mt-8 space-y-4">
        {filteredDonors.length > 0 ? (
          filteredDonors.map((donor) => (
            <DonorCard key={donor.id} donor={donor} />
          ))
        ) : (
          <p className="text-center text-gray-700 text-lg">
            No donors found for this selection.
          </p>
        )}
      </div>
    </div>
  );
};

export default DonorList;
