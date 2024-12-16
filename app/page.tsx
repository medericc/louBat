"use client";
import React from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  const handleContentLoaded = () => {
    console.log("Content loaded!"); // Si vous voulez suivre les événements de chargement
  };

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero onLoaded={handleContentLoaded} />
      <About />
      <Features onLoaded={handleContentLoaded} />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}
