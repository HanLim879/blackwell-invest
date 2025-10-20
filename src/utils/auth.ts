export interface SignupData {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    country: string;
    password: string;
    confirmPassword: string;
  }
  
  export interface LoginData {
    email: string;
    password: string;
  }
  
  export const signupUser = (data: SignupData): Promise<any> => {
    return new Promise((resolve, reject) => {
      // Simulate API call
      setTimeout(() => {
        if (data.password !== data.confirmPassword) {
          reject(new Error('Passwords do not match'));
          return;
        }
  
        if (data.email && data.password && data.firstName && data.lastName) {
          resolve({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            mobile: data.mobile,
            country: data.country,
          });
        } else {
          reject(new Error('Please fill in all required fields'));
        }
      }, 1500); // Simulate network delay
    });
  };
  
  export const loginUser = (data: LoginData): Promise<any> => {
    return new Promise((resolve, reject) => {
      // Simulate API call
      setTimeout(() => {
        if (data.email && data.password) {
          // Mock successful login
          resolve({
            firstName: 'John',
            lastName: 'Doe',
            email: data.email,
            mobile: '+60123456789',
            country: 'Malaysia',
          });
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1500);
    });
  };