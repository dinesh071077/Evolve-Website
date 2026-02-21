

// import React, { useState, useEffect } from "react";

// /* ---------------- IMAGE IMPORTS ---------------- */

// import heroPoster from "../assets/home-banner2.jpg";

// import dra from "../assets/dra.jpeg";
// import dra2 from "../assets/dra2.jpeg";
// import dra3 from "../assets/dra3.jpeg";
// import dra4 from "../assets/dra4.jpeg";

// import delite1 from "../assets/delite1.jpeg";
// import delite2 from "../assets/delite2.jpeg";
// import delite3 from "../assets/delite3.jpeg";
// import delite4 from "../assets/delite4.jpeg";
// import delite5 from "../assets/delite5.jpeg";
// import delite6 from "../assets/delite6.jpeg";
// import delite7 from "../assets/delite7.jpeg";
// import delite8 from "../assets/delite8.jpeg";
// import delite9 from "../assets/delite9.jpeg";
// import delite10 from "../assets/delite10.jpeg";
// import delite11 from "../assets/delite11.jpeg";
// import delite12 from "../assets/delite12.jpeg";
// import delite13 from "../assets/delite14.jpeg";
// import delite14 from "../assets/delite15.jpeg";

// import sky from "../assets/sky.jpeg";
// import sky2 from "../assets/sky2.jpeg";
// import sky3 from "../assets/sky3.jpeg";
// import sky4 from "../assets/sky4.jpeg";
// import sky5 from "../assets/sky5.jpeg";
// import sky6 from "../assets/sky6.jpeg";
// import sky7 from "../assets/sky7.jpeg";
// import sky8 from "../assets/sky8.jpeg";
// import sky9 from "../assets/sky9.jpeg";
// import sky10 from "../assets/sky10.jpeg";
// import sky11 from "../assets/sky11.jpeg";
// import sky12 from "../assets/sky12.jpeg";
// import sky13 from "../assets/sky13.jpeg";

// /* ---------------- DATA ---------------- */

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
//     images: [dra, dra2, dra3, dra4],
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
//       delite1, delite2, delite3, delite4, delite5, delite6, delite7,
//       delite8, delite9, delite10, delite11, delite12, delite13, delite14,
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
//       sky, sky2, sky3, sky4, sky5, sky6, sky7,
//       sky8, sky9, sky10, sky11, sky12, sky13,
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

// /* ---------------- SLIDER ---------------- */

// function ImageSlider({ images }) {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(
//       () => setIndex((i) => (i + 1) % images.length),
//       3500
//     );
//     return () => clearInterval(timer);
//   }, [images]);

//   return (
//     <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] overflow-hidden rounded-t-3xl">
//       <img
//         src={images[index]}
//         className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
//       />

//       <button
//         onClick={() =>
//           setIndex(index === 0 ? images.length - 1 : index - 1)
//         }
//         className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 px-2 sm:px-3 py-1 rounded-full shadow"
//       >
//         ‹
//       </button>

//       <button
//         onClick={() => setIndex((index + 1) % images.length)}
//         className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 px-2 sm:px-3 py-1 rounded-full shadow"
//       >
//         ›
//       </button>
//     </div>
//   );
// }

// /* ---------------- PAGE ---------------- */

// export default function Properties() {
//   return (
//     <div className="bg-fuchsia-600 min-h-screen">

//       {/* HERO */}
//       <div
//         className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center text-center"
//         style={{
//           backgroundImage: `url(${heroPoster})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>

//         <div className="relative z-10 text-white px-4 sm:px-6 max-w-3xl">
//           <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3 sm:mb-4">
//             Evolve Properties
//           </h1>

//           <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
//             Discover premium homes crafted for modern living
//           </p>

//           <a
//             href="https://wa.me/919319552561"
//             target="_blank"
//             className="bg-green-500 hover:bg-green-600 px-6 sm:px-10 py-3 rounded-full font-semibold transition inline-block"
//           >
//             Enquire on WhatsApp
//           </a>
//         </div>
//       </div>

//       {/* PROPERTIES */}
//       <div className="max-w-5xl mx-auto py-16 sm:py-24 px-4 sm:px-6 space-y-16 sm:space-y-20">

//         {properties.map((property, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:-translate-y-1 transition duration-300"
//           >
//             <ImageSlider images={property.images} />

//             <div className="p-6 sm:p-10 space-y-3 sm:space-y-4">
//               <h2 className="text-2xl sm:text-3xl font-bold">
//                 {property.name}
//               </h2>

