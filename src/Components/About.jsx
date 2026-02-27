
  

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";

// const techIcons = [FaReact, FaNodeJs, FaPython, FaDatabase];

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
//     <div
//       id="about"
//       className="min-h-screen bg-linear-to-br bg-fuchsia-600 text-white flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden"
//       onClick={handleClick}
//     >
//       {/* 🔹 Tech Rain Animation */}
//      {/* 🔹 Tech Rain Animation (fixed + visible + responsive) */}
// {Array.from({ length: 14 }).map((_, i) => {
//   const Icon = techIcons[i % techIcons.length];
//   const randomX = Math.random() * 100;
//   const duration = 6 + Math.random() * 6;
//   return (
//     <motion.div
//       key={i}
//       className="absolute text-shadow-amber-100 text-3xl md:text-4xl opacity-80 drop-shadow-lg z-20"
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


//       {/* 🔹 Click Glow Animation */}
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

//       {/* 🔹 Animated Heading */}
//       <motion.h1
//         className="text-5xl md:text-6xl font-extrabold mb-2 text-center"
//         initial={{ opacity: 0, y: -80 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, ease: "easeOut" }}
//       >
//         <motion.span
//           className="text-black inline-block"
//           animate={{
//             scale: [1, 1.2, 1],
//             textShadow: ["0 0 5px ", "0 0 20px ", "0 0 5px "],
//           }}
//           transition={{
//             duration: 1.5,
//             repeat: Infinity,
//             repeatType: "mirror",
//           }}
//         >
//           About
//         </motion.span>{" "}
//         Evolve
//       </motion.h1>

// <div className="w-full mt-4 sm:mt-6 px-3 sm:px-6">
//   <div className="bg-white rounded-2xl h-10 sm:h-12 md:h-14 flex items-center justify-center">
    
//     {/* Mobile & Small screens (2 times) */}
//     <p className="
//       text-black font-bold text-sm sm:text-base md:hidden
//       text-center leading-tight
//     ">
//       🚀 Innovate • Build • Evolve 🚀 Innovate • Build • Evolve 🚀
//     </p>

//     {/* Desktop & Large screens (3 times) */}
//     <p className="
//       hidden md:block text-black font-bold
//       md:text-lg lg:text-xl
//       text-center whitespace-nowrap
//     ">
//       🚀 Innovate • Build • Evolve 🚀 Innovate • Build • Evolve 🚀 Innovate • Build • Evolve 🚀
//     </p>

//   </div>
// </div>



//       {/* 🔹 About Content */}
//       <motion.div
//         className="max-w-4xl text-center leading-relaxed text-lg font-medium mt-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//       >
//         <p className="mb-6">
//           At <span className="text-black font-bold">EvolveSolution</span>, we
//           believe in blending innovation and intelligence to build digital
//           solutions that make a real impact. Our team of developers, designers,
//           and strategists are dedicated to transforming ideas into powerful and
//           user-friendly applications.
//         </p>

//         <p className="mb-6">
//           We specialize in{" "}
//           <span className="text-black font-semibold">Software Development</span>,
//           <span className="text-black font-semibold"> AI-Driven Solutions</span>, and{" "}
//           <span className="text-black font-semibold">Startup-Ready Platforms</span>.
//           From ideation to deployment, we focus on creating scalable, secure,
//           and elegant systems that empower businesses to grow.
//         </p>

//         <p className="mb-6">
//           Our mission is simple — to make technology seamless, smart, and
//           human-centered. Whether it’s a web app, mobile experience, or
//           enterprise solution, EvolveSoluion is your trusted partner in innovation.
//         </p>
//       </motion.div>
//      {/* 🔹 Project Section */}
// <motion.div
//   className="mt-12 w-full max-w-3xl bg-white text-black rounded-2xl p-5 shadow-lg border border-purple-200"
//   initial={{ opacity: 0, y: 40 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8 }}
// >
//   <div className="flex items-center justify-between">
//     <h3 className="text-xl font-bold text-purple-700">
//       Project 1: Dating App
//     </h3>
//     <span className="px-3 py-1 text-sm font-semibold rounded-full bg-purple-100 text-purple-700">
//       Ongoing
//     </span>
//   </div>

//   <p className="mt-3 text-gray-700 text-sm">
//     A modern dating & friendship app with chat, audio/video calls and
//     location-based user discovery.
//   </p>
// </motion.div>

//       {/* 🔹 Floating Illustration
//       <motion.img
//         src="src/assets/undraw_lightbulb-moment_16av.png"
//         alt="Innovation"
//         className="mt-10   w-40  md:w-65 opacity-90 rounded-2xl"
//         initial={{ x: -500, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{
//           duration: 1.5,
//           ease: "easeOut",
//         }}
//       /> */}
//     </div>
//   );
// };

// export default About;


import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";

/* IMPORT YOUR IMAGES */
import aboutPic1 from "../assets/about1.jpg";
import aboutPic2 from "../assets/about2.jpg";

