



// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";

// const techIcons = [FaReact, FaNodeJs, FaPython, FaDatabase];

// const Contact = () => {
//   const [clicks, setClicks] = useState([]);

//   const handleClick = (e) => {
//     const newClick = { x: e.clientX, y: e.clientY, id: Date.now() };
//     setClicks((prev) => [...prev, newClick]);
//     setTimeout(() => {
//       setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
//     }, 1000);
//   };

//   return (
//     <div
//       id="contact"
//       className="min-h-screen bg-linear-to-br from-blue-600 via-purple-700 to-indigo-800 text-white flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden"
//       onClick={handleClick}
//     >

//       {/* 🔹 Tech Rain Animation */}
// {Array.from({ length: 14 }).map((_, i) => {
//   const Icon = techIcons[i % techIcons.length];
//   const randomX = Math.random() * 100;
//   const duration = 6 + Math.random() * 6;
//   return (
//     <motion.div
//       key={i}
//       className="absolute text-white text-3xl md:text-4xl opacity-80 drop-shadow-lg z-20"
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

//       {/* 🔹 Click Ripple Effect */}
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
      
//             <motion.h1
//               className="text-5xl md:text-6xl font-extrabold mb-2 text-center"
//               initial={{ opacity: 0, y: -80 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.2, ease: "easeOut" }}
//             >
//               <motion.span
//                 className="text-black inline-block"
//                 animate={{
//                   scale: [1, 1.2, 1],
//                   textShadow: ["0 0 5px ", "0 0 20px ", "0 0 5px "],
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   repeatType: "mirror",
//                 }}
//               >
//                 Our
//               </motion.span>{" "}
//               Contact
//             </motion.h1>
      


//       {/* 🔹 Contact Box */}
//       <motion.div
//         className="w-full md:w-3/4 lg:w-3/4 bg-white text-black rounded-2xl border-2 border-black shadow-2xl p-8 md:p-12 z-10"
//         initial={{ opacity: 0, y: 80 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >

//         <p className="text-center text-lg text-gray-700 mb-10 font-medium"><span className="text-black font-bold">Contact us </span>
//           “Let’s build something innovative together.”
//         </p>

//         <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Left Column */}
//           <div className="flex flex-col space-y-4">
//             <input
//               type="text"
//               placeholder="Name*"
//               className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//             <input
//               type="email"
//               placeholder="Email*"
//               className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//             <input
//               type="text"
//               placeholder="Organization*"
//               className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//             <input
//               type="text"
//               placeholder="Contact Number*"
//               className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Right Column */}
//           <div className="flex flex-col space-y-4">
//             <select className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400">
//               <option>Region*</option>
//               <option>Asia</option>
//               <option>Europe</option>
//               <option>America</option>
//               <option>Australia</option>
//             </select>

//             <select className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400">
//               <option>Inquiry Type*</option>
//               <option>General Inquiry</option>
//               <option>Business Partnership</option>
//               <option>Career Opportunities</option>
//               <option>Technical Support</option>
//             </select>

//             <textarea
//               placeholder="Message"
//               rows="5"
//               className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             ></textarea>
//           </div>
//         </form>

//         <div className="flex justify-center mt-8">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className=" text-black bg-fuchsia-600 font-bold px-8 py-3 rounded-xl border border-black hover:bg-fuchsia-800 transition-all"
//           >
//             Submit
//           </motion.button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Contact;



import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import toast from "react-hot-toast";

const techIcons = [FaReact, FaNodeJs, FaPython, FaDatabase];

const Contact = () => {
  const [clicks, setClicks] = useState([]);

  // ✅ form state (logic only)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    contact: "",
    region: "",
    inquiry: "",
    message: "",
  });

  const handleClick = (e) => {
    const newClick = { x: e.clientX, y: e.clientY, id: Date.now() };
    setClicks((prev) => [...prev, newClick]);
    setTimeout(() => {
      setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
    }, 1000);
  };

  // ✅ input handler (no UI change)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ submit validation
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, contact, region, inquiry } = formData;

    // ❌ validation (organization NOT required)
    if (!name || !email || !contact || !region || !inquiry) {
      toast.error("Please fill all required fields", { duration: 3000 });
      return;
    }

    // ✅ success
    toast.success(
      "Submitted successfully! Our team will contact you soon.",
      { duration: 4000 }
    );
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-linear-to-br bg-fuchsia-600 text-white flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden"
      onClick={handleClick}
    >
      {/* 🔹 Tech Rain Animation */}
      {Array.from({ length: 14 }).map((_, i) => {
        const Icon = techIcons[i % techIcons.length];
        return (
          <motion.div
            key={i}
            className="absolute text-white text-3xl md:text-4xl opacity-80 drop-shadow-lg z-20"
            style={{ left: `${Math.random() * 100}%`, top: "-15%" }}
            animate={{ y: ["0vh", "110vh"], rotate: [0, 360] }}
            transition={{
              duration: 6 + Math.random() * 6,
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

      {/* 🔹 Heading */}
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
         Contact
        </motion.span>{" "}
        Us
      </motion.h1>

      {/* 🔹 Contact Box */}
      <motion.div
        className="w-full md:w-3/4 lg:w-3/4 bg-white text-black rounded-2xl border-2 border-black shadow-2xl p-8 md:p-12 z-10"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-center text-lg text-gray-700 mb-10 font-medium">
          <span className="text-black font-bold">Contact us </span>
          “Let’s build something innovative together.”
        </p>

        {/* ✅ FORM (logic added only) */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left Column */}
          <div className="flex flex-col space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              name="email"
              type="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              name="organization"
              type="text"
              placeholder="Organization(Optional)"
              value={formData.organization}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              name="contact"
              type="text"
              placeholder="Contact Number*"
              value={formData.contact}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-4">
            <select
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Region*</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>America</option>
              <option>Australia</option>
            </select>

            <select
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Inquiry Type*</option>
              <option>General Inquiry</option>
              <option>Business Partnership</option>
              <option>Career Opportunities</option>
              <option>Technical Support</option>
            </select>

            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center mt-8">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" text-black bg-fuchsia-600 font-bold px-8 py-3 rounded-xl border border-black hover:bg-fuchsia-800 transition-all"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
