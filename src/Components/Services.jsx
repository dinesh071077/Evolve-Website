


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
//   FaReact,
//   FaNodeJs,
//   FaPython,
//   FaDatabase,
// } from "react-icons/fa";
// import achi1 from "../assets/achi1.jpeg"
// import achi2 from "../assets/achi2.jpeg";
// import achi3 from "../assets/achi3.jpeg";
// import achi4 from "../assets/achi4.jpeg";
// import achi5 from "../assets/achi5..jpeg";
// import achi6 from "../assets/achi6.jpeg";

// const techIcons = [FaReact, FaNodeJs, FaPython, FaDatabase];

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
//       icon: <FaLaptopCode className="text-4xl text-fuchsia-600 mb-4" />,
//     },
//     {
//       title: "IT Training & Placement",
//       description:
//         "Hands-on training programs with placement support to boost careers in tech.",
//       icon: <FaChalkboardTeacher className="text-4xl text-fuchsia-600 mb-4" />,
//     },
//     {
//       title: "Tech Courses",
//       description:
//         "Learn trending technologies with structured courses designed by industry experts.",
//       icon: <FaCodeBranch className="text-4xl text-fuchsia-600 mb-4" />,
//     },
//     {
//       title: "Manpower Solutions",
//       description:
//         "Providing skilled manpower to meet your project or staffing needs in IT, production, and manufacturing industries.",
//       icon: <FaUsers className="text-4xl text-fuchsia-600 mb-4" />,
//     },
//     {
//       title: "Internship Programs",
//       description:
//         "Our IT Internship Program at SoftSphere offers real-world project experience and exposure to modern technologies.",
//       icon: <FaUserTie className="text-4xl text-fuchsia-600 mb-4" />,
//     },
//     {
//       title: "Digital Marketing",
//       description:
//         "We help businesses grow their online presence through SEO, social media, and data-driven digital strategies.",
//       icon: <FaBullhorn className="text-4xl text-fuchsia-600 mb-4" />,
//     },
//   ];

//   const achievementImages = [
    
//     achi1,
//     achi2,
//     achi3,
//     achi4,
//     achi5,
//     achi6,
//   ];

//   return (
//     <div
//       id="Services"
//       className="relative w-full min-h-screen overflow-hidden bg-fuchsia-600 text-black"
//       onClick={handleClick}
//     >
//       <Navbar />

//       {/* Tech Rain Animation */}
//       {Array.from({ length: 14 }).map((_, i) => {
//         const Icon = techIcons[i % techIcons.length];
//         const randomX = Math.random() * 100;
//         const duration = 6 + Math.random() * 6;
//         return (
//           <motion.div
//             key={i}
//             className="absolute text-fuchsia-500 text-3xl md:text-4xl opacity-80 drop-shadow-lg z-20"
//             style={{
//               left: `${randomX}%`,
//               top: "-15%",
//             }}
//             animate={{
//               y: ["0vh", "110vh"],
//               rotate: [0, 360],
//             }}
//             transition={{
//               duration,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "linear",
//             }}
//           >
//             <Icon />
//           </motion.div>
//         );
//       })}

//       {/* Click Ripple Animation */}
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

//       {/* Main Section */}
//       <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 relative z-10">
//         <motion.h1
//           className="text-5xl md:text-6xl font-extrabold mb-12 text-center"
//           initial={{ opacity: 0, y: -80 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         >
//           Our{" "}
//           <motion.span
//             className="text-white inline-block"
//             animate={{
//               scale: [1, 1.2, 1],
//               textShadow: ["0 0 5px", "0 0 20px", "0 0 5px"],
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
//               className="p-6 border-2 border-black rounded-xl bg-white text-black hover:shadow-[0_0_40px_rgba(192,38,211,0.8)] hover:scale-105 transition-all duration-300 cursor-pointer"
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

//       {/* Achievement Section */}
//     <section className="w-full py-20 bg-white text-black relative z-10">
//   {/* Title */}
//   <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
//     Our Achievements
//   </h2>

//   {/* Description */}
//   <p className="max-w-3xl mx-auto text-center text-lg md:text-xl font-medium mb-14 text-gray-700">
//     We have successfully conducted industry-oriented{" "}
//     <span className="text-fuchsia-600 font-semibold">
//       internship programs, professional IT training, live project development,
//       and placement assistance
//     </span>{" "}
//     to empower students and professionals with real-world experience and
//     career-ready skills.
//   </p>

//   <div className="overflow-hidden max-w-6xl mx-auto space-y-10">
//     {/* Row 1 */}
//     <motion.div
//       className="flex items-center gap-8"
//       animate={{ x: ["0%", "-50%"] }}
//       transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
//     >
//       {[...achievementImages, ...achievementImages].map((img, idx) => (
//         <div
//           key={idx}
//           className="min-w-[220px] h-160px bg-white rounded-xl 
//                      flex items-center justify-center 
//                      border-2 border-fuchsia-200
//                      shadow-lg hover:scale-105 transition-transform duration-300"
//         >
//           <img
//             src={img}
//             alt={`achievement-${idx}`}
//             className="w-full h-full object-contain p-4"
//           />
//         </div>
//       ))}
//     </motion.div>

//     {/* Row 2 (slower & opposite feel) */}
//     {/* <motion.div
//       className="flex items-center gap-8"
//       animate={{ x: ["-50%", "0%"] }}
//       transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
//     >
//       {[...achievementImages, ...achievementImages].map((img, idx) => (
//         <div
//           key={`row2-${idx}`}
//           className="min-w-[220px] h-160px bg-white rounded-xl 
//                      flex items-center justify-center 
//                      border-2 border-fuchsia-200
//                      shadow-lg hover:scale-105 transition-transform duration-300"
//         >
//           <img
//             src={img}
//             alt={`achievement-row2-${idx}`}
//             className="w-full h-full object-contain p-4"
//           />
//         </div>
//       ))}
//     </motion.div> */}
//   </div>
// </section>

