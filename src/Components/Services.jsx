


// // src/Components/Services.jsx
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Navbar from "./Navbar";
// import {
//   FaLaptopCode,
//   FaChalkboardTeacher,
//   FaUserTie,
//   FaCodeBranch,
//   FaUsers,
//   FaBullhorn,
// } from "react-icons/fa";

// const Services = () => {
//   const [clicks, setClicks] = useState([]);

//   const handleClick = (e) => {
//     const newClick = { x: e.clientX, y: e.clientY, id: Date.now() };
//     setClicks((prev) => [...prev, newClick]);
//     setTimeout(() => {
//       setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
//     }, 1000);
//   };

//   const serviceList = [
//     {
//       title: "IT Consulting & Services",
//       description:
//         "Expert guidance and staffing solutions to scale your IT operations efficiently.",
//       icon: <FaLaptopCode className="text-4xl text-yellow-400 mb-4" />,
//     },
//     {
//       title: "IT Training & Placement",
//       description:
//         "Hands-on training programs with placement support to boost careers in tech.",
//       icon: <FaChalkboardTeacher className="text-4xl text-yellow-400 mb-4" />,
//     },
//     {
//       title: "Tech Courses",
//       description:
//         "Learn trending technologies with structured courses designed by industry experts.",
//       icon: <FaCodeBranch className="text-4xl text-yellow-400 mb-4" />,
//     },
//     {
//       title: "Manpower Solutions",
//       description:
//         "Providing skilled manpower to meet your project or staffing needs in IT, production, and manufacturing industries.",
//       icon: <FaUsers className="text-4xl text-yellow-400 mb-4" />,
//     },
//     {
//       title: "Internship Programs",
//       description:
//         "Our IT Internship Program at SoftSphere offers real-world project experience and exposure to modern technologies.",
//       icon: <FaUserTie className="text-4xl text-yellow-400 mb-4" />,
//     },
//     {
//       title: "Digital Marketing",
//       description:
//         "We help businesses grow their online presence through SEO, social media, and data-driven digital strategies.",
//       icon: <FaBullhorn className="text-4xl text-yellow-400 mb-4" />,
//     },
//   ];

//   return (
//     <div id="Services"
//       className="w-full min-h-screen relative overflow-hidden bg-white text-black"
//       onClick={handleClick}
//     >
//       {/* Click Ripple */}
//       {clicks.map((click) => (
//         <motion.div
//           key={click.id}
//           className="absolute w-10 h-10 rounded-full bg-yellow-400 opacity-80"
//           style={{ top: click.y - 20, left: click.x - 20 }}
//           initial={{ scale: 0, opacity: 1 }}
//           animate={{ scale: 2, opacity: 0 }}
//           transition={{ duration: 1 }}
//         />
//       ))}

//       <Navbar />

//       {/* Animated Heading */}
//       <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
//         <motion.h1
//           className="text-5xl md:text-6xl font-extrabold mb-12 text-center"
//           initial={{ opacity: 0, y: -80 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         >
//           Our{" "}
//           <motion.span
//             className="text-yellow-400 inline-block"
//             animate={{
//               scale: [1, 1.2, 1],
//               textShadow: [
//                 "0 0 5px #FFD700",
//                 "0 0 20px #FFD700",
//                 "0 0 5px #FFD700",
//               ],
//             }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               repeatType: "mirror",
//             }}
//           >
//             Services
//           </motion.span>
//         </motion.h1>

//         {/* Service Boxes */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mt-8">
//           {serviceList.map((service, index) => (
//             <motion.div
//               key={index}
//               className="p-6 border-2 border-black rounded-xl text-black bg-white hover:shadow-[0_0_20px_rgba(255,215,0,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//             >
//               <div className="flex flex-col items-center text-center">
//                 {service.icon}
//                 <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
//                 <p className="text-md font-medium">{service.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;
// src/Components/Services.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaUserTie,
  FaCodeBranch,
  FaUsers,
  FaBullhorn,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
} from "react-icons/fa";

const techIcons = [FaReact, FaNodeJs, FaPython, FaDatabase];

const Services = () => {
  const [clicks, setClicks] = useState([]);

  const handleClick = (e) => {
    const newClick = { x: e.clientX, y: e.clientY, id: Date.now() };
    setClicks((prev) => [...prev, newClick]);
    setTimeout(() => {
      setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
    }, 1000);
  };

  const serviceList = [
    {
      title: "IT Consulting & Services",
      description:
        "Expert guidance and staffing solutions to scale your IT operations efficiently.",
      icon: <FaLaptopCode className="text-4xl text-fuchsia-600 mb-4" />,
    },
    {
      title: "IT Training & Placement",
      description:
        "Hands-on training programs with placement support to boost careers in tech.",
      icon: <FaChalkboardTeacher className="text-4xl text-fuchsia-600 mb-4" />,
    },
    {
      title: "Tech Courses",
      description:
        "Learn trending technologies with structured courses designed by industry experts.",
      icon: <FaCodeBranch className="text-4xl text-fuchsia-600 mb-4" />,
    },
    {
      title: "Manpower Solutions",
      description:
        "Providing skilled manpower to meet your project or staffing needs in IT, production, and manufacturing industries.",
      icon: <FaUsers className="text-4xl text-fuchsia-600 mb-4" />,
    },
    {
      title: "Internship Programs",
      description:
        "Our IT Internship Program at SoftSphere offers real-world project experience and exposure to modern technologies.",
      icon: <FaUserTie className="text-4xl text-fuchsia-600 mb-4" />,
    },
    {
      title: "Digital Marketing",
      description:
        "We help businesses grow their online presence through SEO, social media, and data-driven digital strategies.",
      icon: <FaBullhorn className="text-4xl text-fuchsia-600 mb-4" />,
    },
  ];

  return (
    <div
      id="Services"
      className="relative w-full min-h-screen overflow-hidden bg-white text-black"
      onClick={handleClick}
    >
      <Navbar />

      {/* 🔹 Tech Rain Animation */}
      {Array.from({ length: 14 }).map((_, i) => {
        const Icon = techIcons[i % techIcons.length];
        const randomX = Math.random() * 100;
        const duration = 6 + Math.random() * 6;
        return (
          <motion.div
            key={i}
            className="absolute text-fuchsia-500 text-3xl md:text-4xl opacity-80 drop-shadow-lg z-20"
            style={{
              left: `${randomX}%`,
              top: "-15%",
            }}
            animate={{
              y: ["0vh", "110vh"],
              rotate: [0, 360],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            <Icon />
          </motion.div>
        );
      })}

      {/* 🔹 Click Ripple Animation */}
      {clicks.map((click) => (
        <motion.div
          key={click.id}
          className="absolute w-10 h-10 rounded-full bg-yellow-400 opacity-80"
          style={{ top: click.y - 20, left: click.x - 20 }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1 }}
        />
      ))}

      {/* 🔹 Main Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-12 text-center"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Our{" "}
          <motion.span
            className="text-fuchsia-500 inline-block"
            animate={{
              scale: [1, 1.2, 1],
              textShadow: [
                "0 0 5px ",
                "0 0 20px ",
                "0 0 5px ",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            Services
          </motion.span>
        </motion.h1>

        {/* 🔹 Service Boxes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mt-8">
          {serviceList.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 border-2 border-black rounded-xl bg-white text-black hover:shadow-[0_0_40px_rgba(192,38,211,0.8)] hover:scale-105 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-md font-medium">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
