import { useState } from "react";

const menuData = {
  veg: [
    { name: "Paneer Tikka", price: "₹250" },
    { name: "Veg Spring Roll", price: "₹180" },
    { name: "Mixed Vegetable Curry", price: "₹220" },
    { name: "Jeera Rice", price: "₹150" },
  ],
  nonVeg: [
    { name: "Butter Chicken", price: "₹300" },
    { name: "Mutton Rogan Josh", price: "₹350" },
    { name: "Fish Fry", price: "₹280" },
    { name: "Chicken Biryani", price: "₹320" },
  ],
  drinks: [
    { name: "Mango Lassi", price: "₹120" },
    { name: "Masala Chai", price: "₹60" },
    { name: "Soft Drink", price: "₹80" },
  ],
  others: [
    { name: "Gulab Jamun", price: "₹100" },
    { name: "Ice Cream", price: "₹150" },
    { name: "Salad Bar", price: "₹180" },
  ],
};

export default function CateringMenu() {
  const [filter, setFilter] = useState("veg");

  const categoryTitles = {
    veg: "Vegetarian Delights",
    nonVeg: "Non-Vegetarian Specialties",
    drinks: "Refreshing Drinks",
    others: "Desserts & Extras",
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif text-pink-500 text-center mb-8">
          Our Catering Menu
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.keys(menuData).map((key) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-5 py-2 rounded-full font-medium transition text-sm sm:text-base
                ${
                  filter === key
                    ? "bg-pink-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {categoryTitles[key]}
            </button>
          ))}
        </div>

        {/* Menu Table */}
        <div className="bg-gray-50 rounded-lg shadow-inner p-6 overflow-x-auto">
          <h3 className="text-2xl font-semibold text-pink-500 text-center mb-4">
            {categoryTitles[filter]}
          </h3>

          <table className="w-full min-w-[400px] text-left border-collapse">
            <thead>
              <tr className="border-b text-pink-500">
                <th className="py-3 px-2 sm:px-4">Dish</th>
                <th className="py-3 px-2 sm:px-4">Price</th>
              </tr>
            </thead>
            <tbody>
              {menuData[filter].map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b last:border-none hover:bg-gray-100"
                >
                  <td className="py-2 px-2 sm:px-4 text-gray-700">{item.name}</td>
                  <td className="py-2 px-2 sm:px-4 text-gray-600">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[rgb(202,207,249)] to-[rgb(224,210,249)] text-pink-600 font-medium rounded-full shadow hover:shadow-lg transition text-sm sm:text-base"
          >
            Customize Your Menu & Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
