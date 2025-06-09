import React, { useState } from 'react';
import { UserPlus, User, Mail, Phone, Lock, MapPin } from 'lucide-react';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';
import Button from '../components/Button';
import { validateEmail, validatePassword, validateConfirmPassword, validatePhone, validateRequired } from '../utils/validation';
import { countries, states, cities } from '../utils/locationData';

const Register = ({ onNavigateToLogin }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    referralCode: '',
    country: '',
    state: '',
    city: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      
      // Reset dependent dropdowns
      if (name === 'country') {
        newData.state = '';
        newData.city = '';
      } else if (name === 'state') {
        newData.city = '';
      }
      
      return newData;
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    const fullNameError = validateRequired(formData.fullName, 'Full Name');
    if (fullNameError) newErrors.fullName = fullNameError;
    
    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;
    
    const phoneError = validatePhone(formData.phone);
    if (phoneError) newErrors.phone = phoneError;
    
    const passwordError = validatePassword(formData.password);
    if (passwordError) newErrors.password = passwordError;
    
    const confirmPasswordError = validateConfirmPassword(formData.password, formData.confirmPassword);
    if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError;
    
    const countryError = validateRequired(formData.country, 'Country');
    if (countryError) newErrors.country = countryError;
    
    const stateError = validateRequired(formData.state, 'State');
    if (stateError) newErrors.state = stateError;
    
    const cityError = validateRequired(formData.city, 'City');
    if (cityError) newErrors.city = cityError;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Registration attempt:', formData);
      alert('Registration successful! (This is just a demo)');
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAvailableStates = () => {
    return formData.country ? (states[formData.country] || []) : [];
  };

  const getAvailableCities = () => {
    return formData.state ? (cities[formData.state] || []) : [];
  };

  const isFormValid = Object.values(formData).every((value, index) => {
    const keys = Object.keys(formData);
    return keys[index] === 'referralCode' || value.trim() !== '';
  }) && Object.keys(errors).length === 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] to-[#E8F4FD] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 transform transition-all duration-300">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] rounded-full mb-4">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-600">Join us today and get started in minutes</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Full Name"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
              error={errors.fullName}
            />

            <InputField
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              error={errors.email}
            />
          </div>

          <InputField
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            required
            error={errors.phone}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Create a password"
              required
              error={errors.password}
            />

            <InputField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
              required
              error={errors.confirmPassword}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SelectField
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              options={countries}
              required
              error={errors.country}
            />

            <SelectField
              label="State/Region"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              options={getAvailableStates()}
              required
              error={errors.state}
            />

            <SelectField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              options={getAvailableCities()}
              required
              error={errors.city}
            />
          </div>

          <InputField
            label="Referral Code"
            type="text"
            name="referralCode"
            value={formData.referralCode}
            onChange={handleInputChange}
            placeholder="Enter referral code (optional)"
            error={errors.referralCode}
          />

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="terms"
              required
              className="mt-1 rounded border-gray-300 text-[#4A90E2] focus:ring-[#4A90E2]"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the{' '}
              <a href="#" className="text-[#4A90E2] hover:text-[#3A7BC8] font-medium">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-[#4A90E2] hover:text-[#3A7BC8] font-medium">
                Privacy Policy
              </a>
            </label>
          </div>

          <Button
            type="submit"
            disabled={!isFormValid || isLoading}
            className="group"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span className="ml-2">Creating account...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <span>Create Account</span>
                <UserPlus className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </div>
            )}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <button 
              onClick={onNavigateToLogin}
              className="text-[#4A90E2] hover:text-[#3A7BC8] font-medium transition-colors duration-200 hover:underline"
            >
              Sign in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;