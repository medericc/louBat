"use client";
import React, { useEffect } from "react";
import { useLoader } from "../context/LoaderContext";
import gsap from "gsap";

const Loader: React.FC = () => {
  const { loading } = useLoader(); // Récupération de l'état du loader

  useEffect(() => {
    if (loading) {
      // Animation GSAP quand le loader apparaît
      gsap.fromTo(
        ".loader-container",
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );
    } else {
      // Animation GSAP quand le loader disparaît
      gsap.to(".loader-container", { opacity: 0, duration: 0.5 });
    }
  }, [loading]);

  // Afficher le loader seulement si `loading` est actif
  if (!loading) return null;

  return (
    <div className="loader-container fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* SVG du chat avec animation */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="64"
        height="64"
        className="animate-bounce"
      >
        {/* Chat SVG - un visage de chat simple */}
        <circle cx="32" cy="32" r="28" fill="#ffcc00" />
        <circle cx="24" cy="24" r="4" fill="#000" />
        <circle cx="40" cy="24" r="4" fill="#000" />
        <path
          d="M22,40 Q32,50 42,40"
          stroke="#000"
          strokeWidth="2"
          fill="transparent"
        />
        <path
          d="M32,32 Q35,35 40,35 Q45,32 42,30 Q38,28 32,32"
          fill="#fff"
        />
      </svg>
      {/* Texte */}
      <p className="mt-4 text-lg font-semibold text-gray-600">
        Chargement en cours...
      </p>
    </div>
  );
};

export default Loader;
