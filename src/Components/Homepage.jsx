


  // import React, { useState } from 'react';
  // import { motion } from 'framer-motion';
  // import Navbar from './Navbar';
  // import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';

  // const techIcons = [FaReact, FaNodeJs, FaPython, FaDatabase];

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
  //       id="home"
  //       className="w-full min-h-screen relative overflow-hidden bg-white text-black"
  //       onClick={handleClick}
  //     >
  //       {/* Click Ripple */}
  //       {clicks.map((click) => (
  //         <motion.div
  //           key={click.id}
  //           className="absolute w-10 h-10 rounded-full bg-fuchsia-800 opacity-80"
  //           style={{ top: click.y - 20, left: click.x - 20 }}
  //           initial={{ scale: 0, opacity: 1 }}
  //           animate={{ scale: 2, opacity: 0 }}
  //           transition={{ duration: 1 }}
  //         />
  //       ))}

  //       {/* Navbar */}
  //       <Navbar />

  //       {/* Floating Tech Icons */}
  //     {/* 🔹 Tech Rain Animation (fixed + visible + responsive) */}
  // {Array.from({ length: 14 }).map((_, i) => {
  //   const Icon = techIcons[i % techIcons.length];
  //   const randomX = Math.random() * 100;
  //   const duration = 6 + Math.random() * 6;
  //   return (
  //     <motion.div
  //       key={i}
  //       className="absolute text-fuchsia-600 text-3xl md:text-4xl opacity-80 drop-shadow-lg z-20"
  //       style={{
  //         left: `${randomX}%`,
  //         top: "-15%",
  //       }}
  //       animate={{
  //         y: ["0vh", "110vh"],
  //         rotate: [0, 360],
  //       }}
  //       transition={{
  //         duration,
  //         repeat: Infinity,
  //         delay: Math.random() * 5,
  //         ease: "linear",
  //       }}
  //     >
  //       <Icon />
  //     </motion.div>
  //   );
  // })}


  //       {/* Hero Section */}
  //       <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
  //         <motion.h1
  //           className="text-6xl font-extrabold tracking-tight"
  //           initial={{ opacity: 0, y: -80 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           transition={{ duration: 1.5, ease: "easeOut" }}
  //         >
  //           Welcome to{" "}
  //           <motion.span
  //             className="text-fuchsia-600 inline-block"
  //             animate={{ scale: [1, 1.2, 1], textShadow: ["0 0 5px ", "0 0 20px ", "0 0 5px "] }}
  //             transition={{
  //               duration: 1.5,
  //               repeat: Infinity,
  //               repeatType: "mirror",
  //             }}
  //           >
  //             EvolveSolution
  //           </motion.span>
  //         </motion.h1>

  //         <motion.p
  //           className="mt-8 max-w-3xl text-lg leading-relaxed font-bold"
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           transition={{ delay: 1.2, duration: 1 }}
  //         >
  //           At{" "}
  //           <motion.span
  //             className="text-fuchsia-600 font-bold inline-block"
  //             animate={{ opacity: [0.8, 1, 0.8] }}
  //             transition={{
  //               duration: 1.5,
  //               repeat: Infinity,
  //               repeatType: "mirror",
  //             }}
  //           >
  //             EvolveSolution
  //           </motion.span>
  //           , we build smart, scalable, and innovative digital solutions that elevate your business. From web apps to mobile platforms and beyond, we focus on delivering seamless user experiences and cutting-edge features.
  //         </motion.p>
  //       </section>
        
  //     </div>
  //   );
  // };
  
import React, { useState } from "react";
import { motion } from "framer-motion";
import heroVideo from "../assets/299527_medium.mp4";
import TypingText from "../Components/TypingAnimation";
import Navbar from "./Navbar";
import pic1 from "../assets/modern-office.avif"
import pic2 from "../assets/collaboration-group-young-modern-people-smart-casual-wear-discussing-something-smiling-working-creative-office-144907464.webp"
import pic3 from "../assets/digital-marketing-2.jpg.optimal.jpg"
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaBullhorn,
  FaLaptopCode,
  FaMobileAlt,
  FaHeadset
} from "react-icons/fa";
import RoadMap from "./RoadMap";

const techIcons = [FaReact, FaNodeJs, FaPython, FaDatabase];

const Homepage = () => {
  const [clicks, setClicks] = useState([]);

  const handleClick = (e) => {
    const newClick = { x: e.clientX, y: e.clientY, id: Date.now() };
    setClicks((prev) => [...prev, newClick]);
    setTimeout(() => {
      setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
    }, 1000);
  };

  const imageFloat = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 3,
    
    ease: "easeInOut",
  },
};



