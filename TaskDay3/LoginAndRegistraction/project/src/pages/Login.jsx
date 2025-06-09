import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { validateEmail, validatePassword } from '../utils/validation';

const Login = ({ onNavigateToRegister, onNavigateToForgotPassword }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;
    
    const passwordError = validatePassword(formData.password);
    if (passwordError) newErrors.password = passwordError;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Login attempt:', formData);
      alert('Login successful! (This is just a demo)');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = formData.email && formData.password && Object.keys(errors).length === 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] to-[#E8F4FD] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 transform transition-all duration-300">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] rounded-full mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your account to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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

          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
            error={errors.password}
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-[#4A90E2] focus:ring-[#4A90E2]" />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <button 
              type="button"
              onClick={onNavigateToForgotPassword}
              className="text-[#4A90E2] hover:text-[#3A7BC8] font-medium transition-colors duration-200 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            disabled={!isFormValid || isLoading}
            className="group"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span className="ml-2">Signing in...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <span>Sign In</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            )}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <button 
              onClick={onNavigateToRegister}
              className="text-[#4A90E2] hover:text-[#3A7BC8] font-medium transition-colors duration-200 hover:underline"
            >
              Sign up now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;