import React from "react";
import Image from "next/image";

export default function ExploreProducts() {
  const products = [
    { id: 1, name: "Cesar Dog Food", price: "$100", Image: "/ep1.png", rating: 4.5 },
    { id: 2, name: "Canon Camera", price: "$360", Image: "/ep2.png", rating: 5 },
    { id: 3, name: "Laptop", price: "$700", Image: "/ep3.png", rating: 4.8 },
    { id: 4, name: "Skincare Kit", price: "$500", Image: "/ep4.png", rating: 4.7 },
    { id: 5, name: "Toy Car", price: "$960", Image: "/ep5.png", rating: 4.9, new: true },
    { id: 6, name: "Soccer Shoes", price: "$1160", Image: "/ep6.png", rating: 5, new: true },
    { id: 7, name: "Game Controller", price: "$660", Image: "/ep7.png", rating: 4.5, new: true },
    { id: 8, name: "Green Jacket", price: "$660", Image: "/ep8.png", rating: 4.5 },
  ];

  return (
    <div className="max-w-[1170px] h-[900px] mx-auto px-6 py-10">
      <div className="w-4 h-8 bg-red-600"></div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-extrabold text-2xl">Explore Our Products</h1>
        {/* Navigation Arrows */}
        <div className="flex space-x-2">
          <button className="p-3 bg-white rounded-full shadow hover:bg-gray-100">
            ←
          </button>
          <button className="p-3 bg-white rounded-full shadow hover:bg-gray-100">
            →
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden relative group"
          >
            {/* "NEW" Badge */}
            {product.new && (
              <span className="absolute top-2 left-2 bg-white text-black px-2 py-1 text-xs font-bold rounded">
                NEW
              </span>
            )}
            <Image
              src={product.Image}
              alt={product.name}
              width={270}
              height={250}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-sm text-gray-400">{product.price}</p>
              {/* Rating */}
              <div className="mt-2 flex items-center">
                <div className="text-yellow-400 text-sm">
                  {"★".repeat(Math.floor(product.rating))}{" "}
                  {"☆".repeat(5 - Math.floor(product.rating))}
                </div>
                <span className="text-xs text-gray-400 ml-2">
                  {product.rating.toFixed(1)}
                </span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              className="w-full py-2 transform text-white rounded-lg hover:bg-black"
            >
              Add to Cart
            </button>
          </div>
        )
        )}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700">
          View All Products
        </button>
      </div>
    </div>
  )
}
