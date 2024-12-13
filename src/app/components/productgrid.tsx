import React from "react";
import ProductCard from "./productCard";
import Image from "next/image";

const ProductGrid = () => {
  const products = [
    { id: 1, title: "Game Controller", price: 120, discount: 40, image: "/img1.png" },
    { id: 2, title: "Keyboard", price: 960, discount: 35, image: "/img2.png" },
    { id: 3, title: "Monitor", price: 370, discount: 30, image: "/img3.png" },
    { id: 4, title: "Chair", price: 375, discount: 25, image: "/img4.png" },
  ];

  return (
    <div className="w-full px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        {/* Flash Sales Section */}
        <div className="space-y-6">
          {/* Top Image */}
          <Image src="/img.png" alt="Flash Sales" width={150} height={50} />

          {/* Heading and Additional Icon */}
          <div className="flex items-center space-x-32">
            <h1 className="text-xl font-bold text-black">Flash Sales</h1>
            <Image src="/image1.png" alt="Additional Icon" width={150} height={50} />
          </div>
        </div>

        {/* Arrows */}
        <div className="flex space-x-4">
          <button className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100">
            ←
          </button>
          <button className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100">
            →
          </button>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            discount={product.discount}
            image={product.image}
          />
        ))}
      </div>

      {/* Button and Line */}
      <div className="flex flex-col items-center mt-8">
        <button className="bg-orange-500 text-white px-6 py-6 rounded-lg hover:bg-orange-600">
          View All Products
        </button>
        <hr className="w-3/4 border-t-2 border-gray-300  hover:to-blue-300 mt-4 mb-2" />
      </div>
    </div>
  );
};

export default ProductGrid;
