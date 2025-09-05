import { FaUsers, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

export default function Highlights() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-12">
          Why Choose Our Venue?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Capacity */}
          <div className="bg-gradient-to-b from-[rgb(202,207,249)] to-white p-8 rounded-xl shadow-lg">
            <FaUsers className="w-12 h-12 mx-auto text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Spacious Capacity</h3>
            <p className="text-gray-600">
              Host up to <span className="font-medium">500 guests</span> in a grand, elegant setting.
            </p>
          </div>

          {/* Location */}
          <div className="bg-gradient-to-b from-[rgb(224,210,249)] to-white p-8 rounded-xl shadow-lg">
            <FaMapMarkerAlt className="w-12 h-12 mx-auto text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Prime Location</h3>
            <p className="text-gray-600">
              Conveniently located with <span className="font-medium">ample parking</span> and easy access.
            </p>
          </div>

          {/* Facilities */}
          <div className="bg-gradient-to-b from-[rgb(240,242,255)] to-white p-8 rounded-xl shadow-lg">
            <FaBuilding className="w-12 h-12 mx-auto text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Luxury Facilities</h3>
            <p className="text-gray-600">
              Modern interiors, bridal suites, and <span className="font-medium">state-of-the-art amenities</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
