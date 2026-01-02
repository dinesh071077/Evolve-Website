// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";

// const techIcons = [FaReact, FaNodeJs, FaPython, FaDatabase];

// const Contact = () => {
//   const [clicks, setClicks] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     number: "",
//     message: "",
//   });

//   const handleClick = (e) => {
//     const newClick = { x: e.clientX, y: e.clientY, id: Date.now() };
//     setClicks((prev) => [...prev, newClick]);
//     setTimeout(() => {
//       setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
//     }, 1000);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Thank you ${formData.name}, your message has been submitted!`);
//     setFormData({ name: "", email: "", number: "", message: "" });
//   };

//   return (
//     <div
//       id="contact"
//       className="min-h-screen bg-linear-to-br from-blue-600 via-purple-700 to-indigo-800 flex justify-center items-center relative overflow-hidden px-4 py-20"
//       onClick={handleClick}
//     >
//       {/* 🟡 Tech Rain Animation */}
//       {Array.from({ length: 14 }).map((_, i) => {
//         const Icon = techIcons[i % techIcons.length];
//         const randomX = Math.random() * 100;
//         const duration = 6 + Math.random() * 6;
//         return (
//           <motion.div
//             key={i}
//             className="absolute text-yellow-300 text-3xl md:text-4xl opacity-80 drop-shadow-lg z-20"
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
//       {/* 🟡 Click Ripple */}
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

//       {/* 🟡 Contact Form Container */}
//       <motion.div
//         className="w-[90%] md:w-[75%] bg-white text-black rounded-3xl shadow-2xl p-8 md:p-12 relative z-10"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         {/* Title */}
//         <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
//           <span className="text-yellow-500">Contact</span> Us
//         </h1>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block font-semibold mb-2 text-gray-800">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               placeholder="Enter your name"
//             />
//           </div>

//           <div>
//             <label className="block font-semibold mb-2 text-gray-800">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div>
//             <label className="block font-semibold mb-2 text-gray-800">
//               Phone Number
//             </label>
//             <input
//               type="text"
//               name="number"
//               value={formData.number}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               placeholder="Enter your phone number"
//             />
//           </div>

//           <div>
//             <label className="block font-semibold mb-2 text-gray-800">
//               Message
//             </label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               rows="4"
//               className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               placeholder="Type your message..."
//             ></textarea>
//           </div>

//           <motion.button
//             type="submit"
//             className="w-full py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Submit
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Contact;






import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";

const techIcons = [FaReact, FaNodeJs, FaPython, FaDatabase];

const Contact = () => {
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
      id="contact"
      className="min-h-screen bg-linear-to-br from-blue-600 via-purple-700 to-indigo-800 text-white flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden"
      onClick={handleClick}
    >

      {/* 🔹 Tech Rain Animation */}
{Array.from({ length: 14 }).map((_, i) => {
  const Icon = techIcons[i % techIcons.length];
  const randomX = Math.random() * 100;
  const duration = 6 + Math.random() * 6;
  return (
    <motion.div
      key={i}
      className="absolute text-white text-3xl md:text-4xl opacity-80 drop-shadow-lg z-20"
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

      {/* 🔹 Click Ripple Effect */}
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
                Our
              </motion.span>{" "}
              Contact
            </motion.h1>
      


      {/* 🔹 Contact Box */}
      <motion.div
        className="w-full md:w-3/4 lg:w-3/4 bg-white text-black rounded-2xl border-2 border-black shadow-2xl p-8 md:p-12 z-10"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <p className="text-center text-lg text-gray-700 mb-10 font-medium"><span className="text-black font-bold">Contact us </span>
          “Let’s build something innovative together.”
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email*"
              className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              placeholder="Organization*"
              className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              placeholder="Contact Number*"
              className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-4">
            <select className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <option>Region*</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>America</option>
              <option>Australia</option>
            </select>

            <select className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <option>Inquiry Type*</option>
              <option>General Inquiry</option>
              <option>Business Partnership</option>
              <option>Career Opportunities</option>
              <option>Technical Support</option>
            </select>

            <textarea
              placeholder="Message"
              rows="5"
              className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>
        </form>

        <div className="flex justify-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=" text-black bg-fuchsia-600 font-bold px-8 py-3 rounded-xl border border-black hover:bg-fuchsia-800 transition-all"
          >
            Submit
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