//               <p className="text-blue-600 font-semibold text-base sm:text-lg">
//                 {property.location}
//               </p>

//               <ul className="space-y-1 text-gray-700 text-base sm:text-lg">
//                 {property.description.map((p, idx) => (
//                   <li key={idx}>• {p}</li>
//                 ))}
//               </ul>

//               <a
//                 href={`https://wa.me/919319552561?text=I am interested in ${property.name}`}
//                 target="_blank"
//                 className="inline-block mt-6 sm:mt-8 bg-green-500 hover:bg-green-600 text-white px-6 sm:px-10 py-3 rounded-full font-semibold transition"
//               >
//                 Enquire on WhatsApp
//               </a>
//             </div>
//           </div>
//         ))}

//       </div>

//       {/* AMENITIES */}
//       <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">
//         Amenities
//       </h2>

//       <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 pb-16 sm:pb-24 px-4 sm:px-6">
//         {amenities.map((item, i) => (
//           <div
//             key={i}
//             className="bg-white p-5 sm:p-6 rounded-xl shadow-lg text-center font-medium hover:shadow-xl transition"
//           >
//             {item}
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }



import React, { useState, useEffect } from "react";

/* IMAGE IMPORTS SAME AS YOUR CODE */
import heroPoster from "../assets/property-insurance-sale-rental-apartment-260nw-2262307847.webp";

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

/* DATA SAME */
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
      delite1, delite2, delite3, delite4, delite5, delite6,
      delite7, delite8, delite9, delite10, delite11,
      delite12, delite13, delite14,
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

/* SLIDER */
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
    <div className="relative w-full h-240px md:h-[340px] overflow-hidden rounded-t-2xl">
      <img
        src={images[index]}
        className="w-full h-full object-cover transition duration-700 hover:scale-105"
      />

      <button
        onClick={() =>
          setIndex(index === 0 ? images.length - 1 : index - 1)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-cyan-400 text-black px-3 py-1 rounded-full"
      >
        ‹
      </button>

      <button
        onClick={() => setIndex((index + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-cyan-400 text-black px-3 py-1 rounded-full"
      >
        ›
      </button>
    </div>
  );
}

/* PAGE */
export default function Properties() {
  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-[#0f172a]
      via-[#1e1b4b]
      to-[#312e81]
      text-white
    "
    >

      {/* HERO */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${heroPoster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 px-6 max-w-3xl">

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            <span className="text-cyan-400">Evolve</span> Properties
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Discover premium homes crafted for modern living
          </p>

          <a
            href="https://wa.me/919319552561"
            target="_blank"
            className="
            bg-cyan-400
            hover:bg-cyan-300
            text-black
            px-8 py-3
            rounded-full
            font-semibold
            transition
          "
          >
            Enquire on WhatsApp
          </a>

        </div>
      </div>

      {/* PROPERTIES */}
      <div className="max-w-5xl mx-auto py-20 px-6 space-y-16">

        {properties.map((property, i) => (

          <div
            key={i}
            className="
            bg-white/10
            backdrop-blur-lg
            border border-white/20
            rounded-2xl
            shadow-xl
            overflow-hidden
            hover:scale-[1.01]
            transition
          "
          >

            <ImageSlider images={property.images} />

            <div className="p-8 space-y-4">

              <h2 className="text-2xl md:text-3xl font-bold text-cyan-400">
                {property.name}
              </h2>

              <p className="text-gray-300 font-semibold">
                {property.location}
              </p>

              <ul className="space-y-1 text-gray-300">
                {property.description.map((p, idx) => (
                  <li key={idx}>• {p}</li>
                ))}
              </ul>

              <a
                href={`https://wa.me/919319552561?text=I am interested in ${property.name}`}
                target="_blank"
                className="
                inline-block mt-6
                bg-cyan-400
                hover:bg-cyan-300
                text-black
                px-6 py-3
                rounded-full
                font-semibold
                transition
              "
              >
                Enquire on WhatsApp
              </a>

            </div>

          </div>

        ))}

      </div>

      {/* AMENITIES */}
      <h2 className="text-3xl font-bold text-center mb-10 text-cyan-400">
        Amenities
      </h2>

      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 pb-20 px-6">

        {amenities.map((item, i) => (

          <div
            key={i}
            className="
            bg-white/10
            backdrop-blur-lg
            border border-white/20
            p-6
            rounded-xl
            text-center
            font-medium
            hover:bg-white/20
            transition
          "
          >
            {item}
          </div>

        ))}

      </div>

    </div>
  );
}