const techIcons = [FaReact, FaNodeJs, FaPython, FaDatabase];

const About = () => {
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

  return (
    <div
      id="about"
      onClick={handleClick}
      className="
      min-h-screen
      bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] 
      text-white
      flex flex-col
      justify-center
      items-center
      px-4 sm:px-6 md:px-10
      py-16 sm:py-20
      relative
      overflow-hidden
    "
    >
      {/* ================= TECH RAIN ================= */}
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

      {/* ================= CLICK GLOW ================= */}
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

      {/* ================= HEADING ================= */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl  font-extrabold text-center z-20 p-3"
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
          About
        </motion.span>{" "}
        Evolve
      </motion.h1>

      {/* ================= TAGLINE ================= */}
      <div className="w-full max-w-4xl mt-6 z-20">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl py-3 px-4 text-center border border-white/20">
          <p className="text-sm sm:text-base md:text-lg font-semibold text-cyan-300">
            🚀 Innovate • Build • Evolve 🚀 Innovate • Build • Evolve 🚀
          </p>
        </div>
      </div>

      {/* ================= ABOUT TEXT ================= */}
      <motion.div
        className="max-w-4xl text-center text-base sm:text-lg leading-relaxed mt-8 z-20 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="mb-4">
          At <span className="text-cyan-400 font-bold">EvolveSolution</span>,
          we create modern digital products that combine innovation,
          performance, and scalability.
        </p>

        <p className="mb-4">
          We specialize in software development, AI solutions, and startup
          platforms that help businesses grow faster and smarter.
        </p>

        <p>
          Our mission is to transform ideas into powerful digital experiences.
        </p>
      </motion.div>

      {/* ================= IMAGE SECTION ================= */}
      <section className="w-full max-w-6xl mt-16 space-y-16 z-20">

        {/* IMAGE 1 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">

          <motion.img
            src={aboutPic1}
            alt="Development Team"
            className="w-full rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4">
              Expert Development Team
            </h3>

            <p className="text-gray-300">
              Our expert development team is the backbone of EvolveSolution, bringing together deep technical expertise, creativity, and a passion for innovation. We specialize in modern technologies such as React, Node.js, Python, and cloud-based architectures, enabling us to build high-performance, scalable, and secure applications tailored to business needs.

              Our developers follow industry best practices including clean code principles, modular architecture, code reviews, and agile methodologies to ensure every product we deliver meets the highest standards of quality and reliability. From frontend user interfaces to backend systems and database management, our team ensures seamless integration and optimal performance across all layers of development.

              We focus on creating solutions that are not only technically strong but also user-friendly, future-ready, and business-driven. Whether it’s a startup launching its first product or an enterprise scaling its digital infrastructure, our team is committed to delivering solutions that drive growth, efficiency, and long-term success.

              At EvolveSolution, we don’t just write code — we build innovative digital experiences that empower businesses to evolve and lead in the modern technological world.
            </p>
          </motion.div>

        </div>

        {/* IMAGE 2 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">

          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4">
              Smart Digital Solutions
            </h3>

            <p className="text-gray-300">
                At EvolveSolution, we deliver enterprise-grade digital solutions that combine the power of Artificial Intelligence, cloud computing, and modern web technologies to help organizations transform, innovate, and lead in a rapidly evolving digital landscape. Our approach focuses on building intelligent, data-driven platforms that enhance operational efficiency, improve decision-making, and create meaningful user experiences.

                We leverage advanced technologies such as AI/ML models, scalable cloud infrastructure, microservices architecture, and secure APIs to develop systems that are highly reliable, flexible, and future-ready. Our solutions are designed to seamlessly integrate with existing business ecosystems while ensuring maximum performance, security, and scalability.

                From enterprise platforms and SaaS applications to custom digital ecosystems, we prioritize performance optimization, security compliance, and long-term scalability. Our team works closely with clients to understand their strategic goals and deliver tailored solutions that drive measurable business value and sustainable growth.

                At EvolveSolution, we go beyond development — we create intelligent digital foundations that empower enterprises to innovate faster, operate smarter, and scale with confidence in the digital era.
            </p>
          </motion.div>

          <motion.img
            src={aboutPic2}
            alt="Digital Solutions"
            className="w-full rounded-2xl shadow-xl order-1 md:order-2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />

        </div>

      </section>

      {/* ================= PROJECT ================= */}
      <motion.div
        className="
        mt-16
        w-full
        max-w-3xl
        bg-white/10
        backdrop-blur-lg
        border border-white/20
        rounded-2xl
        p-6
        z-20
      "
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-cyan-400">
            Dating App Project
          </h3>

          <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
            Ongoing
          </span>
        </div>

        <p className="mt-3 text-gray-300">
          A modern dating and friendship platform with chat, audio/video
          calling, and smart user matching system.
        </p>
      </motion.div>

    </div>
  );
};

export default About;