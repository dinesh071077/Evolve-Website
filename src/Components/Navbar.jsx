


// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Replace path with section id
//   const navLinks = [
//     { name: "Home", id: "home" },
//     { name: "About", id: "about" },
//     { name: "Services", id: "Services" },
//     { name: "Contact", id: "contact" },
//   ];

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsOpen(false); // Close mobile sidebar on click
//   };

//   return (
//     <>
//       {/* Top Navbar */}
//       <nav className="fixed w-full bg-white shadow-lg z-20">
//         <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
//           {/* Logo */}
//           <h1 className="text-3xl font-bold text-black">
//             Soft<span className="text-yellow-400">Sphere</span>
//           </h1>

//           {/* Desktop Links */}
//           <ul className="text-lg hidden md:flex space-x-6 text-black font-bold">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <button
//                   onClick={() => scrollToSection(link.id)}
//                   className="hover:text-yellow-400 transition duration-300"
//                 >
//                   {link.name}
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Hamburger */}
//           <button
//             className="md:hidden text-black text-2xl font-bold"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? "✖" : "☰"}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center p-4 border-b border-gray-200">
//           <h1 className="text-2xl font-bold text-black">
//             Soft<span className="text-yellow-400">Sphere</span>
//           </h1>
//           <button
//             className="text-black text-2xl font-bold"
//             onClick={() => setIsOpen(false)}
//           >
//             ✖
//           </button>
//         </div>

//         <ul className="flex flex-col p-4 space-y-4 font-bold text-gray-900">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <button
//                 onClick={() => scrollToSection(link.id)}
//                 className="hover:text-yellow-400 transition duration-300"
//               >
//                 {link.name}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-30 z-20"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import logo from "../assets/ChatGPT Image Dec 22, 2025, 04_46_12 PM.png"; // 🟡 make sure this path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "Services" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Navbar */}
      <nav  className=" fixed w-full bg-white shadow-lg z-20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* 🟡 Logo + Company Name */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="SoftSphere Logo"
              className="w-12 h-12 rounded-full shadow-md"
            />
            <h1 className="text-3xl font-bold text-black">
              Evolve<span className="text-fuchsia-500">Solution</span>
            </h1>
          </div>

          {/* Desktop Links */}
          <ul className="text-lg hidden md:flex space-x-6 text-black font-bold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-fuchsia-800 transition duration-300"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-black text-2xl font-bold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="SoftSphere Logo"
              className="w-8 h-8 rounded-full"
            />
            <h1 className="text-2xl font-bold text-black">
              Evolve<span className="text-fuchsia-500">Soluion</span>
            </h1>
          </div>
          <button
            className="text-black text-2xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
        </div>

        <ul className="flex flex-col p-4 space-y-4 font-bold text-gray-900">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="hover:text-fuchsia-800 transition duration-300"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
