import React from "react";
import Image from "next/image";
import { CiFacebook, CiTwitter, CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        <div>
          <h3 className="text-lg font-semibold">Exclusive</h3>
          <p className="text-sm my-2">Subscribe</p>
          <p className="text-sm mb-4">Get 10% off your first order</p>
          <div className="flex items-center border-b border-gray-500 pb-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black text-sm outline-none flex-grow"
            />
            <button className="text-white text-xl">&#9658;</button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold">Support</h3>
          <p className="text-sm mt-2">
            111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-sm my-2">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="text-lg font-semibold">Account</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold">Quick Link</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h3 className="text-lg font-semibold">Download App</h3>
          <p className="text-sm my-2">Save $3 with App New User Only</p>
          <div className="flex justify-between items-center">
          
            <div className="flex flex-col items-center rounded-lg">
              <Image
                src="/googleplay.png"
                alt="Google Play"
                width={110}
                height={40}
                className="rounded mb-4"
              />
              <Image
                src="/AppStore.png"
                alt="App Store"
                width={110}
                height={40}
                className="rounded"
              />
            </div>
          
            <div className="flex items-center rounded-lg">
              <Image
                src="/qrcode.png"
                alt="QR Code"
                width={80}
                height={80}
                className="rounded"
              />
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-xl">
            <CiFacebook />
            <CiTwitter />
            <FaInstagram />
            <CiLinkedin />
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
}
