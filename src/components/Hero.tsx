"use client";
import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";

const SocialLink: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-sm text-ctp-subtext1 hover:text-ctp-text transition-colors duration-200"
  >
    {children}
  </a>
);

const CompanyBadge: React.FC<{ name: string; accent?: string }> = ({
  name,
  accent,
}) => (
  <div className="flex items-center gap-3">
    <div
      aria-hidden={true}
      className={`w-10 h-10 rounded-full flex items-center justify-center text-ctp-base font-semibold ${
        accent ?? "bg-ctp-mauve"
      }`}
    >
      {name.charAt(0)}
    </div>
    <div className="text-sm text-ctp-subtext0">{name}</div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-full mx-auto px-2  md:px-12 lg:px-2 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left area: positioned using 12-column grid to follow rule of thirds */}
          <div className="md:col-start-2 md:col-span-5 flex items-start">
            <div className="w-full max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-extrabold text-ctp-text leading-tight">
                <TypewriterEffect
                  as="span"
                  className="inline"
                  cursorClassName="bg-ctp-mauve"
                  words={[
                    { text: "Hey! I'm " },
                    {
                      text: "Joshua James",
                      className:
                        "text-transparent bg-clip-text bg-linear-to-r from-ctp-mauve to-ctp-pink",
                    },
                  ]}
                />
              </h1>

              <div className="mt-8 md:mt-10 text-lg md:text-xl text-ctp-subtext1 leading-relaxed space-y-6">
                <p>
                  A Computer Science student specializing in Software
                  Engineering. I've built impactful software for companies like
                  GLOBALTEK PH, creating systems that have saved over 200k USD
                  annually and doubled development efficiency. My work has also
                  earned the Best Thesis and People's Choice Award for an
                  ML-powered application.
                </p>

                <p>
                  I focus on full-stack development, AI-powered systems, and
                  test automation. I enjoy leading the development of complex
                  projects, from AI chatbots to automation frameworks built from
                  the ground up. I enjoy leveraging cloud services like AWS and
                  CI/CD to build and deploy production-ready solutions.
                </p>
              </div>

              <div className="mt-10 md:mt-12 flex items-center gap-8">
                <SocialLink href="#">
                  <span aria-hidden>🐙</span>
                  <span>GitHub</span>
                </SocialLink>
                <span className="text-ctp-overlay0">|</span>
                <SocialLink href="#">
                  <span aria-hidden>🔗</span>
                  <span>LinkedIn</span>
                </SocialLink>
                <span className="text-ctp-overlay0">|</span>
                <SocialLink href="#">
                  <span aria-hidden>✦</span>
                  <span>X</span>
                </SocialLink>
                <span className="text-ctp-overlay0">|</span>
                <a
                  href="#about"
                  className="ml-2 text-sm text-ctp-mauve hover:text-ctp-lavender transition-colors duration-200"
                >
                  More about me →
                </a>
              </div>

              <div className="mt-14 md:mt-16 flex items-center gap-12">
                <CompanyBadge name="Stan" accent="bg-ctp-mauve" />
                <div className="h-8 w-px bg-ctp-surface1" />
                <CompanyBadge name="StorageBox" accent="bg-ctp-blue" />
                <div className="h-8 w-px bg-ctp-surface1" />
                <CompanyBadge name="Hack Canada" accent="bg-ctp-yellow" />
              </div>
            </div>
          </div>
          <div className="hidden md:block md:col-span-6" aria-hidden={true}>
            <div className="relative h-96 md:h-[540px] lg:h-[620px] ml-5 flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl" />
              <img
                src="/Jikunn.jpg"
                alt="Portrait of Jikunn"
                className="relative z-10 max-h-full w-auto rounded-2xl object-cover shadow-2xl"
              />

              <div className="pointer-events-none absolute inset-0 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
