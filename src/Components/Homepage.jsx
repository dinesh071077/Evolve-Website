


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Navbar from './Navbar';
// import leftImg from '../assets/download.jpeg';  // Add your left image here
// import rightImg from '../assets/information-technology-data-poster-vector.jpg'; // Add your right image here

// const Homepage = () => {
//   const [clicks, setClicks] = useState([]);

//   const handleClick = (e) => {
//     const newClick = {
//       x: e.clientX,
//       y: e.clientY,
//       id: Date.now(),
//     };

//     setClicks((prev) => [...prev, newClick]);

//     setTimeout(() => {
//       setClicks((prev) => prev.filter((click) => click.id !== newClick.id));
//     }, 1000);
//   };

//   return (
//     <div
//       id='home' className="  w-full min-h-screen bg-linear-to-br  via-purple-100 to-indigo-100 text-black relative overflow-hidden "
//       onClick={handleClick}
//       //  className="bg-[url('src/assets/istockphoto-2157709105-1024x1024.jpg')] bg-cover bg-center bg-fixed h-screen  justify-center text-white"
//     >
//       {/* Click Animation Elements */}
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

//       {/* Navbar */}
//       <Navbar />

    


//       {/* Hero Section */}
//       <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
//         <motion.h1
//           className="text-6xl font-extrabold tracking-tight"
//           initial={{ opacity: 0, y: -80 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.5, ease: 'easeOut' }}
//         >
//           Welcome to <motion.span
//             className="text-yellow-400 inline-block"
//             animate={{ scale: [1, 1.2, 1] }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               repeatType: "mirror",
//             }}
//           >SoftSphere</motion.span>
//         </motion.h1>

//         <motion.p
//           className="mt-8 max-w-3xl text-lg leading-relaxed font-bold"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2, duration: 1 }}
//         >
//           At <motion.span
//             className="text-yellow-300 font-bold inline-block"
//             animate={{ opacity: [0.8, 1, 0.8] }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               repeatType: "mirror",
//             }}
//           >SoftSphere</motion.span>, we build smart, scalable, and innovative
//           digital solutions that elevate your business. From web apps to mobile platforms, Digital Marketing a
//           nd beyond, we focus on delivering seamless user experiences and cutting-edge features.
//         </motion.p>
//       </section>
//     </div>
//   );
// };

// export default Homepage;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';

const techIcons = [FaReact, FaNodeJs, FaPython, FaDatabase];

const Homepage = () => {
  const [clicks, setClicks] = useState([]);

  const handleClick = (e) => {
    const newClick = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now(),
    };
    setClicks((prev) => [...prev, newClick]);
    setTimeout(() => {
      setClicks((prev) => prev.filter((click) => click.id !== newClick.id));
    }, 1000);
  };

  return (
    <div
      id="home"
      className="w-full min-h-screen relative overflow-hidden bg-white text-black"
      onClick={handleClick}
    >
      {/* Click Ripple */}
      {clicks.map((click) => (
        <motion.div
          key={click.id}
          className="absolute w-10 h-10 rounded-full bg-fuchsia-800 opacity-80"
          style={{ top: click.y - 20, left: click.x - 20 }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1 }}
        />
      ))}

      {/* Navbar */}
      <Navbar />

      {/* Floating Tech Icons */}
     {/* 🔹 Tech Rain Animation (fixed + visible + responsive) */}
{Array.from({ length: 14 }).map((_, i) => {
  const Icon = techIcons[i % techIcons.length];
  const randomX = Math.random() * 100;
  const duration = 6 + Math.random() * 6;
  return (
    <motion.div
      key={i}
      className="absolute text-fuchsia-600 text-3xl md:text-4xl opacity-80 drop-shadow-lg z-20"
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


      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          className="text-6xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Welcome to{" "}
          <motion.span
            className="text-fuchsia-600 inline-block"
            animate={{ scale: [1, 1.2, 1], textShadow: ["0 0 5px ", "0 0 20px ", "0 0 5px "] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            EvolveSolution
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-8 max-w-3xl text-lg leading-relaxed font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          At{" "}
          <motion.span
            className="text-fuchsia-600 font-bold inline-block"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            EvolveSolution
          </motion.span>
          , we build smart, scalable, and innovative digital solutions that elevate your business. From web apps to mobile platforms and beyond, we focus on delivering seamless user experiences and cutting-edge features.
        </motion.p>
      </section>
    </div>
  );
};

export default Homepage;
