// 


import React from 'react';

function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-48 h-48 rounded-full overflow-hidden">
        <img src="https://via.placeholder.com/150" alt="Your Profile" className="w-full h-full object-cover" />
      </div>
      <h2 className="text-2xl font-semibold mt-4">Your Name</h2>
      <div className="flex flex-col items-center mt-4">
        <p className="text-gray-500 mb-1">Your Email: <span className="font-semibold">NkTech@example.com</span></p>
        <p className="text-gray-500 mb-1">Your Phone: <span className="font-semibold">+92 123 456 7890</span></p>
        <p className="text-gray-500">Your Address: <span className="font-semibold">123 Street, City, Pakistan</span></p>
      </div>
      <div className="mt-4">
        {/* Add social media links or other relevant information here */}
        <a href="https://www.linkedin.com/in/your-linkedin-profile" className="text-blue-500 hover:underline">LinkedIn</a>
      </div>
    </div>
  );
}

export default AboutUs;