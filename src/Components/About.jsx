
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   const [clicks, setClicks] = useState([]);

//   const handleClick = (e) => {
//     const newClick = { x: e.clientX, y: e.clientY, id: Date.now() };
//     setClicks((prev) => [...prev, newClick]);
//     setTimeout(() => {
//       setClicks((prev) => prev.filter((click) => click.id !== newClick.id));
//     }, 1000);
//   };

//   return (
//     <div id="about"
//       className="min-h-screen bg-linear-to-br from-blue-600 via-purple-700 text-white flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden"
//       onClick={handleClick}
//     >
//       {/* Click Glow Animation */}
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

//       {/* Animated Heading */}
//       <motion.h1
//         className="text-5xl md:text-6xl font-extrabold mb-2 text-center"
//         initial={{ opacity: 0, y: -80 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, ease: "easeOut" }}
//       >
//           <motion.span
//             className="text-yellow-400 inline-block"
//             animate={{ scale: [1, 1.2, 1], textShadow: ["0 0 5px #FFD700", "0 0 20px #FFD700", "0 0 5px #FFD700"] }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               repeatType: "mirror",
//             }}
//           >
//           About
//         </motion.span>{" "}
//         SoftSphere
//       </motion.h1>

//       {/* Moving Background with Text */}
//       <div className="relative w-full overflow-hidden mt-6 h-12 ">
//         <motion.div
//           className="absolute top-0 left-0 w-full h-full bg-white flex items-center rounded-2xl"
//           initial={{ x: "-100%" }}
//           animate={{ x: "100%" }}
//           transition={{
//             duration: 10, // slower movement
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         >
//           <p className="text-black text-xl font-bold whitespace-nowrap w-full text-center">
//             🚀 Innovate • Build • Evolve 🚀 Innovate • Build • Evolve 🚀 Innovate • Build • Evolve 🚀
//           </p>
//         </motion.div>
//       </div>

//       {/* Content Section */}
//       <motion.div
//         className="max-w-4xl text-center leading-relaxed  text-lg font-medium"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//       >
//         <p className="mb-6">
//           At <span className="text-yellow-300 font-bold">SoftSphere</span>, we
//           believe in blending innovation and intelligence to build digital
//           solutions that make a real impact. Our team of developers, designers,
//           and strategists are dedicated to transforming ideas into powerful and
//           user-friendly applications.
//         </p>

//         <p className="mb-6">
//           We specialize in{" "}
//           <span className="text-yellow-300 font-semibold">
//             Software Development
//           </span>
//           ,{" "}
//           <span className="text-yellow-300 font-semibold">
//             AI-Driven Solutions
//           </span>
//           , and{" "}
//           <span className="text-yellow-300 font-semibold">
//             Startup-Ready Platforms
//           </span>
//           . From ideation to deployment, we focus on creating scalable, secure,
//           and elegant systems that empower businesses to grow.
//         </p>

//         <p className="mb-6">
//           Our mission is simple — to make technology seamless, smart, and
//           human-centered. Whether it’s a web app, mobile experience, or
//           enterprise solution, SoftSphere is your trusted partner in innovation.
//         </p>
//       </motion.div>

//       {/* Floating Illustration */}
//       <motion.img
//         src="src/assets/pngtree-person-holding-glowing-sphere-with-digital-icons-representing-data-security-and-image_17484318.webp"
//         alt="Innovation"
//         className="mt-10 w-40 md:w-65 opacity-90 rounded-2xl"
//         initial={{ x: -500, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{
//           duration: 1.5,
//           ease: "easeOut",
//         }}
//       />
//     </div>
//   );
// };

// export default About;
  

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";

const techIcons = [FaReact, FaNodeJs, FaPython, FaDatabase];

