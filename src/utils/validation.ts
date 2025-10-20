export interface ValidationResult {
    isValid: boolean;
    errors: Record<string, string>;
  }
  
  export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validateSignup = (data: Record<string, string>): ValidationResult => {
    const errors: Record<string, string> = {};
  
    if (!data.firstName?.trim()) {
      errors.firstName = 'First name is required';
    }
  
    if (!data.lastName?.trim()) {
      errors.lastName = 'Last name is required';
    }
  
    if (!data.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(data.email)) {
      errors.email = 'Invalid email format';
    }
  
    if (!data.mobile?.trim()) {
      errors.mobile = 'Mobile number is required';
    }
  
    if (!data.country) {
      errors.country = 'Country is required';
    }
  
    if (!data.password) {
      errors.password = 'Password is required';
    } else if (data.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
  
    if (!data.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
  
    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  };
  
  export const validateLogin = (data: Record<string, string>): ValidationResult => {
    const errors: Record<string, string> = {};
  
    if (!data.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(data.email)) {
      errors.email = 'Invalid email format';
    }
  
    if (!data.password) {
      errors.password = 'Password is required';
    }
  
    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  };