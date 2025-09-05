import { FaUsers, FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";

const halls = [
  {
    name: "Grand Ballroom",
    image: "/others/hall1.jpeg", // replace with real images
    capacity: "500 Guests",
    feature: "Crystal chandeliers & luxury decor",
  },
  {
    name: "Rosewood Hall",
    image: "/others/hall2.jpeg",
    capacity: "300 Guests",
    feature: "Romantic interiors with floral themes",
  },
  {
    name: "Garden Pavilion",
    image: "/others/hall4.jpeg",
    capacity: "200 Guests",
    feature: "Open-air setting with greenery",
  },
];

export default function Venues() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-pink-500 text-center mb-12">
          Our Elegant Halls & Venues
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {halls.map((hall, index) => (
            <Link to={hall.name}>
            <div
              key={index}
              className="bg-gradient-to-b from-[rgb(202,207,249)] to-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={hall.image}
                alt={hall.name}
                loading="lazy"
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {hall.name}
                </h3>
                <div className="flex items-center justify-center text-gray-600 mb-2">
                  <FaUsers className="mr-2 text-pink-500" /> {hall.capacity}
                </div>
                <div className="flex items-center justify-center text-gray-600">
                  <FaBuilding className="mr-2 text-pink-500" /> {hall.feature}
                </div>
              </div>
            </div>
            </Link>
          ))}
          
        </div>
      </div>
    </section>
  );
}
