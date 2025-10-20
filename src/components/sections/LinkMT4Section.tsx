"use client";

import React from "react";
import { Button } from "@/components/ui/Button";

export const LinkMT4Section: React.FC = () => {
  const steps = [
    'Install our app, "Blackwell Invest"',
    "Login OR create a new account",
    'Click "Account"',
    'Click "Link an account"',
    'Select "BlackwellGlobalAsia-Live" server',
    "Fill in your Blackwell Global trading account OR create a new account",
    'Click "Copy Trades"',
    'Click "Done"',
  ];

  return (
    <section className="bg-[#5666D8] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#01f2f2] text-center mb-12">
          How to Link MT4 Account
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#01f2f2] rounded-full flex items-center justify-center text-[#040dbf] font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-800 pt-2 font-medium">{step}</p>
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
