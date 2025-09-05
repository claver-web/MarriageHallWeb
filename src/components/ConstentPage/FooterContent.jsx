import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#C21E56]  p-0.5 text-white pt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Marriage Hall</h2>
          <p className="text-white">
            Serving authentic flavors with love since 2010. Where every meal 
            tells a story and every guest is family.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#FAFAFA] mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="/rooms" className="hover:text-red-500 transition">Rooms</a></li>
            <li><a href="/booking" className="hover:text-red-500 transition">Booking</a></li>
            <li><a href="/about-us" className="hover:text-red-500 transition">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-[#FAFAFA] mb-3">Contact Us</h3>
          <p className="text-white">123 Main Street, Delhi, IN</p>
          <p className="text-white">Phone: (123) 456-7890</p>
          <p className="text-white">Email: info@labelladine.com</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="bg-[#FAFAFA] text-[#C21E56] p-0.5 hover:text-red-500 transition"><FaFacebookF /></a>
            <a href="#" className="bg-[#FAFAFA] text-[#C21E56] p-0.5 hover:text-red-500 transition"><FaInstagram /></a>
            <a href="#" className="bg-[#FAFAFA] text-[#C21E56] p-0.5 hover:text-red-500 transition"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#FAFAFA] mt-10 py-4 text-center text-[#FAFAFa] text-sm">
        © {new Date().getFullYear()} Your Treking Name. All rights reserved.
      </div>
    </footer>
  );
}
