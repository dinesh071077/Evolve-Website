

// import React from "react";
// import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
// import logo from "../assets/ChatGPT Image Dec 22, 2025, 04_46_12 PM.png"; 

// const Footer = () => {
//   return (
//     <footer className="bg-white text-black border-t-2 border-fuchsia-800 py-10 px-6 mt-10">

        
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start text-center md:text-left space-y-8 md:space-y-0 md:space-x-8">

        
//         {/* 🔹 Left Section - Logo + Info */}
//         <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-1/2 space-y-4 md:space-y-0 md:space-x-4">
//           {/* Logo Square - covers ~50% width */}
//           <div className="w-full md:w-1/2 flex justify-center md:justify-start">
//             <img
//               src={logo}
//               alt="SoftSphere Logo"
//               className="w-40 h-40 object-cover border-2 border-fuchsia-800 hover:shadow-[0_0_40px_rgba(192,38,211,0.8)] hover:scale-105 transition-all duration-300 cursor-pointer shadow-md"
//             />
//           </div>

//           {/* Company Info */}
//           <div className="w-full ">
//             <h2 className="text-3xl font-extrabold mb-2">
//             Evolve<span className="text-fuchsia-600">solution</span>
//             </h2>
//             <p className="text-gray-700 text-sm">
//               Empowering innovation through smart digital solutions.  
//               We build technology that connects, grows, and evolves with your ideas.
//             </p>
//           </div>
//         </div>

//         {/* 🔹 Middle Section - Contact */}
//         <div className="md:w-1/4">
//           <h3 className="text-lg font-semibold mb-2 text-black">Contact Us</h3>
//           <a
//             href="mailto:evolvesolutionspvtltd@gmail.com"
//             className="text-gray-600 hover:text-fuchsia-600 transition font-medium"
//           >
//             evolvesolutionspvtltd@gmail.com
//           </a>
//         </div>

//         {/* 🔹 Right Section - Social Links */}
//         <div className="md:w-1/4 flex justify-center md:justify-end space-x-6 text-2xl">
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-yellow-500 transition-transform transform hover:scale-110"
//           >
//             <FaFacebookF />
//           </a>
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-yellow-500 transition-transform transform hover:scale-110"
//           >
//             <FaInstagram />
//           </a>
//           <a
//             href="https://wa.me/918123456789"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-green-500 transition-transform transform hover:scale-110"
//           >
//             <FaWhatsapp />
//           </a>
//         </div>
//       </div>

//       {/* 🔹 Bottom Line */}
//       <div className="border-t border-gray-300 mt-8 pt-4 text-center text-gray-600 text-sm">
//         © {new Date().getFullYear()} EvolveSolution. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/ChatGPT Image Dec 22, 2025, 04_46_12 PM.png"; 

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t-2 border-fuchsia-800 py-10 px-4 sm:px-6 mt-10">
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between lg:items-start items-center gap-10">

        {/* 🔹 Left Section - Logo + Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start w-full lg:w-1/2 gap-6">
          
          {/* Logo */}
          <div className="flex justify-center sm:justify-start">
            <img
              src={logo}
              alt="Evolve Solution Logo"
              className="w-36 h-36 md:w-40 md:h-40
              object-cover border-2 border-fuchsia-800
              hover:shadow-[0_0_40px_rgba(192,38,211,0.8)]
              hover:scale-105 transition-all duration-300 cursor-pointer shadow-md"
            />
          </div>

          {/* Company Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
              Evolve<span className="text-fuchsia-600">solution</span>
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-md">
              Empowering innovation through smart digital solutions.  
              We build technology that connects, grows, and evolves with your ideas.
            </p>
          </div>
        </div>

        {/* 🔹 Middle Section - Contact */}
        <div className="w-full lg:w-1/4 text-center lg:text-left">
          <h3 className="text-lg font-semibold mb-2 text-black">Contact Us</h3>
          <a
            href="mailto:evolvesolutionspvtltd@gmail.com"
            className="text-gray-600 hover:text-fuchsia-600 transition font-medium break-all"
          >
            evolvesolutionspvtltd@gmail.com
          </a>
        </div>

        {/* 🔹 Right Section - Social Links */}
        <div className="w-full lg:w-1/4 flex justify-center lg:justify-end gap-6 text-xl sm:text-2xl">
          
          <a
            href="https://www.facebook.com/evolvesolution"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-transform hover:scale-110"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/evolvesolution"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-transform hover:scale-110"
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
