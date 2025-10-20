"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { signupUser, SignupData } from "@/utils/auth";
import { validateSignup } from "@/utils/validation";
import { useUserStore } from "@/store/userStore";
import toast from "react-hot-toast";

interface SignupModalProps {
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const countryOptions = [
  { value: "Malaysia", label: "Malaysia" },
  { value: "Vietnam", label: "Vietnam" },
  { value: "Thailand", label: "Thailand" },
  { value: "Others", label: "Others" },
];

export const SignupModal: React.FC<SignupModalProps> = ({
  onClose,
  onSwitchToLogin,
}) => {
  const { setUser } = useUserStore();
  const [formData, setFormData] = useState<SignupData>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    country: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const validation = validateSignup(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsLoading(true);

    try {
      // Use Promise-based signup
      const userData = await signupUser(formData);

      // Store user data in state management
      setUser(userData);

      // Show success notification
      toast.success("Registration successful! Please verify your email.");

      // Close modal
      onClose();
    } catch (error: unknown) {
      toast.error(
        (error as Error).message || "Registration failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First name"
          error={errors.firstName}
          required
        />

        <Input
          label="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last name"
          error={errors.lastName}
          required
        />
      </div>

      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="your@email.com"
        error={errors.email}
        required
      />

      <Input
        label="Mobile"
        type="tel"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        placeholder="+60 12 345 6789"
        error={errors.mobile}
        required
      />

      <Select
        label="Country"
        name="country"
        value={formData.country}
        onChange={handleChange}
        options={countryOptions}
        error={errors.country}
        required
      />

      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Min 8 characters"
        error={errors.password}
        required
      />

      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Re-enter password"
        error={errors.confirmPassword}
        required
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#F37406] text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <LoadingSpinner />
            <span>Creating account...</span>
          </>
        ) : (
          "Sign Up"
        )}
      </button>

      <div className="text-center mt-4">
        <p className="text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-[#01f2f2] font-semibold hover:underline"
          >
            Login
          </button>
        </p>
      </div>

      {/* Social Signup (Optional) */}
      <div className="mt-6 pt-6 border-t">
        <p className="text-center text-gray-500 text-sm mb-4">
          Or sign up with
        </p>
        <div className="flex gap-4">
          <button
            type="button"
            className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Facebook
          </button>
          <button
            type="button"
            className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Google
          </button>
        </div>
      </div>
    </form>
  );
};
