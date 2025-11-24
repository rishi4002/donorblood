// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import DonorPage from "./DonorPage"; // your find donor page
import Registration from "./Register";
import DonorList from "./DonorList";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main content */}
      <main className="flex-grow flex">
        <div
          className="
            flex-grow
            w-full
            bg-cover
            bg-center
            bg-no-repeat
            bg-fixed
            px-4
            py-6
          "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=60')",
          }}
        >
          <div className="w-full max-w-5xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/find-donor" element={<DonorPage />} />
              <Route path="/donor/:district/:bloodGroup" element={<DonorList />} />
            </Routes>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
