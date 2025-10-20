"use client";

import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a2550] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-2">
            <Image
              src="/images/icons/logo.png"
              alt="Blackwell Global"
              width={180}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Blackwell Invest - Your trusted partner in copy trading. Trade
              smarter with regulated brokers and experienced master traders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-[#01f2f2] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#01f2f2] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#01f2f2] transition-colors">
                  Master Traders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#01f2f2] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-[#01f2f2] transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#01f2f2] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#01f2f2] transition-colors">
                  Risk Disclosure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#01f2f2] transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Blackwell Global. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Risk Warning: Trading leveraged products such as Forex and CFDs may
            not be suitable for all investors as they carry a high degree of
            risk to your capital.
          </p>
        </div>
      </div>
    </footer>
  );
};
