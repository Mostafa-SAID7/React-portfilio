import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
export default function App() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection: bg-white selection:text-cyan-800">
        <div className="fixed top-0 -z-10 h-full w-full ">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>{" "}
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies/>
          <Experiences/>
          <Projects/>
          <Contact/>
        </div>
      </div>
    </>
  );
}
