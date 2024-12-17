"use client";
import React, { useEffect } from "react";
import { useLoader } from "../context/LoaderContext";
import gsap from "gsap";

const Loader: React.FC = () => {
  const { loading } = useLoader(); // Récupère l'état global du loader

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

  // Afficher le loader seulement si `loading` est vrai
  if (!loading) return null;

  return (
    <div className="loader-container fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold text-gray-600">
        Chargement en cours...
      </p>
    </div>
  );
};

export default Loader;
