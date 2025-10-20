"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const WhyChooseSection: React.FC = () => {
  const features = [
    {
      icon: "/images/icons/regulated.png",
      title: "Regulated",
      description:
        "The copy trading platform is regulated. Our technology partner is regulated. And so are we, as a brokerage. We operate under strict compliance because your trust and peace of mind are everything.",
    },
    {
      icon: "/images/icons/zero-commission.png",
      title: "0 Commissions",
      description:
        "When investing, the small margins matter. Blackwell Invest offers 0 commissions investing, and 0 cost to install our app.",
    },
    {
      icon: "/images/icons/user-friendly.png",
      title: "User-friendly",
      description:
        "With an intuitive interface, easy trade execution, and hassle-free management, copying top traders has never been simpler. Trade smarter, not harder!",
    },
    {
      icon: "/images/icons/tier1-liquidity.png",
      title: "Tier 1 Liquidity",
      description:
        "Blackwell Invest sources the best liquidity to provide a deep product range and broad market access. Fast order execution and transparent pricing.",
    },
  ];

  return (
    <section className="bg-[#3A53BA] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#01f2f2] text-center mb-16">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow hover:-translate-y-2 duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={80}
                    height={80}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#040dbf]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" className="px-12 py-4 text-lg">
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
};
