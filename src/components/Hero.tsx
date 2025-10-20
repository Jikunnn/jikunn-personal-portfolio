"use client";
import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="w-full">
          <div className="whitespace-pre-wrap">
            <TypewriterEffect
              words={[{ text: "Hello there! Welcome to my portfolio!" }]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
