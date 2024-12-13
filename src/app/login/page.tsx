import React from 'react';
import Image from 'next/image';

function Login() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 min-h-screen p-6">
      {/* Left Section with Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
        <Image
          src="/su.png" // Replace with the correct image path
          alt="Login"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section with Login Form */}
      <div className="w-full md:w-1/2 max-w-md bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-red-500">Login in to Exclusive</h2>
        <h4 className="mb-4 text-gray-600">Enter your details below to log in</h4>
        <form className="space-y-6">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
          />

          {/* Buttons Section */}
          <div className="space-y-4">
            <button
              type="submit"
              className="w-full bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 focus:outline-none"
            >
              Login
            </button>

            <button
              type="button"
              className="w-full text-gray-700 bg-gray-300 px-6 py-3 rounded-lg hover:bg-gray-400 focus:outline-none"
            >
              Forgot Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
