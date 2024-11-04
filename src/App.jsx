import React from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Slide from "./components/Slide";
import Image from "./components/Image";
import EasySteps from "./components/EasySteps";
import Fresh from "./components/Fresh";
import ErrorBoundaryWrapper from "./ErrorBoundary";  
import Onefruits from "./components/Onefruits";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <ErrorBoundaryWrapper>
        <Navbar />
        <Image />
        <EasySteps />
        <Slide />
        <Fresh />
        <Onefruits />
        <Contact />
      
        <Footer />
      
      </ErrorBoundaryWrapper>
    </div>
  );
}

export default App;
