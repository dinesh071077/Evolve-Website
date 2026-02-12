// import React, { useState, useEffect } from "react";

// const properties = [
//   {
//     name: "Avalon Residential Project",
//     location: "Premium Living Community",
//     description: [
//       "Premium gated living community",
//       "Spacious modern homes with ventilation",
//       "Peaceful green surroundings",
//       "World-class lifestyle amenities",
//       "24/7 security and safety",
//     ],
//     images: [
//       "../assets/dra.jpeg",
//       "../assets/dra2.jpeg",
//       "../assets/dra3.jpeg",
//       "../assets/dra4.jpeg",
//     ],
//   },
//   {
//     name: "D ELITE Homes",
//     location: "Nature Friendly Community",
//     description: [
//       "Eco-friendly residential layout",
//       "Large open green spaces",
//       "Modern infrastructure facilities",
//       "Calm pollution-free environment",
//       "Excellent road connectivity",
//     ],
//     images: [
//       "../assets/delite1.jpeg",
//       "../assets/delite2.jpeg",
//       "../assets/delite3.jpeg",
//       "../assets/delite4.jpeg",
//       "../assets/delite5.jpeg",
//       "../assets/delite6.jpeg",
//       "../assets/delite7.jpeg",
//       "../assets/delite8.jpeg",
//       "../assets/delite9.jpeg",
//       "../assets/delite10.jpeg",
//       "../assets/delite11.jpeg",
//       "../assets/delite12.jpeg",
//       "../assets/delite13.jpeg",
//       "../assets/delite14.jpeg",
//     ],
//   },
//   {
//     name: "Skyline Apartments",
//     location: "City Center Living",
//     description: [
//       "Luxury high-rise apartment homes",
//       "Beautiful skyline and city views",
//       "Premium interior finishes",
//       "Modern gym and recreation zones",
//       "Close to business districts",
//     ],
//     images: [
//       "../assets/sky.jpeg",
//       "../assets/sky2.jpeg",
//       "../assets/sky3.jpeg",
//       "../assets/sky4.jpeg",
//       "../assets/sky5.jpeg",
//       "../assets/sky6.jpeg",
//       "../assets/sky7.jpeg",
//       "../assets/sky8.jpeg",
//       "../assets/sky9.jpeg",
//       "../assets/sky10.jpeg",
//       "../assets/sky11.jpeg",
//       "../assets/sky12.jpeg",
//       "../assets/sky13.jpeg",
//     ],
//   },
// ];

// const amenities = [
//   "24/7 Security",
//   "Covered Parking",
//   "Children Play Area",
//   "Garden Space",
//   "Lift Facility",
//   "Power Backup",
// ];

// function ImageSlider({ images }) {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, [images.length]);

//   const next = () =>
//     setIndex((prev) => (prev + 1) % images.length);

//   const prev = () =>
//     setIndex((prev) =>
//       prev === 0 ? images.length - 1 : prev - 1
//     );

//   return (
//     <div className="relative overflow-hidden">
//       <img
//         src={images[index]}
//         className="w-full h-72 object-cover transition-all duration-700"
//       />

//       <button
//         onClick={prev}
//         className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full shadow"
//       >
//         ‹
//       </button>

//       <button
//         onClick={next}
//         className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full shadow"
//       >
//         ›
//       </button>
//     </div>
//   );
// }

// export default function Properties() {
//   return (
//     <div className="bg-fuchsia-600 min-h-screen pt-28 px-6 pb-16">

//       {/* HERO */}
//       <div className="max-w-6xl mx-auto text-center mb-16">
//         <h1 className="text-5xl md:text-6xl font-extrabold text-white">
//           Evolve Properties
//         </h1>

//         <div className="w-28 h-1 bg-white mx-auto my-5 rounded-full"></div>

//         <p className="text-white/90 text-lg">
//           Discover premium homes crafted for modern living
//         </p>
//       </div>

//       {/* PROPERTY GRID */}
//       <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

//         {properties.map((property, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden"
//           >
//             <ImageSlider images={property.images} />

//             <div className="p-6">
//               <h2 className="text-2xl font-semibold text-gray-800">
//                 {property.name}
//               </h2>

//               <p className="text-blue-600 font-medium mt-1">
//                 {property.location}
//               </p>

//               <div className="mt-4 space-y-1 text-gray-700">
//                 {property.description.map((point, idx) => (
//                   <p key={idx}>• {point}</p>
//                 ))}
//               </div>

//              <a
//   href={`https://wa.me/919319552561?text=I am interested in ${property.name}`}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition font-semibold"
// >
//   Enquire on WhatsApp
// </a>

//             </div>
//           </div>
//         ))}

//       </div>

