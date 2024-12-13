import React from "react";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: number;
  discount: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, discount, image }) => {
  return (
    <div className="bg-white text-black shadow-lg rounded-lg overflow-hidden border border-gray-400">
      {/* Image Container */}
      <div className="relative">
        {/* Main Product Image */}
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="w-full h-48 object-cover"
        />

        {/* Discount Badge */}
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
          -{discount}%
        </span>

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex space-x-2">
          <button className="p-2 bg-white rounded-full shadow-lg">❤️</button>
          <button className="p-2 bg-white rounded-full shadow-lg">👁️</button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-sm font-medium mb-2">{title}</h3>
        <p className="text-red-500 font-bold mb-4">${price}</p>

        {/* Add to Cart Button */}
        <button className="w-full py-2 transform text-white rounded-lg hover:bg-black transition">
          Add To Cart
        </button>

        {/* Stars Rating */}
        <div className="flex items-center space-x-1 text-yellow-500 mt-2">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
