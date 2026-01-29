import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      <Toaster position="top-right" />

      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;





// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

// import Homepage from "./Components/Homepage";
// import About from "./Components/About";
// import Navbar from "./Components/Navbar";
// import ScrollToTop from "./Components/ScrollToTop";
// import Project from "./Project";
// import Footer from "./Components/Footer";

// function App() {
//   return (
//     <Router>
//       {/* 🔔 Toast Container */}
//       <Toaster position="top-right" reverseOrder={false} />

//       <Navbar />
//       <ScrollToTop />

//       <Routes>
//         <Route path="/" element={<Project />} />
      
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;
