"use client";

import React from "react";
import Image from "next/image";

export const FastMatchingSection: React.FC = () => {
  const filters = [
    "Spotlight",
    "Top Strategies",
    "Low Drawdown",
    "Medium Drawdown",
    "High Drawdown",
    "New Strategies",
  ];

  return (
    <section className="relative bg-[#3A53BA] py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* You can add phone mockup here if you have it */}
              <div className="bg-white rounded-3xl shadow-2xl p-4 aspect-[9/19]">
                {/* Placeholder for phone screenshot */}
                <div className="bg-gray-100 rounded-2xl h-full"></div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#01f2f2]">
              Fast Matching
            </h2>
            <p className="text-lg leading-relaxed text-white/90">
              Zero in on your ideal Master effortlessly. Sort by performance and
              drawdown levels or discover opportunities from new signals with
              our smart filters. Still can&apos;t decide? Simply head over to
              Spotlight for quality signals curated by us.
            </p>

            {/* Filter Pills */}
            <div className="space-y-3">
              {filters.map((filter) => (
                <div
                  key={filter}
                  className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/20 transition-colors cursor-pointer border-l-4 border-[#01f2f2]"
                >
                  <span className="text-white font-semibold">{filter}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24">
        <Image
          src="/images/dividers/wave-1.svg"
          alt=""
          fill
          className="object-cover object-top"
        />
      </div>
    </section>
  );
};
