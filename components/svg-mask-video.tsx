"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import StarSvg from "./star-svg";

gsap.registerPlugin(ScrollTrigger);

const SVGMaskVideo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to("svg", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${window.innerHeight * 1.5}`,
          pin: false,
          scrub: true,
        },
        scale: 9,
        ease: "none",
      });
    },
    { scope: containerRef },
  );
  return (
    <main className="sticky top-0 z-0 overflow-hidden">
      <div ref={containerRef}>
        <div className="h-screen w-full">
          <video
            autoPlay
            muted
            playsInline
            loop
            className="absolute inset-0 w-full h-full object-cover"
            src="/videoplayback.mp4"
          />

          <div className="h-screen bg-white relative z-10 grid place-content-center mix-blend-screen ">
            <StarSvg />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SVGMaskVideo;
