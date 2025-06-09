import React, { useState } from 'react';
import { Mail, ArrowRight, KeyRound } from 'lucide-react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { validateEmail } from '../utils/validation';

const ForgotPassword = ({ onNavigateToLogin }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    
    // Clear error when user starts typing
    if (emailError) {
      setEmailError(undefined);
    }
  };

  const validateForm = () => {
    const error = validateEmail(email);
    setEmailError(error || undefined);
    return !error;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call to send OTP
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('OTP sent to:', email);
      setOtpSent(true);
    } catch (error) {
      console.error('Error sending OTP:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    
    try {
      // Simulate API call to resend OTP
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('OTP resent to:', email);
      alert('OTP has been resent to your email!');
    } catch (error) {
      console.error('Error resending OTP:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = email && !emailError;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] to-[#E8F4FD] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 transform transition-all duration-300">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] rounded-full mb-4">
            <KeyRound className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {otpSent ? 'OTP Sent!' : 'Forgot Password?'}
          </h1>
          <p className="text-gray-600">
            {otpSent 
              ? `We've sent a verification code to ${email}. Please check your email and enter the code below.`
              : 'Enter your email address and we\'ll send you a verification code to reset your password.'
            }
          </p>
        </div>

        {!otpSent ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              label="Email Address"
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your registered email"
              required
              error={emailError}
            />

            <Button
              type="submit"
              disabled={!isFormValid || isLoading}
              className="group"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span className="ml-2">Sending OTP...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Mail className="mr-2 w-5 h-5" />
                  <span>Send OTP</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              )}
            </Button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-green-600 mr-2" />
                <p className="text-green-800 text-sm">
                  Verification code sent successfully!
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-gray-600 text-sm">
                Didn't receive the code?
              </p>
              
              <Button
                onClick={handleResendOtp}
                disabled={isLoading}
                variant="outline"
                className="group"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#4A90E2]"></div>
                    <span className="ml-2">Resending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Mail className="mr-2 w-4 h-4" />
                    <span>Resend OTP</span>
                  </div>
                )}
              </Button>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Remember your password?{' '}
            <button 
              onClick={onNavigateToLogin}
              className="text-[#4A90E2] hover:text-[#3A7BC8] font-medium transition-colors duration-200 hover:underline"
            >
              Back to Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;