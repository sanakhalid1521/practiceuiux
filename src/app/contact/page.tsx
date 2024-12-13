import React from 'react'

function Contact() {
  return (
    
    <div className="flex flex-col md:flex-row justify-between items-start p-6 bg-gray-100 min-h-screen">
      {/* Sidebar Section */}
      <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg mt-6 md:mt-0 md:mr-6">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <div className="space-y-6">
          {/* Call Us */}
          <div className="flex items-start space-x-4">
            <div className="bg-red-500 text-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10l1.51-1.34a1 1 0 011.2 0L7 10m14 0l-1.51-1.34a1 1 0 00-1.2 0L17 10m-7 11.01V10"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Call To Us</h3>
              <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
              <p className="text-gray-900 font-bold">Phone: +8801611112222</p>
            </div>
          </div>

          <hr className="border-gray-300" />

          {/* Write to Us */}
          <div className="flex items-start space-x-4">
            <div className="bg-red-500 text-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4h16v16H4V4zM8 4v16"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Write To Us</h3>
              <p className="text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
              <p className="text-gray-900 font-bold">Emails: customer@exclusive.com</p>
              <p className="text-gray-900 font-bold">Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-3/5 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            />
            <input
              type="text"
              placeholder="Your Phone *"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full p-3 h-40 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
          ></textarea>
          <button
            type="submit"
            className="w-full md:w-auto bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 focus:outline-none"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>
  )
}

export default Contact
