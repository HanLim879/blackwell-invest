"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/Input";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { loginUser, LoginData } from "@/utils/auth";
import { validateLogin } from "@/utils/validation";
import { useUserStore } from "@/store/userStore";
import toast from "react-hot-toast";

interface LoginModalProps {
  onClose: () => void;
  onSwitchToSignup: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  onClose,
  onSwitchToSignup,
}) => {
  const { setUser } = useUserStore();
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    const validation = validateLogin(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsLoading(true);

    try {
      // Use Promise-based login
      const userData = await loginUser(formData);

      // Store user data in state management
      setUser(userData);

      // Show success message
      toast.success("Login successful! Welcome back!");

      // Close modal
      onClose();
    } catch (error: any) {
      toast.error(error.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        error={errors.email}
        required
      />

      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
        error={errors.password}
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
            <span>Logging in...</span>
          </>
        ) : (
          "Login"
        )}
      </button>

      <div className="text-center mt-4">
        <p className="text-gray-600">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="text-[#01f2f2] font-semibold hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>

      {/* Social Login (Optional) */}
      <div className="mt-6 pt-6 border-t">
        <p className="text-center text-gray-500 text-sm mb-4">
          Or continue with
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
