"use client";

import React, { useState } from "react";
import Image from "next/image";

export const NavigateAppSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Activity");

  const tabs = [
    {
      name: "Discover",
      description:
        "Explore all the investment Masters available on Blackwell Invest. Dive into their profiles and analyse their profitability at a glance.",
      image: "/images/phones/discover-phone.png",
    },
    {
      name: "Activity",
      description:
        "See the past trades made by the signals you are copying from the last 30 days or track their open positions. Monitor their strategy, and make informed decisions with timely updates of the trades shaping your portfolio.",
      image: "/images/phones/analysis-phone.png",
    },
    {
      name: "Trade",
      description:
        "Seamlessly trade oil CFDs, indices, and currency pairs with ease.",
      image: null,
    },
    {
      name: "Positions",
      description:
        "Easily track the status of all your trades and monitor your account metrics in real-time.",
      image: null,
    },
    {
      name: "Account",
      description:
        "Access detailed information about your trading account, monitor copier drawdown levels, assess your profitability, and keep track of your trade performance – all in one place!",
      image: null,
    },
  ];

  const activeTabData = tabs.find((tab) => tab.name === activeTab) || tabs[0];

  return (
    <section className="relative bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#040dbf] text-center mb-12">
          Navigate Our App in 5 Clicks
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === tab.name
                  ? "bg-[#040dbf] text-white shadow-lg scale-105"
                  : "bg-white text-[#040dbf] hover:bg-gray-100"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
          {/* Description */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-[#040dbf]">
              {activeTabData.name}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {activeTabData.description}
            </p>
          </div>

          {/* Phone Screenshot */}
          <div className="flex justify-center">
            {activeTabData.image ? (
              <Image
                src={activeTabData.image}
                alt={activeTabData.name}
                width={300}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            ) : (
              <div className="w-64 h-96 bg-gray-200 rounded-3xl flex items-center justify-center">
                <span className="text-gray-400">Screenshot placeholder</span>
              </div>
            )}
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="flex justify-center gap-4 mt-12 flex-wrap">
          <Image
            src="/images/badges/app-store.png"
            alt="App Store"
            width={150}
            height={50}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
          <Image
            src="/images/badges/google-play.png"
            alt="Google Play"
            width={150}
            height={50}
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </section>
  );
};
