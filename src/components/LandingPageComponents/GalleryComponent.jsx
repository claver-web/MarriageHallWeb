import React from "react";

const images = [
  { id: 1, src: "halls/hall1.jpg", alt: "Grand Ballroom Decor" },
  { id: 2, src: "/halls/hall2.jpg", alt: "Wedding Stage" },
  { id: 3, src: "/halls/hall3.jpg", alt: "Royal Dining Area" },
  { id: 4, src: "/halls/hall4.jpg", alt: "Outdoor Pearl Lawn" },
  { id: 5, src: "/hero/hall1.jpeg", alt: "Evening Lighting" },
  { id: 6, src: "/hero/hall4.jpeg", alt: "Couple Entry Setup" },
];

export default function Gallery() {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-pink-500 sm:text-4xl">
          Our Gallery
        </h2>
        <p className="mt-4 text-slate-600">
          A glimpse of the celebrations and memories created at our palace.
        </p>
      </div>

      {/* Image Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img) => (
          <div
            key={img.id}
            className="group relative overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-64 w-full object-cover transform transition duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm font-medium transition">
              {img.alt}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
