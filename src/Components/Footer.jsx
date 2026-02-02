


// import React from "react";
// import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
// import logo from "../assets/Evolvelogo.png"; 

// const Footer = () => {
//   return (
//     <footer className="bg-white text-black border-t-2 border-fuchsia-800 py-10 px-4 sm:px-6 mt-10">
      
//       <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between lg:items-start items-center gap-10">

//         {/* 🔹 Left Section - Logo + Info */}
//         <div className="flex flex-col sm:flex-row items-center sm:items-start w-full lg:w-1/2 gap-6">
          
//           {/* Logo */}
//           <div className="flex justify-center sm:justify-start">
//             <img
//               src={logo}
//               alt="Evolve Solution Logo"
//               className="w-36 h-36 md:w-40 md:h-40
//               object-cover border-2 border-fuchsia-800
//               hover:shadow-[0_0_40px_rgba(192,38,211,0.8)]
//               hover:scale-105 transition-all duration-300 cursor-pointer shadow-md"
//             />
//           </div>

//           {/* Company Info */}
//           <div className="flex flex-col justify-center">
//             <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
//               Evolve<span className="text-fuchsia-600">solution</span>
//             </h2>
//             <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-md">
//               Empowering innovation through smart digital solutions.  
//               We build technology that connects, grows, and evolves with your ideas.
//             </p>
//           </div>
//         </div>

//         {/* 🔹 Middle Section - Contact */}
//         <div className="w-full lg:w-1/4 text-center lg:text-left">
//           <h3 className="text-lg font-semibold mb-2 text-black">Contact Us</h3>
//           <a
//             href="mailto:evolvesolutionspvtltd@gmail.com"
//             className="text-gray-600 hover:text-fuchsia-600 transition font-medium break-all"
//           >
//             evolvesolutionspvtltd@gmail.com
//           </a>
//         </div>

//         {/* 🔹 Right Section - Social Links */}
//         <div className="w-full lg:w-1/4 flex justify-center lg:justify-end gap-6 text-xl sm:text-2xl">
          
//           <a
//             href="https://www.facebook.com/@evolve.solutions.2025"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-yellow-500 transition-transform hover:scale-110"
//           >
//             <FaFacebookF />
//           </a>

//           <a
//             href="https://www.instagram.com/evolve_solution"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-yellow-500 transition-transform hover:scale-110"
//           >
//             <FaInstagram />
//           </a>

//           <a
//             href="https://wa.me/919319552561"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-green-500 transition-transform hover:scale-110"
//           >
//             <FaWhatsapp />
//           </a>

//         </div>
//       </div>

//       {/* 🔹 Bottom Line */}
//       <div className="border-t border-gray-300 mt-8 pt-4 text-center text-gray-600 text-xs sm:text-sm">
//         © {new Date().getFullYear()} EvolveSolution. All rights reserved.
//       </div>

//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/Evolvelogo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t-2 border-fuchsia-800 py-10 px-4 sm:px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">

        {/* 🔹 Logo & Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <img
            src={logo}
            alt="Evolve Solution Logo"
            className="w-28 h-28 sm:w-32 sm:h-32 object-cover border-2 border-fuchsia-800
            hover:shadow-[0_0_30px_rgba(192,38,211,0.6)]
            hover:scale-105 transition-all duration-300 cursor-pointer shadow-md rounded-xl"
          />

          <h2 className="text-xl sm:text-2xl font-extrabold">
            Evolve<span className="text-fuchsia-600">Solution</span>
          </h2>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-xs">
            Empowering innovation through smart digital solutions.
          </p>
        </div>

        {/* 🔹 Contact */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <a
            href="mailto:evolvesolutionspvtltd@gmail.com"
            className="text-gray-600 hover:text-fuchsia-600 transition font-medium break-all text-sm sm:text-base"
          >
            evolvesolutionspvtltd@gmail.com
          </a>
        </div>

        {/* 🔹 Location */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <FaMapMarkerAlt className="text-fuchsia-600" />
            Our Location
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-xs">
            <span className="font-semibold text-black">Evolve Solution</span>
            <br />
            NP 28, Sai Supreme,
            <br />
            Thiru Vi Ka Industrial Estate,
            <br />
            SIDCO Industrial Estate,
            <br />
            Ekkatuthangal,
            <br/>
              Chennai, Tamil Nadu – 600006
          </p>
          <p className="text-black font-bold text-sm leading-relaxed mb-4 max-w-xs">
             Other  Branches
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-xs"> 
           Awfis guindy, Chennai .
           <br/>
           Pammal Chennai.
           <br/>
           Bangalore
          </p>

          <div className="w-full max-w-xs h-36 rounded-xl overflow-hidden border border-gray-300 shadow-sm">
            <iframe
              title="Evolve Solution Location"
              src="https://www.google.com/maps?q=NP%2028,%20Thiru%20Vi%20Ka%20Industrial%20Estate,%20SIDCO%20Industrial%20Estate,%20Ekkatuthangal,%20Chennai&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* 🔹 Social Links */}
        <div className="flex justify-center md:justify-start lg:justify-end gap-6 text-xl sm:text-2xl">
          <a
            href="https://www.facebook.com/@evolve.solutions.2025"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-transform hover:scale-110"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/evolve_solution"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition-transform hover:scale-110"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/919319552561"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-transform hover:scale-110"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* 🔹 Bottom Line */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-gray-600 text-xs sm:text-sm">
        © {new Date().getFullYear()} EvolveSolution. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
