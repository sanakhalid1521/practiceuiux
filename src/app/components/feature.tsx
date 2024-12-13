import React from 'react';
import Image from 'next/image';

const FeatureSection = () => {
  return (
    <div className="bg-white text-black w-[1170px] h-[768px] p-8">
          <div className="w-2 h-8 bg-red-600"></div>
      <h2 className="text-red-500 font-bold text-xl mb-6">Featured</h2>
      <div className="grid grid-cols-2 gap-6">
    
        <div className="bg-gray-100 p-4 rounded-lg w-[570px] h-[600px]">
          <Image
            src="/fs1.png"
            alt="PlayStation 5"
            width={570}
            height={600}
            className="rounded-lg"
          />
        </div>

        
        <div className="bg-gray-100 p-4 rounded-lg w-[570px] h-[600px] grid grid-rows-2 gap-4">
        
          <div className="bg-gray-200 rounded-lg">
            <Image
              src="/fs2.png"
              alt="Women's Collections"
              width={570}
              height={284}
              className="rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
        
            <div className="bg-gray-200 rounded-lg">
              <Image
                src="/fs3.png"
                alt="Speakers"
                width={270}
                height={284}
                className="rounded-lg"
              />
            </div>

            <div className="bg-gray-200 rounded-lg">
              <Image
                src="/fs4.png"
                alt="Perfume"
                width={270}
                height={284}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
