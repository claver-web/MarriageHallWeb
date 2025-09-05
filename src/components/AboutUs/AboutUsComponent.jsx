import React from "react";
import { FaHandshake, FaLeaf, FaUsers } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
          About Us
        </h2>
        <p className="mt-4 text-slate-600 text-lg">
          Creating unforgettable experiences with elegance, care, and passion.
        </p>
      </div>

      {/* Story */}
      <div className="mt-12 max-w-4xl mx-auto text-center lg:text-left">
        <h3 className="text-xl font-semibold text-pink-500">Our Story</h3>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Founded with a vision to make every celebration truly memorable, we
          have been hosting weddings, receptions, and milestone events for over
          a decade. Our palace blends timeless architecture with modern
          amenities, providing the perfect setting for your most cherished
          moments.
        </p>
      </div>

      {/* Brand Values */}
      <div className="mt-16 max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
          <FaHandshake className="text-pink-500 text-3xl mb-4" />
          <h4 className="text-lg font-semibold text-slate-800">Commitment</h4>
          <p className="mt-2 text-slate-600 text-sm leading-relaxed">
            We’re dedicated to delivering excellence, from planning to
            execution, ensuring your event is seamless and stress-free.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
          <FaLeaf className="text-pink-500 text-3xl mb-4" />
          <h4 className="text-lg font-semibold text-slate-800">Sustainability</h4>
          <p className="mt-2 text-slate-600 text-sm leading-relaxed">
            We care for the environment and adopt eco-friendly practices,
            combining beauty with responsibility.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
          <FaUsers className="text-pink-500 text-3xl mb-4" />
          <h4 className="text-lg font-semibold text-slate-800">Community</h4>
          <p className="mt-2 text-slate-600 text-sm leading-relaxed">
            Our team works as a family, and we treat every guest as one of our
            own—warmth and hospitality are at our core.
          </p>
        </div>
      </div>

      {/* Team */}
      <div className="mt-20 max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold text-pink-500 text-center">
          Meet Our Team
        </h3>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Team Member */}
          <div className="text-center">
            <img
              src="/team1.jpg"
              alt="Team Member"
              className="mx-auto h-40 w-40 rounded-full object-cover shadow-md"
            />
            <h4 className="mt-4 font-semibold text-slate-800">Anita Sharma</h4>
            <p className="text-sm text-slate-500">Event Director</p>
          </div>

          <div className="text-center">
            <img
              src="/team2.jpg"
              alt="Team Member"
              className="mx-auto h-40 w-40 rounded-full object-cover shadow-md"
            />
            <h4 className="mt-4 font-semibold text-slate-800">Rajesh Kumar</h4>
            <p className="text-sm text-slate-500">Hospitality Head</p>
          </div>

          <div className="text-center">
            <img
              src="/team3.jpg"
              alt="Team Member"
              className="mx-auto h-40 w-40 rounded-full object-cover shadow-md"
            />
            <h4 className="mt-4 font-semibold text-slate-800">Priya Singh</h4>
            <p className="text-sm text-slate-500">Design & Decor Lead</p>
          </div>
        </div>
      </div>
    </section>
  );
}
