"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { TiLocationArrow } from "react-icons/ti";
import { useLoader } from "../context/LoaderContext";
import Button from "./Button";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Référence à la vidéo
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // État pour suivre le chargement de la vidéo
  const { setLoading } = useLoader(); // Utiliser le contexte pour gérer le chargement global
  const router = useRouter();

  const handleWatchTrailer = () => {
    router.push(
      "https://www.youtube.com/playlist?list=PLaRNoqxybhEsXNLfQJ9MIMWCV9ZcUWNaY"
    );
  };

  // Vérifie si la vidéo est chargée
  useEffect(() => {
    const videoElement = videoRef.current;

    const handleCanPlayThrough = () => {
      setIsVideoLoaded(true);
    };

    if (videoElement) {
      videoElement.addEventListener("canplaythrough", handleCanPlayThrough);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener(
          "canplaythrough",
          handleCanPlayThrough
        );
      }
    };
  }, []);

  // Met à jour l'état du loader global
  useEffect(() => {
    if (isVideoLoaded) {
      setLoading(false);
    }
  }, [isVideoLoaded, setLoading]);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <video
          ref={videoRef}
          src="videos/hero-1.mp4" // Remplace par le chemin de votre vidéo
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              lo<b>u</b>
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Entre dans l&apos;Univers de la <br /> Meneuse Belge
            </p>
            <Button
              id="watch-trailer"
              title="Watch Lou Highlights"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-blue-800 flex-center gap-1 text-black"
              onClick={handleWatchTrailer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
