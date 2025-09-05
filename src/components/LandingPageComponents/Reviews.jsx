import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Amit & Neha",
    role: "Wedding Couple",
    text: "The team made our wedding unforgettable! The décor, food, and hospitality were beyond expectations. All our guests were amazed.",
    rating: 5,
    avatar: "/avatars/couple1.jpg",
  },
  {
    id: 2,
    name: "Rohit Sharma",
    role: "Event Guest",
    text: "Spacious hall with excellent service and beautiful ambiance. Parking and facilities were well managed. Highly recommend!",
    rating: 4,
    avatar: "/avatars/guest1.jpg",
  },
  {
    id: 3,
    name: "Priya & Manish",
    role: "Reception Couple",
    text: "From start to finish, everything was handled professionally. The staff truly cared about making our big day special.",
    rating: 5,
    avatar: "/avatars/couple2.jpg",
  },
];

export default function Reviews() {
  return (
    <section className="bg-slate-50 py-16 px-6 lg:px-20">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-pink-500 sm:text-4xl">
          What Our Guests Say
        </h2>
        <p className="mt-4 text-slate-600">
          Real stories from happy couples and guests who celebrated with us.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col"
          >
            {/* Rating */}
            <div className="flex mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
              {[...Array(5 - review.rating)].map((_, i) => (
                <FaStar key={i} className="text-slate-300" />
              ))}
            </div>

            {/* Review text */}
            <p className="text-slate-600 italic flex-grow">“{review.text}”</p>

            {/* User */}
            <div className="flex items-center mt-6">
              <img
                src={review.avatar}
                alt={review.name}
                className="h-12 w-12 rounded-full object-cover shadow-sm"
              />
              <div className="ml-3">
                <h4 className="font-semibold text-pink-500">
                  {review.name}
                </h4>
                <p className="text-sm text-slate-500">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