const About = () => {
  const [clicks, setClicks] = useState([]);

  const handleClick = (e) => {
    const newClick = { x: e.clientX, y: e.clientY, id: Date.now() };
    setClicks((prev) => [...prev, newClick]);
    setTimeout(() => {
      setClicks((prev) => prev.filter((click) => click.id !== newClick.id));
    }, 1000);
  };

  return (
    <div
      id="about"
      className="min-h-screen bg-linear-to-br from-blue-600 via-purple-700 to-indigo-800 text-white flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden"
      onClick={handleClick}
    >
      {/* 🔹 Tech Rain Animation */}
     {/* 🔹 Tech Rain Animation (fixed + visible + responsive) */}
{Array.from({ length: 14 }).map((_, i) => {
  const Icon = techIcons[i % techIcons.length];
  const randomX = Math.random() * 100;
  const duration = 6 + Math.random() * 6;
  return (
    <motion.div
      key={i}
      className="absolute text-shadow-amber-100 text-3xl md:text-4xl opacity-80 drop-shadow-lg z-20"
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


      {/* 🔹 Click Glow Animation */}
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

      {/* 🔹 Animated Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-2 text-center"
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.span
          className="text-black inline-block"
          animate={{
            scale: [1, 1.2, 1],
            textShadow: ["0 0 5px ", "0 0 20px ", "0 0 5px "],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          About
        </motion.span>{" "}
        Evolve
      </motion.h1>

<div className="w-full mt-4 sm:mt-6 px-3 sm:px-6">
  <div className="bg-white rounded-2xl h-10 sm:h-12 md:h-14 flex items-center justify-center">
    
    {/* Mobile & Small screens (2 times) */}
    <p className="
      text-black font-bold text-sm sm:text-base md:hidden
      text-center leading-tight
    ">
      🚀 Innovate • Build • Evolve 🚀 Innovate • Build • Evolve 🚀
    </p>

    {/* Desktop & Large screens (3 times) */}
    <p className="
      hidden md:block text-black font-bold
      md:text-lg lg:text-xl
      text-center whitespace-nowrap
    ">
      🚀 Innovate • Build • Evolve 🚀 Innovate • Build • Evolve 🚀 Innovate • Build • Evolve 🚀
    </p>

  </div>
</div>



      {/* 🔹 About Content */}
      <motion.div
        className="max-w-4xl text-center leading-relaxed text-lg font-medium mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="mb-6">
          At <span className="text-black font-bold">EvolveSolution</span>, we
          believe in blending innovation and intelligence to build digital
          solutions that make a real impact. Our team of developers, designers,
          and strategists are dedicated to transforming ideas into powerful and
          user-friendly applications.
        </p>

        <p className="mb-6">
          We specialize in{" "}
          <span className="text-black font-semibold">Software Development</span>,
          <span className="text-black font-semibold"> AI-Driven Solutions</span>, and{" "}
          <span className="text-black font-semibold">Startup-Ready Platforms</span>.
          From ideation to deployment, we focus on creating scalable, secure,
          and elegant systems that empower businesses to grow.
        </p>

        <p className="mb-6">
          Our mission is simple — to make technology seamless, smart, and
          human-centered. Whether it’s a web app, mobile experience, or
          enterprise solution, EvolveSoluion is your trusted partner in innovation.
        </p>
      </motion.div>
     {/* 🔹 Project Section */}
<motion.div
  className="mt-12 w-full max-w-3xl bg-white text-black rounded-2xl p-5 shadow-lg border border-purple-200"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="flex items-center justify-between">
    <h3 className="text-xl font-bold text-purple-700">
      Project 1: Dating App
    </h3>
    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-purple-100 text-purple-700">
      Ongoing
    </span>
  </div>

  <p className="mt-3 text-gray-700 text-sm">
    A modern dating & friendship app with chat, audio/video calls and
    location-based user discovery.
  </p>
</motion.div>

      {/* 🔹 Floating Illustration
      <motion.img
        src="src/assets/undraw_lightbulb-moment_16av.png"
        alt="Innovation"
        className="mt-10   w-40  md:w-65 opacity-90 rounded-2xl"
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
      /> */}
    </div>
  );
};

export default About;
