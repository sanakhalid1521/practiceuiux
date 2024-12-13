import React from "react";
import Image from "next/image";
import { FaArrowRight } from 'react-icons/fa'; 

const HeroSection = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-start gap-6 py-10">
    
      <div className="w-full md:w-1/4 bg-white text-black p-4 rounded-lg">
        <ul className="border-gray-300 p-4 rounded-lg">
          <li className="hover:text-red-500 cursor-pointer flex justify-between items-center">
            Womans Fashion <div>
              <Image src="/dropdown.png" alt="#" width={24} height={24}/>
            </div>
          </li>
          <li className="hover:text-red-500 cursor-pointer flex justify-between items-center">
            Mens Fashion <div>
              <Image src="/dropdown.png" alt="#" width={24} height={24}/>
            </div>
          </li>
          <li className="hover:text-red-500 cursor-pointer flex justify-between items-center">
            Electronics 
          </li>
          <li className="hover:text-red-500 cursor-pointer flex justify-between items-center">
            Home & Lifestyle 
          </li>
          <li className="hover:text-red-500 cursor-pointer flex justify-between items-center">
            Medicine
          </li>
          <li className="hover:text-red-500 cursor-pointer flex justify-between items-center">
            Sports & Outdoor 
          </li>
          <li className="hover:text-red-500 cursor-pointer flex justify-between items-center">
            Babys & Toys 
          </li>
          <li className="hover:text-red-500 cursor-pointer flex justify-between items-center">
            Groceries & Pets  </li>
          <li className="hover:text-red-500 cursor-pointer flex justify-between items-center">
            Health & Beauty 
          </li>
        </ul>
      </div>

      {/* Black Container */}
      <div className="bg-black text-white p-6 w-full md:w-3/4 rounded-lg flex items-center justify-between relative">
        {/* Left Side: Text and Apple Logo */}
        <div className="flex flex-col items-start">
          {/* Apple Logo and Small Text */}
          <div className="flex items-center mb-4">
            <Image
              src="/apple.png"
              alt="Apple Logo"
              width={40}
              height={49}
              className="rounded-lg"
            />
            <span className="ml-2 text-sm">iPhone 14 Series</span> {/* Small text next to the Apple logo */}
          </div>

          {/* Text */}
          <div>
            <h2 className="text-5xl font-bold mb-4">Up to 10%</h2><br />
            <h2 className="text-5xl font-bold mb-4">Off Voucher</h2>
            <button className="text-white py-2 px-6 rounded-lg transition-all relative underline">
              Shop Now
              <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 border-gray-500" />
            </button>
            
          </div>
        </div>

        {/* Right Side: iPhone Image */}
        <div className="relative">
          <Image
            src="/image.png"
            alt="iPhone 14 Pro"
            width={496}
            height={352}
            className="rounded-lg"
          />
        </div>

        {/* Bottom Ellipses */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          <div>
            <Image src="/Ellipse 2.png" alt="#" width={12} height={12} />
          </div>
          <div>
            <Image src="/Ellipse 3.png" alt="#" width={12} height={12} />
          </div>
          <div className="bg-orange-500">
            <Image src="/Ellipse 5.png" alt="#" width={12} height={12} />
          </div>
          <div>
            <Image src="/Ellipse 6.png" alt="#" width={12} height={12} />
          </div>
          <div>
            <Image src="/Ellipse 7.png" alt="#" width={12} height={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
