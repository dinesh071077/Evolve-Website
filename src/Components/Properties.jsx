import React, { useState, useEffect } from "react";

const properties = [
  {
    name: "Avalon Residential Project",
    location: "Premium Living Community",
    description: [
      "Premium gated living community",
      "Spacious modern homes with ventilation",
      "Peaceful green surroundings",
      "World-class lifestyle amenities",
      "24/7 security and safety",
    ],
    images: [
      "./src/assets/dra.jpeg",
      "./src/assets/dra2.jpeg",
      "./src/assets/dra3.jpeg",
      "./src/assets/dra4.jpeg",
    ],
  },
  {
    name: "D ELITE Homes",
    location: "Nature Friendly Community",
    description: [
      "Eco-friendly residential layout",
      "Large open green spaces",
      "Modern infrastructure facilities",
      "Calm pollution-free environment",
      "Excellent road connectivity",
    ],
    images: [
      "./src/assets/delite1.jpeg",
      "./src/assets/delite2.jpeg",
      "./src/assets/delite3.jpeg",
      "./src/assets/delite4.jpeg",
      "./src/assets/delite5.jpeg",
      "./src/assets/delite6.jpeg",
      "./src/assets/delite7.jpeg",
      "./src/assets/delite8.jpeg",
      "./src/assets/delite9.jpeg",
      "./src/assets/delite10.jpeg",
      "./src/assets/delite11.jpeg",
      "./src/assets/delite12.jpeg",
      "./src/assets/delite13.jpeg",
      "./src/assets/delite14.jpeg",
    ],
  },
  {
    name: "Skyline Apartments",
    location: "City Center Living",
    description: [
      "Luxury high-rise apartment homes",
      "Beautiful skyline and city views",
      "Premium interior finishes",
      "Modern gym and recreation zones",
      "Close to business districts",
    ],
    images: [
      "./src/assets/sky.jpeg",
      "./src/assets/sky2.jpeg",
      "./src/assets/sky3.jpeg",
      "./src/assets/sky4.jpeg",
      "./src/assets/sky5.jpeg",
      "./src/assets/sky6.jpeg",
      "./src/assets/sky7.jpeg",
      "./src/assets/sky8.jpeg",
      "./src/assets/sky9.jpeg",
      "./src/assets/sky10.jpeg",
      "./src/assets/sky11.jpeg",
      "./src/assets/sky12.jpeg",
      "./src/assets/sky13.jpeg",
    ],
  },
];

const amenities = [
  "24/7 Security",
  "Covered Parking",
  "Children Play Area",
  "Garden Space",
  "Lift Facility",
  "Power Backup",
];

function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const next = () =>
    setIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <div className="relative overflow-hidden">
      <img
        src={images[index]}
        className="w-full h-72 object-cover transition-all duration-700"
      />

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full shadow"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full shadow"
      >
        ›
      </button>
    </div>
  );
}

export default function Properties() {
  return (
    <div className="bg-fuchsia-600 min-h-screen pt-28 px-6 pb-16">

      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white">
          Evolve Properties
        </h1>

        <div className="w-28 h-1 bg-white mx-auto my-5 rounded-full"></div>

        <p className="text-white/90 text-lg">
          Discover premium homes crafted for modern living
        </p>
      </div>

      {/* PROPERTY GRID */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

        {properties.map((property, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden"
          >
            <ImageSlider images={property.images} />

            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {property.name}
              </h2>

              <p className="text-blue-600 font-medium mt-1">
                {property.location}
              </p>

              <div className="mt-4 space-y-1 text-gray-700">
                {property.description.map((point, idx) => (
                  <p key={idx}>• {point}</p>
                ))}
              </div>

             <a
  href={`https://wa.me/919319552561?text=I am interested in ${property.name}`}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition font-semibold"
>
  Enquire on WhatsApp
</a>

            </div>
          </div>
        ))}

      </div>

      {/* AMENITIES */}
      <h2 className="text-3xl font-semibold mt-20 mb-8 text-center text-white">
        Amenities
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {amenities.map((item, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow text-center font-medium hover:shadow-lg transition"
          >
            {item}
          </div>
        ))}
      </div>

    </div>
  );
}
