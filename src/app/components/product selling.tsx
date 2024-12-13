import React from "react";
import Image from "next/image";

const ProductSelling = () => {
  const categories = [
    {
      id: 1,
      name: "The North Coat",
      icon: "/cart.png",
      price: 260,
      originalPrice: 360,
      ratings: 65,
      stars: 5,
    },
    {
      id: 2,
      name: "RGB Liquid Cooling CPU",
      icon: "/cart1.png",
      price: 450,
      originalPrice: 550,
      ratings: 45,
      stars: 5,
    },
    {
      id: 3,
      name: "Gucci Duffli Bag",
      icon: "/cart3.png",
      price: 120,
      originalPrice: 150,
      ratings: 85,
      stars: 5,
    },
    {
      id: 4,
      name: "Small Bookself",
      icon: "/cart4.png",
      price: 800,
      originalPrice: 1000,
      ratings: 20,
      stars: 5,
    },
  ];

  return (
    <div className="w-full py-8 px-4 bg-white border border-gray-300">
      {/* Title and View All Section */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-2 h-8 bg-red-600"></div>
        <h1 className="text-red-600 text-xl font-bold">This Month</h1>
      </div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-extrabold text-2xl">Best Selling Products</h1>
        <button className="px-4 py-2 bg-red-300 text-white rounded-full shadow hover:bg-red-400">
          View All
        </button>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-4 gap-6 bg-gray-100 p-4 rounded-lg">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative bg-white rounded-md shadow-lg p-4 group"
          >
            {/* Product Image */}
            <Image
              src={category.icon}
              alt={category.name}
              width={150}
              height={150}
              className="w-full h-40 object-contain mb-4"
            />

            {/* Product Info */}
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {category.name}
            </h3>
            <div className="flex items-center justify-center space-x-2 mt-2">
              <span className="text-lg font-bold text-red-600">
                ${category.price}
              </span>
              <span className="text-sm line-through text-gray-500">
                ${category.originalPrice}
              </span>
            </div>

            {/* Stars */}
            <div className="flex justify-center items-center space-x-1 text-yellow-500 mt-2">
              {Array.from({ length: category.stars }).map((_, index) => (
                <span key={index}>⭐</span>
              ))}
            </div>

            {/* Ratings */}
            <p className="text-sm text-gray-600 text-center mt-1">
              ({category.ratings})
            </p>

            {/* Add to Cart Button */}
            <button
              className="w-full py-2 transform text-white rounded-lg hover:bg-black transition">
            
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSelling;
