import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaBriefcase,
  FaUsers,
  FaRocket,
  FaHeart,
} from "react-icons/fa";

const techIcons = [FaReact, FaNodeJs, FaPython, FaDatabase];

const jobs = [
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Remote / Chennai",
    description:
      "Build modern UI using React, Tailwind, and modern frontend tools.",
  },
  {
    title: "Backend Developer",
    type: "Full Time",
    location: "Remote",
    description:
      "Develop scalable APIs using Node.js, Python, and databases.",
  },
  {
    title: "Full Stack Developer",
    type: "Full Time",
    location: "Remote",
    description:
      "Work on complete product lifecycle from frontend to backend.",
  },
  {
    title: "React Native Developer",
    type: "Intern / Full Time",
    location: "Remote",
    description:
      "Build mobile apps with React Native and integrate APIs.",
  },
];

const benefits = [
  {
    icon: FaRocket,
    title: "Fast Growth",
    description: "Work on real-world scalable projects and grow fast.",
  },
  {
    icon: FaUsers,
    title: "Great Team",
    description: "Collaborate with skilled and passionate developers.",
  },
  {
    icon: FaBriefcase,
    title: "Flexible Work",
    description: "Remote-friendly and flexible working hours.",
  },
  {
    icon: FaHeart,
    title: "Healthy Culture",
    description: "Positive, supportive, and innovation-driven culture.",
  },
];

const Career = () => {
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
      onClick={handleClick}
      className="
      min-h-screen
      bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81]
      text-white
      flex flex-col
      items-center
      px-4 sm:px-6 md:px-10
      pt-24 sm:pt-28 pb-12 sm:pb-20
      relative
      overflow-hidden
    "
    >
      {/* TECH RAIN */}
      {Array.from({ length: 14 }).map((_, i) => {
        const Icon = techIcons[i % techIcons.length];
        const randomX = Math.random() * 100;
        const duration = 6 + Math.random() * 6;

        return (
          <motion.div
            key={i}
            className="absolute text-3xl md:text-4xl opacity-70"
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
          className="absolute w-10 h-10 rounded-full bg-cyan-400 opacity-60"
          style={{
            top: click.y - 20,
            left: click.x - 20,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1 }}
        />
      ))}

      {/* HEADING */}
      <motion.h1
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center z-20 px-2"
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-cyan-400">Careers</span> at Evolve
      </motion.h1>

      {/* TAGLINE */}
      <div className="w-full max-w-4xl mt-6 z-20">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl py-3 px-4 text-center border border-white/20">
          <p className="text-sm sm:text-base md:text-lg font-semibold text-cyan-300">
            Join us and build the future 🚀
          </p>
        </div>
      </div>

      {/* WHY JOIN */}
      <section className="max-w-6xl w-full mt-16 z-20">

        <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">
          Why Join EvolveSolution
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="
                bg-white/10
                backdrop-blur-lg
                border border-white/20
                p-6
                rounded-xl
                text-center
                hover:bg-white/20
                transition
              "
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="text-3xl text-cyan-400 mx-auto mb-3" />

                <h3 className="font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* JOB OPENINGS */}
      <section className="max-w-5xl w-full mt-16 z-20">

        <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">
          Open Positions
        </h2>

        <div className="space-y-4 sm:space-y-6">

          {jobs.map((job, index) => (
            <motion.div
              key={index}
              className="
              bg-white/10
              backdrop-blur-lg
              border border-white/20
              p-6
              rounded-xl
            "
              whileHover={{ scale: 1.02 }}
            >

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">

                <div>
                  <h3 className="text-xl font-bold text-cyan-400">
                    {job.title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {job.type} • {job.location}
                  </p>
                </div>

               <a
  href="mailto:evolvesolutionspvtltd@gmail.com?subject=Job Application - Frontend Developer&body=Hello EvolveSolution,%0D%0A%0D%0AI am interested in applying for the Frontend Developer position.%0D%0A%0D%0APlease find my details below:%0D%0AName:%0D%0APhone:%0D%0AExperience:%0D%0A%0D%0AResume:%0D%0A%0D%0AThank you."
  className="
  bg-cyan-500 hover:bg-cyan-400
  px-5 py-2 rounded-lg font-semibold transition
  text-black
  inline-block
"
>
  Apply Now
</a>

              </div>

              <p className="mt-3 text-gray-300">
                {job.description}
              </p>

            </motion.div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <motion.div
        className="
        mt-12 sm:mt-16
        bg-white/10
        backdrop-blur-lg
        border border-white/20
        p-6 sm:p-8
        rounded-xl
        text-center
        max-w-3xl
        w-full
        z-20
      "
      >
        <h3 className="text-2xl font-bold text-cyan-400">
          Don't see a suitable role?
        </h3>

        <p className="text-gray-300 mt-2">
          Send your resume to evolvesolutions@gmail.com
        </p>

        <a href="/contact"> <button
          className="
          mt-4
          bg-cyan-500
          hover:bg-cyan-400
          px-6
          py-3
          rounded-lg
          font-semibold
        "
        >
          Contact Us
        </button></a>

      </motion.div>

    </div>
  );
};

export default Career;