const descriptionText = `
Evolve Solution is a technology-driven company specializing in web and mobile application development, digital marketing, IT consulting, and professional training services. We engineer scalable digital platforms, cloud-ready systems, and high-performance applications using modern frameworks, microservice architectures, and agile methodologies.

Our solutions emphasize clean code, optimized performance, secure integrations, and seamless user experiences, helping businesses adapt, scale, and innovate in rapidly evolving digital environments.

In addition to development services, Evolve Solution provides industry-focused technical courses, IT training, and placement support programs to prepare students and professionals with real-world skills and career opportunities. Our IT consulting and services help organizations streamline processes, enhance digital presence, and achieve sustainable growth.
`;
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

      <Navbar />

      {/* Tech Rain */}
      {Array.from({ length: 12 }).map((_, i) => {
        const Icon = techIcons[i % techIcons.length];
        return (
          <motion.div
            key={i}
            className="absolute text-fuchsia-600 text-3xl opacity-70 z-20"
            style={{ left: `${Math.random() * 100}%`, top: "-15%" }}
            animate={{ y: ["0vh", "110vh"], rotate: [0, 360] }}
            transition={{
              duration: 7 + Math.random() * 6,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Icon />
          </motion.div>
        );
      })}

      {/* ================= HERO ================= */}
 {/* ================= HERO ================= */}
<section className="relative min-h-screen pt-20 flex flex-col justify-center items-center text-center px-4 sm:px-6 overflow-hidden">

  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src={heroVideo} type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0"></div>

  {/* Content */}
  <div className="relative z-10">

    {/* Hero Heading */}
    <motion.h1
      className="
        font-extrabold 
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
        leading-snug sm:leading-tight md:leading-tight
        text-white
      "
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      Welcome to{" "}
      <span className="text-fuchsia-500 block sm:inline">
        EvolveSolution
      </span>
    </motion.h1>

    {/* Hero Description */}
    <motion.p
      className="
        mt-4 sm:mt-6 
        max-w-3xl 
        text-lg sm:text-lg md:text-xl 
        font-medium 
        whitespace-pre-line
        px-2 sm:px-0
        text-gray-200
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <TypingText text={descriptionText} speed={20} />
    </motion.p>

  </div>

</section>


  

{/* ================= WORK CULTURE ================= */}
<section className="bg-gray-900 py-10 sm:py-12 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

    {/* Image */}
    <motion.img
      src={pic1}
      alt="Engineering Culture"
      className="w-full rounded-2xl shadow-2xl hover:shadow-fuchsia-300/40 transition-shadow duration-500"
      initial={{ opacity: 0, x: -60, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.04 }}
    />

    {/* Content */}
    <div className="text-center md:text-left">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white"  >
        Engineering-Driven <span className="text-white">Culture</span>
      </h2>

      <p className="text-white text-lg sm:text-base leading-relaxed mb-4">
        At EvolveSolution, we foster a high-performance engineering culture built
        on clean architecture, reusable components, and Agile sprint execution.
        Our teams work with clarity, ownership, and accountability to deliver
        scalable digital solutions.
      </p>

      <ul className="text-white text-lg sm:text-base space-y-2 list-disc list-inside">
        <li>Clean code standards and best practices</li>
        <li>Agile development and sprint-based delivery</li>
        <li>Code reviews and performance optimization</li>
        <li>Scalable and maintainable system design</li>
      </ul>
    </div>

  </div>
</section>

{/* ================= COLLABORATION ================= */}
<section className="bg-gray-900 py-12 sm:py-14 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

    {/* Content */}
    <div className="text-center md:text-left order-2 md:order-1">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white"  >
        Smart Collaboration & <span className="text-white">Growth</span>
      </h2>

      <p className="text-white text-lg sm:text-base leading-relaxed mb-4">
        We believe that great products are built through strong collaboration.
        Our teams communicate openly across design, development, and deployment
        to solve real-world problems efficiently.
      </p>

      <ul className="text-white text-lg sm:text-base space-y-2 list-disc list-inside">
        <li>Cross-functional team collaboration</li>
        <li>Continuous learning and mentoring culture</li>
        <li>Innovation-driven problem solving</li>
        <li>Ownership and accountability at every level</li>
      </ul>
    </div>

    {/* Image */}
    <motion.img
      src={pic2}
      alt="Team Collaboration"
      className="w-full rounded-2xl shadow-2xl hover:shadow-fuchsia-300/40 transition-shadow duration-500 order-1 md:order-2"
      initial={{ opacity: 0, x: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.04 }}
    />

  </div>
</section>


   {/* ================= SERVICES ================= */}
<section className="bg-gray-100 py-12 sm:py-16 px-4 sm:px-6 text-center">

  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
    Our <span className="text-fuchsia-600">Core Services</span>
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">

    {/* Web Development */}
    <div className="relative group h-72 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03]">

      <img
        src="/src/assets/download.jpeg"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 p-5 sm:p-6 h-full flex flex-col justify-center transition-opacity duration-300 group-hover:opacity-0">
        <FaLaptopCode className="text-3xl sm:text-4xl text-fuchsia-400 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
          Web Development
        </h3>
      </div>

      <div className="absolute inset-0 z-10 p-5 sm:p-6 flex items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
        <p className="text-lg sm:text-base leading-relaxed">
          We design and develop modern, responsive, and high-performance websites
          tailored to your business needs. Our websites are fast, secure, and
          user-friendly, ensuring a great experience across all devices.
        </p>
      </div>

    </div>

    {/* Mobile Applications */}
    <div className="relative group h-72 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03]">

      <img
        src="src/assets/1715371733808.jpeg"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 p-5 sm:p-6 h-full flex flex-col justify-center transition-opacity duration-300 group-hover:opacity-0">
        <FaMobileAlt className="text-3xl sm:text-4xl text-fuchsia-400 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
          Mobile Applications
        </h3>
      </div>

      <div className="absolute inset-0 z-10 p-5 sm:p-6 flex items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
        <p className="text-lg sm:text-base leading-relaxed">
          We design and develop high-quality mobile applications that deliver
          smooth performance and an excellent user experience. Our apps are built
          to be secure, scalable, and easy to use, helping businesses connect with
          customers anytime, anywhere.
        </p>
      </div>

    </div>

    {/* Backend & Cloud */}
    <div className="relative group h-72 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03]">

      <img
        src="/src/assets/circle.png"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 p-5 sm:p-6 h-full flex flex-col justify-center transition-opacity duration-300 group-hover:opacity-0">
        <FaDatabase className="text-3xl sm:text-4xl text-fuchsia-400 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
          Backend & Cloud
        </h3>
      </div>

      <div className="absolute inset-0 z-10 p-5 sm:p-6 flex items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
        <p className="text-lg sm:text-base leading-relaxed">
          We provide robust backend and cloud solutions that power secure,
          scalable, and high-performance applications. Our backend systems handle
          business logic, databases, and APIs, while our cloud services ensure
          reliability, flexibility, and easy scalability.
        </p>
      </div>

    </div>
     <div className="relative group h-72 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03]">

  <img
    src="/src/assets/undraw_investment-data_frxx.png"
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />

  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 p-5 sm:p-6 h-full flex flex-col justify-center transition-opacity duration-300 group-hover:opacity-0">
    <FaHeadset className="text-3xl sm:text-4xl text-fuchsia-400 mx-auto mb-3 sm:mb-4" />
    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
      IT Support Services
    </h3>
  </div>

  <div className="absolute inset-0 z-10 p-5 sm:p-6 flex items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
    <p className="text-lg sm:text-base leading-relaxed">
      We provide reliable IT support services to ensure your systems run smoothly
      and securely. Our team handles troubleshooting, maintenance, system updates,
      and technical assistance to minimize downtime and keep your business operating efficiently.
    </p>
  </div>

</div>

  </div>
</section>


      {/* ================= DIGITAL MARKETING ================= */}
 

{/* ================= DIGITAL MARKETING ================= */}
<section className="bg-gray-900 py-10 sm:py-14 md:py-16 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

    {/* IMAGE WITH JUMP EFFECT */}
    <motion.img
      src={pic3}
      alt="Digital Marketing Strategy"
      className="w-full rounded-2xl shadow-xl cursor-pointer"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{
        y: -18,
        scale: 1.03,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.25)",
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 12,
        duration: 0.8,
      }}
      viewport={{ once: true }}
    />

    {/* CONTENT */}
    <motion.div
      className="text-center md:text-left"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className=" text-white   text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
        Land & Digital <span className="text-white">Marketing</span>
      </h2>

      <p className="text-white text-base sm:text-lg leading-relaxed mb-4">
        We provide end-to-end land and digital marketing solutions designed
        to increase visibility, generate qualified leads, and drive measurable
        business growth through smart digital strategies.
      </p>

      <p className="text-white text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
        From local land promotions to full-scale digital campaigns, we combine
        market research, creative execution, and analytics to ensure maximum
        ROI across every channel.
      </p>

      <ul className="space-y-2 sm:space-y-3 text-white text-base sm:text-lg font-medium">
        <li>✔ SEO & Local Search Optimization</li>
        <li>✔ Social Media Marketing & Paid Ads</li>
        <li>✔ Google Ads, Meta Ads & Campaign Tracking</li>
        <li>✔ Landing Pages & Conversion Optimization</li>
        <li>✔ Analytics, Reporting & Performance Insights</li>
      </ul>
    </motion.div>

  </div>
</section>
  <RoadMap/>

    </div>
  );
};

export default Homepage;
