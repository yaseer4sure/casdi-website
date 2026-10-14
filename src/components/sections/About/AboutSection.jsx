import React from "react";
import heroImg from "../../../assets/images/climate-hangout.jpg"; // 👈 change to the exact image you want
import About2 from "./About-2.jsx";
import About3 from "./About-3.jsx";

function AboutSection() {
  return (
    <section id="about" className="w-full bg-black">
      {/* HERO ABOUT (full-width image + dark overlay + centered text) */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background image */}
        <img
          src={heroImg} 
          alt="CASDI community"
          className="absolute inset-0 h-screen w-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          {/* Small italic line */}
          <p className="text-xl font-semibold italic text-white/90 drop-shadow sm:text-2xl md:text-3xl">
            Dialogue. Leadership. Action.
          </p>

          {/* Main title */}
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white drop-shadow sm:text-4xl md:text-5xl">
            Welcome to Climate Alaramma Sustainable Development Initiative
          </h2>

          {/* Paragraph (centered, constrained width, like the screenshot) */}
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-white/85 drop-shadow text-justify sm:text-base md:text-lg">
            We are a youth-led organization advancing climate resilience, environmental health, and social justice through community-rooted action. 
            Guided by global evidence from UN agencies, CASDI centers indigenous knowledge, local languages, and lived experience to co-create climate 
            solutions that strengthen resilience at the grassroots and inform global climate action.
          </p>
        </div>
      </div>
      <About2 />
      <About3 />
    </section>
  );
}

export default AboutSection;
