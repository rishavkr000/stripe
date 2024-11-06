import React, { useState } from 'react';
import { AlertCircle, Check, Loader } from 'lucide-react';

const DummyLoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null);
  const [user, setUser] = useState(null);

  const handleMicrosoftLogin = async () => {
    setIsLoading(true);
    setLoginStatus(null);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Dummy successful login
    const dummyUser = {
      name: "Rishav Kumar",
      email: "rishavkr000@gmail.com",
      picture: "/api/placeholder/40/40"
    };

    setIsLoading(false);
    setLoginStatus('success');
    setUser(dummyUser);
  };

  const handleLogout = () => {
    setUser(null);
    setLoginStatus(null);
  };

  if (user) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center gap-4 mb-6">
          <img 
            src={user.picture} 
            alt={user.name} 
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-medium">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Welcome Back</h2>
      
      {/* Login Status Messages */}
      {loginStatus === 'success' && (
        <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-md flex items-center gap-2">
          <Check size={18} />
          <span>Login successful!</span>
        </div>
      )}
      
      {loginStatus === 'error' && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md flex items-center gap-2">
          <AlertCircle size={18} />
          <span>Login failed. Please try again.</span>
        </div>
      )}

      {/* Microsoft Login Button */}
      <button
        onClick={handleMicrosoftLogin}
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <Loader className="animate-spin" size={20} />
        ) : (
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
          </svg>
        )}
        <span className="font-medium">
          {isLoading ? 'Signing in...' : 'Sign in with Microsoft'}
        </span>
      </button>

      {/* Alternative Login Options */}
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            Email
          </button>
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            Guest
          </button>
        </div>
      </div>

      {/* Terms and Privacy */}
      <p className="mt-6 text-center text-sm text-gray-500">
        By signing in, you agree to our{' '}
        <a href="#" className="text-blue-600 hover:underline">Terms</a>
        {' '}and{' '}
        <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
      </p>
    </div>
  );
};

export default DummyLoginPage;