//       {/* AMENITIES */}
//       <h2 className="text-3xl font-semibold mt-20 mb-8 text-center text-white">
//         Amenities
//       </h2>

//       <div className="max-w-4xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-6">
//         {amenities.map((item, i) => (
//           <div
//             key={i}
//             className="bg-white p-5 rounded-xl shadow text-center font-medium hover:shadow-lg transition"
//           >
//             {item}
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }


import React, { useState, useEffect } from "react";

/* ---------------- IMAGE IMPORTS ---------------- */


import heroPoster from "../assets/home-banner2.jpg" 
import dra from "../assets/dra.jpeg";
import dra2 from "../assets/dra2.jpeg";
import dra3 from "../assets/dra3.jpeg";
import dra4 from "../assets/dra4.jpeg";

import delite1 from "../assets/delite1.jpeg";
import delite2 from "../assets/delite2.jpeg";
import delite3 from "../assets/delite3.jpeg";
import delite4 from "../assets/delite4.jpeg";
import delite5 from "../assets/delite5.jpeg";
import delite6 from "../assets/delite6.jpeg";
import delite7 from "../assets/delite7.jpeg";
import delite8 from "../assets/delite8.jpeg";
import delite9 from "../assets/delite9.jpeg";
import delite10 from "../assets/delite10.jpeg";
import delite11 from "../assets/delite11.jpeg";
import delite12 from "../assets/delite12.jpeg";
import delite13 from "../assets/delite14.jpeg";
import delite14 from "../assets/delite15.jpeg";

import sky from "../assets/sky.jpeg";
import sky2 from "../assets/sky2.jpeg";
import sky3 from "../assets/sky3.jpeg";
import sky4 from "../assets/sky4.jpeg";
import sky5 from "../assets/sky5.jpeg";
import sky6 from "../assets/sky6.jpeg";
import sky7 from "../assets/sky7.jpeg";
import sky8 from "../assets/sky8.jpeg";
import sky9 from "../assets/sky9.jpeg";
import sky10 from "../assets/sky10.jpeg";
import sky11 from "../assets/sky11.jpeg";
import sky12 from "../assets/sky12.jpeg";
import sky13 from "../assets/sky13.jpeg";

/* ---------------- DATA ---------------- */

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
    images: [dra, dra2, dra3, dra4],
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
      delite1, delite2, delite3, delite4, delite5, delite6, delite7,
      delite8, delite9, delite10, delite11, delite12, delite13, delite14,
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
      sky, sky2, sky3, sky4, sky5, sky6, sky7,
      sky8, sky9, sky10, sky11, sky12, sky13,
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

/* ---------------- SLIDER ---------------- */

function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      3500
    );
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="relative w-full h-[380px] overflow-hidden rounded-t-3xl">
      <img
        src={images[index]}
        className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
      />

      <button
        onClick={() =>
          setIndex(index === 0 ? images.length - 1 : index - 1)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full shadow"
      >
        ‹
      </button>

      <button
        onClick={() => setIndex((index + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full shadow"
      >
        ›
      </button>
    </div>
  );
}

/* ---------------- PAGE ---------------- */

export default function Properties() {
  return (
    <div className="bg-fuchsia-600 min-h-screen">

      {/* HERO POSTER */}
      <div
        className="relative h-[85vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${heroPoster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-white px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-pulse">
            Evolve Properties
          </h1>

          <p className="text-xl mb-8">
            Discover premium homes crafted for modern living
          </p>

          <a
            href="https://wa.me/919319552561"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 px-10 py-3 rounded-full font-semibold transition"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      {/* PROPERTIES */}
      <div className="max-w-5xl mx-auto py-24 px-6 space-y-20">

        {properties.map((property, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:-translate-y-1 transition duration-300"
          >
            <ImageSlider images={property.images} />

            <div className="p-10 space-y-4">
              <h2 className="text-3xl font-bold">
                {property.name}
              </h2>

              <p className="text-blue-600 text-lg font-semibold">
                {property.location}
              </p>

              <ul className="space-y-1 text-gray-700 text-lg">
                {property.description.map((p, idx) => (
                  <li key={idx}>• {p}</li>
                ))}
              </ul>

              <a
                href={`https://wa.me/919319552561?text=I am interested in ${property.name}`}
                target="_blank"
                className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-white px-10 py-3 rounded-full font-semibold transition"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        ))}

      </div>

      {/* AMENITIES */}
      <h2 className="text-3xl font-bold text-center mb-12">
        Amenities
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-6 pb-24 px-6">
        {amenities.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg text-center font-medium hover:shadow-xl transition"
          >
            {item}
          </div>
        ))}
      </div>

    </div>
  );
}
