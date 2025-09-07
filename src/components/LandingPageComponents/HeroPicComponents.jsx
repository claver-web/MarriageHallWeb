// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(/others/hall3.webp)", // Replace with your hall photo
      }}

    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#c21e551e]"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Welcome to <span className="text-pink-300">Grand Elegance Hall</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
          Where unforgettable memories are made.
        </p>
        <div className="mt-6 flex gap-4">
          <Link to='/venues'>
          <p
            className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full shadow-md transition"
          >
            Book Now
          </p>
          </Link>
          <Link to='/about-us'>
          <p
            className="px-8 py-4 bg-white hover:bg-pink-300 font-medium rounded-full shadow-md transition"
          >
            Learn more
          </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
