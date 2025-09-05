import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="bg-gradient-to-r from-pink-50 to-pink-100 py-16 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-slate-600">
          Have questions or want to book a tour? Reach us directly via phone or WhatsApp.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
        {/* Phone */}
        <a
          href="tel:+919876543210"
          className="flex items-center gap-3 rounded-lg bg-white px-6 py-4 text-slate-800 shadow hover:shadow-md transition border border-slate-200"
        >
          <FaPhoneAlt className="text-pink-500 text-xl" />
          <span className="font-medium">+91 98765 43210</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919876543210?text=Hello!%20I%20would%20like%20to%20inquire%20about%20booking."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-lg bg-green-500 px-6 py-4 text-white shadow hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-2xl" />
          <span className="font-medium">Chat on WhatsApp</span>
        </a>
      </div>

      {/* Small Print */}
      <p className="mt-8 text-center text-sm text-slate-500">
        Available daily from 9:00 AM – 9:00 PM
      </p>
    </section>
  );
}
