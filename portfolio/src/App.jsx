import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Loader } from "./components/Loader";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  
  return <div className={`min-h-[100vh] ${loading? "flex" : ""} items-center justify-center overflow-hidden`}>

    { loading != true ?

      <>
    <Navbar/>
    <Hero/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>
   </> :
    <Loader/>
    }
  </div>
  
}