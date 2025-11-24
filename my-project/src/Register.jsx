// DonorRegistration.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation Schema
const donorSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  bloodGroup: Yup.string().required("Select blood group"),
  district: Yup.string().required("Select district"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter valid 10-digit number")
    .required("Mobile number is required"),
  whatsapp: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter valid 10-digit number")
    .required("WhatsApp number is required"),
});

const DonorRegistration = () => {
  const districts = [
    "Almora",
    "Bageshwar",
    "Chamoli",
    "Champawat",
    "Dehradun",
    "Haridwar",
    "Nainital",
    "Pauri Garhwal",
    "Pithoragarh",
    "Rudraprayag",
    "Tehri Garhwal",
    "Udham Singh Nagar",
    "Uttarkashi",
  ];

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <div className="flex justify-center my-16">
      <div className="w-full max-w-2xl bg-white/80 p-6 rounded-xl shadow-lg backdrop-blur-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-red-600">
          Blood Donor Registration
        </h2>

        <Formik
          initialValues={{
            name: "",
            bloodGroup: "",
            district: "",
            mobile: "",
            whatsapp: "",
          }}
          validationSchema={donorSchema}
          onSubmit={(values, { resetForm }) => {
            // Format donor data as requested
            const donorData = {
              name: `${values.bloodGroup} Donor ${values.district}`,
              bloodGroup: values.bloodGroup,
              district: values.district,
              mobile: values.mobile,
              whatsapp: values.whatsapp,
            };

            // Get existing donors from localStorage
            const existingDonors = JSON.parse(localStorage.getItem("donors")) || [];

            // Add new donor
            existingDonors.push(donorData);

            // Save back to localStorage
            localStorage.setItem("donors", JSON.stringify(existingDonors));

            console.log("Saved Donor:", donorData);
            alert("Donor Registered Successfully!");

            resetForm(); // clear the form
          }}
        >
          {() => (
            <Form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="sm:col-span-2">
                <label className="font-medium">Full Name</label>
                <Field
                  name="name"
                  type="text"
                  className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Enter full name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>

              {/* Blood Group */}
              <div>
                <label className="font-medium">Blood Group</label>
                <Field
                  as="select"
                  name="bloodGroup"
                  className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-red-400"
                >
                  <option value="">Select</option>
                  {bloodGroups.map((bg) => (
                    <option key={bg} value={bg}>
                      {bg}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="bloodGroup"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>

              {/* District */}
              <div>
                <label className="font-medium">District</label>
                <Field
                  as="select"
                  name="district"
                  className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-red-400"
                >
                  <option value="">Select District</option>
                  {districts.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="district"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="font-medium">Mobile Number</label>
                <Field
                  name="mobile"
                  type="text"
                  className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="10-digit mobile number"
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label className="font-medium">WhatsApp Number</label>
                <Field
                  name="whatsapp"
                  type="text"
                  className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="10-digit WhatsApp number"
                />
                <ErrorMessage
                  name="whatsapp"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold text-lg transition"
                >
                  Register Donor
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default DonorRegistration;
