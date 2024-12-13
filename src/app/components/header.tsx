import React from "react";
import Image from "next/image"; // Don't forget to import Image if you're using it

const TopHeader = () => {
  return (
    <div className="bg-black text-white text-sm py-2 px-4 flex justify-between items-center">
      <div className="flex justify-between w-full items-center">
        {/* Left Side: Summer Sale Text */}
        <p className="flex-grow text-center">
          Summer Sale For All Swim Suits And Free Express Delivery -
          
          <span className="font-bold">OFF 50%!</span>
          {"  "}
          <button className="text-white font-semibold underline">
            Shop Now
          </button> 
          </p>
          
          <div>
            <button className="flex items-center text-white">
              English <div>
                <Image src="/down.png" alt="#" width={24} height={24} />
              </div>
            </button>
          </div>
        </div>
      
    </div>
  );
};

export default TopHeader;
