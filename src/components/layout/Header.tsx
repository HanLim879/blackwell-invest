"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useUserStore } from "@/store/userStore";

interface HeaderProps {
  onLoginClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const { user, isAuthenticated, clearUser } = useUserStore();
  const [timeLeft, setTimeLeft] = useState({
    days: 27,
    hours: 23,
    minutes: 45,
    seconds: 7,
  });

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    clearUser();
  };

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <header className="bg-[#5666D8] sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/icons/logo.png"
              alt="Blackwell Global"
              width={180}
              height={50}
              className="h-10 w-auto"
            />
          </div>

          {/* Countdown Timer */}
          <div className="hidden md:flex items-center gap-2 text-white font-mono text-xl">
            <span className="bg-white/20 px-3 py-1 rounded">
              {formatNumber(timeLeft.days)}
            </span>
            <span>:</span>
            <span className="bg-white/20 px-3 py-1 rounded">
              {formatNumber(timeLeft.hours)}
            </span>
            <span>:</span>
            <span className="bg-white/20 px-3 py-1 rounded">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span>:</span>
            <span className="bg-white/20 px-3 py-1 rounded">
              {formatNumber(timeLeft.seconds)}
            </span>
          </div>

          {/* Login/Logout Button */}
          <div className="flex items-center gap-4">
            {isAuthenticated && user ? (
              <>
                <span className="hidden md:inline text-white text-sm">
                  Welcome, {user.firstName}!
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-white text-[#5666D8] px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={onLoginClick}
                className="bg-[#F37406] text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
