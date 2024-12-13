import React from "react";
import Image from "next/image";

const CategoriesSection = () => {
  const categories = [
    { id: 1, name: "Phone", icon: "/pic1.png" },
    { id: 2, name: "Computer", icon: "/pic2.png" },
    { id: 3, name: "Smart Watch", icon: "/pic3.png" },
    { id: 4, name: "Camera", icon: "/pic4.png" },
    { id: 5, name: "Headphone", icon: "/pic5.png" },
    { id: 6, name: "Gaming", icon: "/pic6.png" },
  ];

  return (
    <div className="w-full py-8 px-4 bg-white border border-gray-300">
      {/* Title and Arrows Section */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-2 h-8 bg-red-600"></div>
        <h1 className="text-red-600 text-xl font-bold">Categories</h1>
      </div>
      
      {/* Browse By Category Section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-extrabold text-2xl">Browse By Category</h1>
        {/* Arrows */}
        <div className="flex space-x-2">
          <button className="p-3 bg-white rounded-full shadow hover:bg-red-700 hover:text-white">
            ←
          </button>
          <button className="p-3 bg-white rounded-full shadow hover:bg-red-700 hover:text-white">
            →
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-6 gap-4 bg-gray-100 p-4 rounded-lg">
        {categories.map((category) => (
          <div
            key={category.id}
            className="w-[170px] h-[145px] flex justify-center items-center bg-gray-300 text-white rounded-md hover:bg-orange-500 cursor-pointer transition-all"
          >
            <Image
              src={category.icon}
              alt={category.name}
              width={170}
              height={145}
              className="mb-2 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
