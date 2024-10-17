// validationUtils.ts

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  
  export const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^\+?(\d{1,3})?\d{10}$/; // Supports optional country code and 10 digits
    return phoneRegex.test(phone);
  };
  
  export const validateName = (name: string): boolean => {
    // Name must contain only alphabets and spaces, and be between 2 to 50 characters
    const nameRegex = /^[a-zA-Z ]{2,50}$/;
    return nameRegex.test(name);
  };

  export const validatePassword = (password: string): boolean => {
    // Regular expression to check if password has at least one symbol and is 8 or more characters long
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.{8,})/;
    return passwordRegex.test(password);
  };
  

  export const doPasswordsMatch = (password: string, confirmPassword: string): boolean => {
    return password === confirmPassword;
  };