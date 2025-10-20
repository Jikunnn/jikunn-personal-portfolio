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
    className="flex items-center gap-2 text-sm text-slate-300 hover:text-slate-50 transition"
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
      aria-hidden
      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
        accent ?? "bg-purple-600"
      }`}
    >
      {name.charAt(0)}
    </div>
    <div className="text-sm text-slate-400">{name}</div>
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
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-100 leading-tight">
                <TypewriterEffect
                  as="span"
                  className="inline"
                  cursorClassName="bg-violet-400"
                  words={[
                    { text: "Hey! I'm " },
                    {
                      text: "Joshua James",
                      className:
                        "text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-fuchsia-400",
                    },
                  ]}
                />
              </h1>

              <div className="mt-8 md:mt-10 text-lg md:text-xl text-slate-300 leading-relaxed space-y-6">
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
                <span className="text-slate-600">|</span>
                <SocialLink href="#">
                  <span aria-hidden>🔗</span>
                  <span>LinkedIn</span>
                </SocialLink>
                <span className="text-slate-600">|</span>
                <SocialLink href="#">
                  <span aria-hidden>✦</span>
                  <span>X</span>
                </SocialLink>
                <span className="text-slate-600">|</span>
                <a
                  href="#about"
                  className="ml-2 text-sm text-violet-300 hover:text-violet-200"
                >
                  More about me →
                </a>
              </div>

              <div className="mt-14 md:mt-16 flex items-center gap-12">
                <CompanyBadge name="Stan" accent="bg-violet-600" />
                <div className="h-8 w-px bg-slate-700" />
                <CompanyBadge name="StorageBox" accent="bg-sky-600" />
                <div className="h-8 w-px bg-slate-700" />
                <CompanyBadge name="Hack Canada" accent="bg-amber-600" />
              </div>
            </div>
          </div>
          {/* Right area left empty to position content visually on the left */}
          <div className="hidden md:block md:col-span-6" aria-hidden />
        </div>
      </div>
    </section>
  );
};

export default Hero;
