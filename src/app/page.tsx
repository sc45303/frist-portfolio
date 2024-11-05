"use client";

import Hero from "./component/Hero";
import Contact from "./component/Contact";
import Project from "./component/Projects";
import About from "./component/About";
import Skills from "./component/Skills";
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
