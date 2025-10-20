"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Modal } from "@/components/ui/Modal";
import { LoginModal } from "@/components/auth/LoginModal";
import { SignupModal } from "@/components/auth/SignupModal";
import { HeroSection } from "@/components/sections/HeroSection";
import { FastMatchingSection } from "@/components/sections/FastMatchingSection";
import { EasyAnalysisSection } from "@/components/sections/EasyAnalysisSection";
import { TradeProSection } from "@/components/sections/TradeProSection";
import { LinkMT4Section } from "@/components/sections/LinkMT4Section";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { NavigateAppSection } from "@/components/sections/NavigateAppSection";
import { EnquireFormSection } from "@/components/sections/EnquireFormSection";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { useUserStore } from "@/store/userStore";

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const { isAuthenticated, user } = useUserStore();

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleSwitchToSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  return (
    <>
      <Toaster position="top-right" />

      <Header onLoginClick={handleLoginClick} />

      <main>
        {/* Welcome Message (shown after successful registration) */}
        {isAuthenticated && user && (
          <div className="bg-[#01f2f2] text-[#040dbf] py-4 text-center font-semibold">
            Hi {user.firstName}, welcome to Blackwell! Please verify your email
            immediately.
          </div>
        )}

        {/* All Sections */}
        <HeroSection onRegisterClick={() => setShowSignupModal(true)} />
        <FastMatchingSection />
        <EasyAnalysisSection />
        <TradeProSection />
        <LinkMT4Section />
        <WhyChooseSection />
        <NavigateAppSection />
        <EnquireFormSection />
      </main>

      <Footer />

      {/* Modals */}
      <Modal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        title="Login to Blackwell Invest"
      >
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onSwitchToSignup={handleSwitchToSignup}
        />
      </Modal>

      <Modal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        title="Create Your Account"
      >
        <SignupModal
          onClose={() => setShowSignupModal(false)}
          onSwitchToLogin={handleSwitchToLogin}
        />
      </Modal>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
}
