"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRegisterClick,
}) => {
  return (
    <section className="relative bg-[#5666D8] py-20 overflow-hidden">
      {/* Background decorative lines */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/dividers/wave-3.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Phone Mockup */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-md">
              <Image
                src="/images/phones/hero-phone.png"
                alt="Blackwell Invest App"
                width={400}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#01f2f2]">
              COPY TRADING
            </h1>
            <h2 className="text-3xl md:text-4xl font-light text-white">
              with Blackwell Invest
            </h2>

            {/* App Store Badges */}
            <div className="flex gap-4 flex-wrap">
              <Image
                src="/images/badges/app-store.png"
                alt="Download on App Store"
                width={150}
                height={50}
                className="cursor-pointer hover:scale-105 transition-transform"
              />
              <Image
                src="/images/badges/google-play.png"
                alt="Get it on Google Play"
                width={150}
                height={50}
                className="cursor-pointer hover:scale-105 transition-transform"
              />
            </div>

            {/* Description */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
              <h3 className="text-2xl font-bold text-[#f2df79]">
                Choose & Trade
                <br />
                Ready-To-Go Strategies
              </h3>
              <p className="text-white/90 leading-relaxed">
                Browse and copy hundreds of investment strategies developed by
                master traders! Whether you are a pro or beginner, you can now
                trade quicker and more confidently.
              </p>

              {/* Trading Categories */}
              <div className="flex flex-wrap gap-3">
                {["Forex", "Precious Metals", "Oil", "Indices"].map(
                  (category) => (
                    <span
                      key={category}
                      className="bg-[#040dbf] px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      {category}
                    </span>
                  )
                )}
              </div>

              {/* Register Button */}
              <Button
                variant="primary"
                onClick={onRegisterClick}
                className="w-full md:w-auto"
              >
                Register Now
              </Button>

              {/* Disclaimer */}
              <p className="text-xs text-white/70 italic">
                When you invest, your capital is at risk. Be prudent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
