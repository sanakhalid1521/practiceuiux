import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">Exclusive</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-gray-700">
          <li>
            <Link href="/">Home</Link>
            
          </li>
          <li>
  <Link href="/About">About</Link>
</li>
          <li>
            <Link href="/contact">Contact
            </Link>
          </li>
          <li>
            <Link href="/signup">Sign Up
            </Link>
          </li>
        </ul>

        {/* Search and Cart Icons */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg px-4 py-1 text-sm focus:outline-none"/>
            <FaSearch />
            <CiHeart />
            <FaCartPlus />
            <FiUser />
        
          <button className="text-gray-600">
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
