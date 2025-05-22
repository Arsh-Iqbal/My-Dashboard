"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProfileSection() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 py-6 md:py-10"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 space-y-4 md:space-y-6">
        <div className="flex flex-col items-center justify-center space-y-3 md:space-y-4 mt-16">
          <div
            onClick={() => setIsZoomed(!isZoomed)}
            className={`cursor-pointer rounded-full border-4 border-primary shadow-md overflow-hidden transition-transform duration-300 ${
              isZoomed ? "scale-150 z-50" : "scale-100"
            }`}
            style={{ width: 120, height: 120 }}
          >
            <Image
              src="/profile/w3.jpeg"
              alt="Profile"
              width={120}
              height={120}
              className="object-cover rounded-full"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Arsh
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Iqbal
            </span>
          </h1>
          <p className="text-center max-w-2xl mx-auto text-muted-foreground opacity-100 px-2 md:px-0">
            I’m passionate about developing well-rounded web applications that
            deliver excellent user experiences. As a full-stack developer, I
            handle both the front-end and back-end, ensuring seamless
            functionality and polished design from start to finish.
          </p>
          <div className="opacity-0 animate-fade-in-delay-4 text-muted-foreground text-sm md:text-base space-y-1">
            <p>
              Email:{" "}
              <a
                href="mailto:iqbalarsh54@gmil.com"
                className="text-primary hover:underline"
              >
                iqbalarsh54@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="#" className="text-primary hover:underline">
                8090010660
              </a>
            </p>
          </div>
          <div className="pt-2 md:pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button px-6 py-3">
              View My Work
            </a>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-8 animate-bounce">
            <span className="text-xs md:text-sm text-muted-foreground mb-1 md:mb-2">
              Scroll
            </span>
            <div className="w-4 h-4 border-b-2 border-r-2 rotate-45 border-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