//     </div>
//   );
// };

// export default Services;

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

import achi1 from "../assets/achi1.jpeg";
import achi2 from "../assets/achi2.jpeg";
import achi3 from "../assets/achi3.jpeg";
import achi4 from "../assets/achi4.jpeg";
import achi5 from "../assets/achi5..jpeg";
import achi6 from "../assets/achi6.jpeg";

import service1 from "../assets/imagesil.jpeg";
import service2 from "../assets/circle.png";
import service3 from "../assets/1715371733808.jpeg";
import service4 from "../assets/artificial-intelligence-3382507_640.jpg";
import service5 from "../assets/download.jpeg";
import service6 from "../assets/digi.jpeg";

const techIcons = [FaReact, FaNodeJs, FaPython, FaDatabase];

const Services = () => {
  const [clicks, setClicks] = useState([]);

  const handleClick = (e) => {
    const newClick = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now(),
    };

    setClicks((prev) => [...prev, newClick]);

    setTimeout(() => {
      setClicks((prev) =>
        prev.filter((click) => click.id !== newClick.id)
      );
    }, 1000);
  };

  const serviceList = [
    {
      title: "IT Consulting & Services",
      description:
        "Enterprise-grade consulting and architecture solutions to modernize and scale your IT infrastructure.",
      icon: <FaLaptopCode className="text-3xl text-cyan-400 mx-auto mb-3" />,
      image: service1,
    },
    {
      title: "IT Training & Placement",
      description:
        "Industry-focused training with placement support to build job-ready professionals.",
      icon: <FaChalkboardTeacher className="text-3xl text-cyan-400 mx-auto mb-3" />,
      image: service2,
    },
    {
      title: "Tech Courses",
      description:
        "Expert-led courses covering full stack, cloud, and enterprise technologies.",
      icon: <FaCodeBranch className="text-3xl text-cyan-400 mx-auto mb-3" />,
      image: service3,
    },
    {
      title: "Manpower Solutions",
      description:
        "Providing skilled technical professionals for enterprise and industrial projects.",
      icon: <FaUsers className="text-3xl text-cyan-400 mx-auto mb-3" />,
      image: service4,
    },
    {
      title: "Internship Programs",
      description:
        "Hands-on internship programs with real-world live project experience.",
      icon: <FaUserTie className="text-3xl text-cyan-400 mx-auto mb-3" />,
      image: service5,
    },
    {
      title: "Digital Marketing",
      description:
        "Data-driven marketing including SEO, paid ads, and brand growth strategies.",
      icon: <FaBullhorn className="text-3xl text-cyan-400 mx-auto mb-3" />,
      image: service6,
    },
  ];

  const achievementImages = [achi1, achi2, achi3, achi4, achi5, achi6];

  return (
    <div
      onClick={handleClick}
      className="
        min-h-screen
        bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81]
        text-white
        relative
        overflow-hidden
      "
    >
      <Navbar />

      {/* TECH RAIN */}
      {Array.from({ length: 14 }).map((_, i) => {
        const Icon = techIcons[i % techIcons.length];
        const randomX = Math.random() * 100;
        const duration = 6 + Math.random() * 6;

        return (
          <motion.div
            key={i}
            className="absolute text-3xl md:text-4xl opacity-70 z-10"
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

      {/* CLICK GLOW */}
      {clicks.map((click) => (
        <motion.div
          key={click.id}
          className="absolute w-10 h-10 rounded-full bg-yellow-400"
          style={{
            top: click.y - 20,
            left: click.x - 20,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1 }}
        />
      ))}

      {/* SERVICES SECTION */}
      <section className="min-h-screen px-6 py-20">

        {/* HEADING */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.span
            className="text-cyan-400"
            animate={{
              scale: [1, 1.2, 1],
              textShadow: [
                "0 0 10px #06b6d4",
                "0 0 30px #06b6d4",
                "0 0 10px #06b6d4",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          >
            Our
          </motion.span>{" "}
          Services
        </motion.h1>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {serviceList.map((service, index) => (

            <motion.div
              key={index}
              className="
                relative
                group
                rounded-xl
                overflow-hidden
                border border-white/20
                bg-white/10
                backdrop-blur-lg
                hover:border-cyan-400
                hover:shadow-xl
                hover:shadow-cyan-400/20
                transition duration-300
              "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              {/* IMAGE */}
              <img
                src={service.image}
                className="
                  absolute inset-0 w-full h-full object-cover
                  group-hover:scale-110 transition duration-500
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* TITLE */}
              <div className="relative z-10 p-6 h-64 flex flex-col justify-center items-center text-center group-hover:opacity-0 transition duration-300">

                {service.icon}

                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>

              </div>

              {/* DESCRIPTION */}
              <div className="absolute inset-0 z-10 p-6 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-300">

                <p className="text-gray-200">
                  {service.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-20 overflow-hidden">

        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          Our Achievements
        </h2>

        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...achievementImages, ...achievementImages].map((img, index) => (

            <div
              key={index}
              className="
                w-[280px]
                h-[320px]
                rounded-xl
                overflow-hidden
                border border-white/20
                bg-white/10
                backdrop-blur-lg
              "
            >

              <img
                src={img}
                className="w-full h-full object-cover"
              />

            </div>

          ))}

        </motion.div>

      </section>

    </div>
  );
};

export default Services;