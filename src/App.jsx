// import Hero from "./components/Hero";
// import Cards from "./components/Cards";
// import Facts from "./components/Facts";
// import Features from "./components/Features";
// import Courses from "./components/Courses";
// import Pricing from "./components/Pricing";
// import Newsletter from "./components/Newsletter";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Classes from './components/Classes'
// import AboutUs from "./components/Pages/Aboutus";

import Aos from "aos";
import "aos/dist/aos.css";

// function App() {
//   Aos.init({
//     duration: 1400,
//     offset: 100,
//     once: true,
//   });
//   return (
//     <div className="overflow-hidden">
//       <Hero />
//       <Cards />
//       <Facts />
//       <Features />
//       <Courses />
//       <Classes />
//       <Newsletter />
//       <Contact />
//       <Footer />

//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
// import Contact from "./Pages/Contact";
import Schedule from "./Pages/Schedule";
import YogaClasses from "./Pages/Yogaclass";
import Normalcls from "./Pages/Normalcls";
import Privatecls from "./Pages/Privatecls";
import Pilates from './components/Services/Pilates';
import Kidsyoga from "./components/Services/Kidsyoga";
import YogaTherapy from "./components/Services/YogaTherapy";
import Soundhealing from "./components/Services/Soundhealing";
import Trainingcourses from "./components/Services/Trainingcourses";

const App = () => {
  Aos.init({
    duration: 1400,
    offset: 100,
    once: true,
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/yogaclass" element={<YogaClasses />} />
        <Route path="/normalclass" element={< Normalcls/>} />
        <Route path="/privateclass" element={< Privatecls/>} />
        <Route path="/pilates" element={< Pilates/>} />
        <Route path="/kidsyoga" element={< Kidsyoga/>} />
        <Route path="/yogatherapy" element={< YogaTherapy/>} />
        <Route path="/soundhealing" element={< Soundhealing/>} />
        <Route path="/trainingcourse" element={< Trainingcourses/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
