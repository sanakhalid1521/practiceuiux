import React from "react";
import Image from "next/image";

export default function Music() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    
      <div className="w-[1170px] h-[500px] bg-black text-white flex items-center justify-between px-10">
    
        <div>
          <p className="text-green-500 text-sm uppercase">Categories</p>
          <h1 className="text-5xl font-bold leading-tight">
            Enhance Your <br /> Music Experience
          </h1>
          
          <div className="flex space-x-4 mt-6">
            <div className="text-center">
              <Image
                src="/ff.png"
                alt="23"
                width={62}
                height={62}
                className="max-w-sm"
              />
              <p className="text-sm mt-2">Hours</p>
            </div>
            <div className="text-center">
              <Image
                src="/f3.png"
                alt="23"
                width={62}
                height={62}
                className="max-w-sm"
              />
              <p className="text-sm mt-2">Minutes</p>
            </div>
            <div className="text-center">
              <Image
                src="/f4.png"
                alt="59"
                width={62}
                height={62}
                className="max-w-sm"
              />
              <p className="text-sm mt-2">Seconds</p>
            </div>
            <div className="text-center">
              <Image
                src="/f5.png"
                alt="35"
                width={62}
                height={62}
                className="max-w-sm"
              />
              <p className="text-sm mt-2">Days</p>
            </div>
          </div>
          {/* Button */}
          <button className="mt-6 bg-green-500 text-black px-6 py-2 rounded-lg hover:bg-green-600">
            Buy Now!
          </button>
        </div>
        {/* Right Section */}
        <div>
          <Image
            src="/f1.png"
            alt="Speaker"
            width={500}
            height={420}
            className="max-w-sm"
          />
        </div>
      </div>
    </div>
  );
}
