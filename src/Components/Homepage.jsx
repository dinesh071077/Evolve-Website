


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
import Navbar from "./Navbar";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaBullhorn,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";

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
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          className="text-6xl font-extrabold"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Welcome to{" "}
          <span className="text-fuchsia-600">EvolveSolution</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-3xl text-lg font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
         We engineer scalable digital platforms, cloud-ready systems, and
performance-driven applications using modern frameworks, microservice
architectures, and agile methodologies. Our solutions emphasize clean
code, optimized performance, secure integrations, and seamless user
experiences, enabling businesses to adapt, scale, and innovate with
confidence in rapidly evolving digital environments.

        </motion.p>
      </section>

      {/* ================= WORK CULTURE ================= */}
      <section className="bg-fuchsia-600 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <img
            src="src/assets/modern-office.avif"
            alt="Engineering Culture"
            className="rounded-2xl shadow-lg"
          />

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Engineering-Driven <span className="text-white">Culture</span>
            </h2>
            <p className="text-white leading-relaxed">
              At EvolveSolution, we foster a high-performance engineering culture
              built on clean architecture, reusable components,
              and Agile sprint execution. Our teams collaborate across design,
              development, and  ship production-ready solutions faster.
            </p>
          </div>
        </div>
      </section>

      {/* ================= COLLABORATION ================= */}
      <section className="bg-fuchsia-600 py-14 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Smart Collaboration & <span className="text-white">Growth</span>
            </h2>
            <p className="text-white leading-relaxed">
              We believe in continuous improvement through code reviews,
              architectural discussions, performance optimization, and
              real-world problem solving. Our environment encourages innovation,
              learning, and ownership at every level.
            </p>
          </div>

          {/* Image */}
          <img
            src="src/assets/collaboration-group-young-modern-people-smart-casual-wear-discussing-something-smiling-working-creative-office-144907464.webp"
            alt="Team Collaboration"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Our <span className="text-fuchsia-600">Core Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl shadow-md bg-white">
            <FaLaptopCode className="text-4xl text-fuchsia-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Web Engineering</h3>
            <p>
              React, Next.js, Tailwind, REST & GraphQL APIs with scalable
              architectures.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-white">
            <FaMobileAlt className="text-4xl text-fuchsia-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Mobile Applications</h3>
            <p>
              Cross-platform mobile apps using React Native with secure backend
              integrations.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-white">
            <FaDatabase className="text-4xl text-fuchsia-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Backend & Cloud</h3>
            <p>
              Node.js, Django, cloud deployment, authentication, and database
              optimization.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DIGITAL MARKETING ================= */}
    {/* ================= DIGITAL MARKETING ================= */}
<section className="bg-gray-100 py-16 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* Image */}
    <motion.img
      src="src/assets/digi.jpeg"  // replace with real image
      alt="Digital Marketing Strategy"
      className="rounded-2xl shadow-xl"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    />

    {/* Content */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-6">
        Land & Digital <span className="text-fuchsia-600">Marketing</span>
      </h2>

      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        We provide end-to-end land and digital marketing solutions designed
        to increase visibility, generate qualified leads, and drive
        measurable business growth. Our strategies are data-driven,
        audience-focused, and performance-oriented.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        From local land promotions to full-scale digital campaigns, we
        combine market research, creative execution, and analytics to
        ensure maximum ROI across every channel.
      </p>

      <ul className="space-y-3 text-gray-800 font-medium">
        <li>✔ SEO & Local Search Optimization</li>
        <li>✔ Social Media Marketing & Paid Ads</li>
        <li>✔ Google Ads, Meta Ads & Campaign Tracking</li>
        <li>✔ Landing Pages & Conversion Optimization</li>
        <li>✔ Analytics, Reporting & Performance Insights</li>
      </ul>
    </motion.div>

  </div>
</section>

    </div>
  );
};

export default Homepage;
