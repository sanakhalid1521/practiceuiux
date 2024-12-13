import React from 'react';
import Image from 'next/image';

const DeliveryService = () => {
  return (
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
  );
};

export default DeliveryService;
