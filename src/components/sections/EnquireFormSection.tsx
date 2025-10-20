"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import toast from "react-hot-toast";

export const EnquireFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const countryOptions = [
    { value: "Malaysia", label: "Malaysia" },
    { value: "Vietnam", label: "Vietnam" },
    { value: "Thailand", label: "Thailand" },
    { value: "Others", label: "Others" },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Enquiry submitted successfully! We will contact you soon.");
    setFormData({ name: "", email: "", mobile: "", country: "", message: "" });
    setIsLoading(false);
  };

  return (
    <section className="bg-gradient-to-b from-[#3A53BA] to-[#2a4090] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
          <h2 className="text-4xl font-bold text-[#01f2f2] text-center mb-8">
            Enquire Now
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="bg-white"
            />

            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="bg-white"
            />

            <Input
              label="Mobile"
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="+60 12 345 6789"
              required
              className="bg-white"
            />

            <Select
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              options={countryOptions}
              required
              className="bg-white"
            />

            <div className="mb-4">
              <label className="block text-sm font-medium text-white mb-2">
                Message (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01f2f2] transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#F37406] text-white py-4 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
            >
              {isLoading ? (
                <>
                  <LoadingSpinner />
                  <span>Submitting...</span>
                </>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
