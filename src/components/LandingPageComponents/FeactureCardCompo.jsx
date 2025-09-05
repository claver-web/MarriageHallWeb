import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-[rgb(202,207,249)] via-[rgb(224,210,249)] to-[rgb(240,242,255)] py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
          Let Us Make Your Dream Wedding a Reality
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Book a tour of our elegant venue or enquire about our tailored packages today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to='/venues'>
          <p
            className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full shadow-md transition"
          >
            Book Now
          </p>
          </Link>

          <Link to='/booking'>
          <p
            className="px-8 py-4 border-2 border-pink-500 text-pink-600 hover:bg-pink-50 font-medium rounded-full shadow-md transition"
          >
            Enquire
          </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
