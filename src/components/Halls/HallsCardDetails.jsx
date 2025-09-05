import { FaUsers, FaWifi, FaUtensils, FaParking, FaBuilding } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useParams } from "react-router-dom";

import WeddingClanders from "../Calander/DepartureC";

// Example hall data (could be fetched dynamically)
const halls = [{
  name: "Grand Ballroom",
  capacity: "500 Guests",
  description:
    "The Grand Ballroom offers timeless elegance with crystal chandeliers, luxury interiors, and ample space for both intimate and large celebrations.",
  images: [
    "/halls/hall1.jpg",
    "/others/hall7.jpeg",
    "/halls/hall2.jpg",
  ],
  amenities: [
    { icon: <FaWifi />, label: "Free Wi-Fi" },
    { icon: <FaUtensils />, label: "Catering Service" },
    { icon: <FaParking />, label: "Ample Parking" },
    { icon: <FaBuilding />, label: "Bridal Suite" },
  ],
  floorPlan: ["/halls/hall1.jpg", '/halls/hall2.jpg', '/halls/hall3.jpg', '/halls/hall4.jpg'], // image of floor plan
},
{
  name: "Rosewood Hall",
  capacity: "300 Guests",
  description:
    "The Rosewood Hall offers timeless elegance with crystal chandeliers, luxury interiors, and ample space for both intimate and large celebrations.",
  images: [
    "/halls/hall3.jpg",
    "/others/hall2.jpeg",
    "/halls/hall2.jpg",
  ],
  amenities: [
    { icon: <FaWifi />, label: "Free Wi-Fi" },
    { icon: <FaUtensils />, label: "Catering Service" },
    { icon: <FaParking />, label: "Ample Parking" },
    { icon: <FaBuilding />, label: "Bridal Suite" },
  ],
  floorPlan: ["/halls/hall1.jpg", '/halls/hall2.jpg', '/halls/hall3.jpg', '/halls/hall4.jpg'], // image of floor plan
},
{
  name: "Garden Pavilion",
  capacity: "200 Guests",
  description:
    "The Garden Pavilion offers timeless elegance with crystal chandeliers, luxury interiors, and ample space for both intimate and large celebrations.",
  images: [
    "/halls/hall3.jpg",
    "/others/hall4.jpeg",
    "/halls/hall2.jpg",
  ],
  amenities: [
    { icon: <FaWifi />, label: "Free Wi-Fi" },
    { icon: <FaUtensils />, label: "Catering Service" },
    { icon: <FaParking />, label: "Ample Parking" },
    { icon: <FaBuilding />, label: "Bridal Suite" },
  ],
  floorPlan: ["/halls/hall1.jpg", '/halls/hall2.jpg', '/halls/hall3.jpg', '/halls/hall4.jpg'], // image of floor plan
}];

export default function HallDetails() {
  const {id} = useParams();
  console.log(id)
  const hall = halls.find(hal => hal.name === id);
  console.log(hall)

  return (
    <section className="bg-gradient-to-r from-pink-100 to-pink-100 py-16">
      <div className="max-w-7xl mx-auto px-0">
        {/* Header */}
        <h1 className="text-4xl font-serif text-pink-500 mb-6">{hall.name}</h1>
        <p className="text-lg text-gray-800 mb-8">{hall.description}</p>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {hall.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${hall.name} view ${idx + 1}`}
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          ))}
        </div>

        {/* Highlights & Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Capacity */}
          <div className="bg-gradient-to-r from-[rgb(202,207,249)] to-[rgb(240,242,255)] p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-3">
              <FaUsers className="text-pink-500 text-2xl" />
              <p className="text-gray-700 font-medium">{hall.capacity}</p>
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-gradient-to-r from-[rgb(224,210,249)] to-[rgb(240,242,255)] p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Amenities</h3>
            <div className="grid grid-cols-2 gap-4">
              {hall.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-gray-600">
                  <span className="text-pink-500 text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floor Plan */}
        <div className="mb-17 p-1  shadow-pink-400 shadow-2xl rounded-2xl">
          <h3 className="text-2xl font-semibold text-pink-500 text-center mb-6">Floor Plan</h3>

          <Swiper spaceBetween={10} slidesPerView={1.2}>
            {hall.floorPlan.map((img, index) => (
              <SwiperSlide key={index}>

                <img
                  src={img}
                  alt={`Floor Plan ${index + 1}`}
                  loading="lazy"
                  className="rounded-lg w-full object-contain"
                />

              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>

        {/* Availability Calendar (placeholder) */}
        <div className="p-2 my-17 bg-gradient-to-r from-pink-100 to-pink-100">
          <h3 className="text-2xl font-semibold text-pink-500 text-center text-shadow-pink-500 text-shadow-2xs mb-6">Check Availability</h3>
          <div className=" p-10 rounded-xl text-center">
            <WeddingClanders />
          </div>
        </div>

        {/* 3D Tour (Optional Embed) */}
        <div className="mb-8">
          <h3 className="mb-6 lg:mb-0 text-center text-2xl font-semibold text-pink-500">
            3D Virtual Tour
          </h3>

          <div className="aspect-video rounded-lg overflow-hidden lg:ml-87">
            {/* Replace src with real Matterport or 3D iframe */}
            <iframe
              src="/hall.mp4"
              title="3D Tour"
              className="w-full h-full lg:w-140 lg:h-140"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
