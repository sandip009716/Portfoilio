import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/MyProject";
import TackStack from "./components/TackStack";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from 'react-hot-toast';
// import Certification from "./components/Certification";
function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <TackStack />
        <Contact />
        <Footer />
        {/* <Certification/> */}
      </div>
     <Toaster />
     
    </>
  );
}

export default App;
