


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Homepage from './Components/Homepage';
// import About from './Components/About';
// import Navbar from './Components/Navbar';
// import ScrollToTop from './Components/ScrollToTop';
// import Project from './Project';
// import Footer from './Components/Footer';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <ScrollToTop />
      
//       <Routes>
//         <Route path="/" element={<Project />} />
//         {/* <Route path="/about" element={<About />} /> */}
//       </Routes>
//       <Footer/>
//     </Router>
//   );
// }

// export default App;





import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import Project from "./Project";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      {/* 🔔 Toast Container */}
      <Toaster position="top-right" reverseOrder={false} />

      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Project />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
