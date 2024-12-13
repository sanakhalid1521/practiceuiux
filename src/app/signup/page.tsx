import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc'; // Google Icon

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 min-h-screen p-6">
      {/* Left Section with Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
        <Image
          src="/su.png" // Replace with the correct image path
          alt="Sign Up"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section with Form */}
      <div className="bg-white w-full md:w-1/2 max-w-2xl p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-red-500">Create an Account</h2>
        <h4 className="mb-4">Enter your details below</h4>
        <form className="space-y-6">
          {/* Name Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>

          {/* Email and Address Section */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
          />

          {/* Password Section */}
          <div>
            <div className="space-y-4">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
              />
            </div>
          </div>

          {/* Buttons Section */}
          <div className="space-y-4">
            <button
              type="submit"
              className="w-full bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 focus:outline-none"
            >
              Create Account
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 focus:outline-none"
            >
              <FcGoogle className="mr-2 text-xl" /> Sign Up with Google
            </button>
          </div>

          {/* Already Have Account Section */}
          <div className="text-center mt-4">
            <h4 className="mb-2">Already have an account?</h4>
            <Link href="/login">
              <button className="text-red-500 hover:underline">Login</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
