'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export const TradeProSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Install our app, "Blackwell Invest"',
      image: '/images/phones/app-store-listing.png',
    },
    {
      number: 2,
      title: 'Choose a signal Master and click "Copy"',
      image: null,
    },
    {
      number: 3,
      title: 'Set your trade size preferences',
      image: '/images/phones/trade-settings.png',
    },
    {
      number: 4,
      title: 'Click "Agree and Copy"',
      image: '/images/phones/copy-agreement.png',
    },
  ];

  return (
    <section className="bg-[#3A53BA] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#01f2f2] mb-4">
            Trade Like a Pro in Minutes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Steps */}
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#F37406] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {step.number}
                </div>
                <div className="flex-1 text-white pt-2">
                  <p className="text-lg font-semibold">{step.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <Image
                src="/images/phones/copy-agreement.png"
                alt="Trade Setup"
                width={300}
                height={600}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
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