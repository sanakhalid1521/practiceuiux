import React from "react";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Section 1: Text Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 py-12 bg-pink-100">
        <div className="flex flex-col justify-center">
          <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-4xl font-bold mb-4">Our Story</h1>
            <p className="text-lg mb-6">
              Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands
              and serves 3 million customers across the region.
            </p>
            <p className="text-lg mb-6 w-[525px] h-[130px]">
              Exclusive offers more than 1 million products, growing at a very fast pace. It provides a diverse assortment in categories
              ranging from consumer electronics to fashion and home goods.
            </p>
          </div>
        </div>

        {/* Main Image */}
        <div className="flex justify-center items-center bg-gray-100">
          <Image src="/a1.png" alt="Shop Icon" width={705} height={609} />
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex justify-center items-center gap-6 bg-gray-100 py-8">
        {/* Icon 1 */}
        <div className="flex flex-col items-center">
          <Image src="/ab1.png" alt="Shop Icon" width={270} height={230} />
        </div>

        {/* Icon 2 */}
        <div className="flex flex-col items-center">
          <Image src="/ab3.png" alt="Dollar Icon" width={270} height={230} />
        </div>

        {/* Icon 3 */}
        <div className="flex flex-col items-center">
          <Image src="/ab2.png" alt="Gift Icon" width={270} height={230} />
        </div>

        {/* Icon 4 */}
        <div className="flex flex-col items-center">
          <Image src="/ab4.png" alt="Bag Icon" width={270} height={230} />
        </div>
      </div>

      {/* Cards Section */}
     



      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Team Member 1 */}
  <div className="flex flex-col bg-white p-6 rounded-lg shadow-md items-center">
    <Image
      src="/c1.png"
      alt="Team Member"
      width={370}
      height={430}
      className="rounded mb-4"
    />
    {/* Text and Icons */}
    <div className="text-center">
      <h2 className="text-lg font-bold">Tom Cruise</h2>
      <p className="text-sm text-gray-500">Founder & Chairman</p>
      <div className="flex justify-center gap-2 mt-2">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  </div>

  {/* Team Member 2 */}
  <div className="flex flex-col bg-white p-6 rounded-lg shadow-md items-center">
    <Image
      src="/c2.png"
      alt="Team Member"
      width={370}
      height={430}
      className="rounded mb-4"
    />
    {/* Text and Icons */}
    <div className="text-center">
      <h2 className="text-lg font-bold">Emma Watson</h2>
      <p className="text-sm text-gray-500">Chief Marketing Officer</p>
      <div className="flex justify-center gap-2 mt-2">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  </div>

  {/* Team Member 3 */}
  <div className="flex flex-col bg-white p-6 rounded-lg shadow-md items-center">
    <Image
      src="/c3.png"
      alt="Team Member"
      width={370}
      height={430}
      className="rounded mb-4"
    />
    {/* Text and Icons */}
    <div className="text-center">
      <h2 className="text-lg font-bold">Robert Downey Jr.</h2>
      <p className="text-sm text-gray-500">Head of Operations</p>
      <div className="flex justify-center gap-2 mt-2">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  </div>
</div>

 <div className="bg-white text-black py-12">
      <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="bg-gray-800 rounded-full p-4">
            <Image src="/ds1.png" alt="Free Shipping" width={80} height={80} />
          </div>
          <h3 className="text-lg font-semibold">Free Shipping</h3>
          <p className="text-gray-600 text-sm">
            Enjoy free shipping on all orders without any extra cost.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="bg-gray-800 rounded-full p-4">
            <Image src="/ds2.png" alt="24/7 Support" width={80} height={80} />
          </div>
          <h3 className="text-lg font-semibold">24/7 Support</h3>
          <p className="text-gray-600 text-sm">
            Our support team is available anytime for your assistance.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="bg-gray-800 rounded-full p-4">
            <Image src="/ds3.png" alt="Secure Payment" width={80} height={80} />
          </div>
          <h3 className="text-lg font-semibold">Secure Payment</h3>
          <p className="text-gray-600 trxt-sm">
            We provide secure payment options for a seamless experience.
          </p>
        </div>
      </div>
    </div>

    </div>
  );
}
