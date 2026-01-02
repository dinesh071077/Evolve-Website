


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';
import Project from './Project';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Project />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


// // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Homepage from "./Components/Homepage";
// import About from "./Components/About";
// import Project from "./Project";

// // ScrollToTop component defined inside App.jsx
// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   // useLayoutEffect runs before painting the screen -> avoids flicker
//   React.useLayoutEffect(() => {
//     // immediate jump to top (safe)
//     window.scrollTo(0, 0);

//     // also try a smooth scroll shortly after to handle layout changes
//     const t = setTimeout(() => {
//       try {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       } catch (e) {
//         // some browsers may not support smooth behavior; ignore errors
//       }
//     }, 60);

//     return () => clearTimeout(t);
//   }, [pathname]);

//   return null;
// };

// function App() {
//   return (
//     <Router>
//       {/* Put ScrollToTop inside Router so useLocation works */}
//       <ScrollToTop />

     

//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
