"use client";

import React, { useState } from "react";
import Image from "next/image";

export const EasyAnalysisSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const traderCards = [
    {
      id: 1,
      name: "Master Trader 1",
      return: "+9,370.59%",
    },
    {
      id: 2,
      name: "Master Trader 2",
      return: "+4,837.08%",
    },
  ];

  return (
    <section className="relative bg-[#5666D8] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#01f2f2]">Easy</span>{" "}
            <span className="text-[#f2df79]">Analysis</span>
          </h2>
          <p className="text-white/90 text-lg mt-4 max-w-2xl mx-auto">
            Instant clarity on the Masters' profile. Get a snapshot of their
            trade history, profitability, risk, and portfolio all in one place.
          </p>
        </div>

        {/* Interactive Trader Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {traderCards.map((trader) => (
            <div
              key={trader.id}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Card Preview */}
              <div
                onClick={() =>
                  setExpandedCard(expandedCard === trader.id ? null : trader.id)
                }
                className="cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <Image
                  src="/images/analysis/function-2.png"
                  alt={`${trader.name} Preview`}
                  width={800}
                  height={200}
                  className="w-full"
                />
              </div>

              {/* Expanded Details */}
              {expandedCard === trader.id && (
                <div className="p-6 space-y-4 bg-gray-50">
                  {/* Profitability Stats */}
                  <Image
                    src="/images/analysis/function-1.png"
                    alt="Profitability"
                    width={800}
                    height={400}
                    className="w-full rounded-xl"
                  />

                  {/* Trade Statistics */}
                  <Image
                    src="/images/analysis/function-3.png"
                    alt="Trade Statistics"
                    width={800}
                    height={300}
                    className="w-full rounded-xl"
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Markets Traded */}
                    <Image
                      src="/images/analysis/function-4.png"
                      alt="Markets Traded"
                      width={400}
                      height={400}
                      className="w-full rounded-xl"
                    />

                    {/* Performance Graph */}
                    <Image
                      src="/images/analysis/function-5.png"
                      alt="Performance"
                      width={400}
                      height={400}
                      className="w-full rounded-xl"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24">
        <Image
          src="/images/dividers/wave-2.svg"
          alt=""
          fill
          className="object-cover object-top"
        />
      </div>
    </section>
  );
};
