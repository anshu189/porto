"use client";

import React from 'react';
import Hero from './Home/Hero';
import About from './Home/AboutMe';
import Projects from './Home/Projects';
import Contact from './Home/Contact';
const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
