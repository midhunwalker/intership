import React from 'react';
import { FaLaptop, FaChalkboardTeacher, FaSuitcase, FaUniversity } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-12 px-8"> 
      <div className="max-w-7xl mx-auto text-center py-0 pt-[200px] pb-[200px]"> 
        <h2 className="text-4xl font-bold text-black-600 mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 mb-12">Quality education for all levels and needs</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Service cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-600 text-white p-4 rounded-full mb-4 inline-block">
              <FaChalkboardTeacher size={30} />
            </div>
            <h3 className="text-xl font-semibold mb-2">School Coaching</h3>
            <p className="text-sm text-gray-600">LKG to +2 with personalized attention and CBSE/State syllabus</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-600 text-white p-4 rounded-full mb-4 inline-block">
              <FaUniversity size={30} />
            </div>
            <h3 className="text-xl font-semibold mb-2">NIOS/GNOU</h3>
            <p className="text-sm text-gray-600">Complete support for open schooling and distance education</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-600 text-white p-4 rounded-full mb-4 inline-block">
              <FaLaptop size={30} />
            </div>
            <h3 className="text-xl font-semibold mb-2">IT Training</h3>
            <p className="text-sm text-gray-600">Web development, app development, and software courses</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-600 text-white p-4 rounded-full mb-4 inline-block">
              <FaSuitcase size={30} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Internships</h3>
            <p className="text-sm text-gray-600">Hands-on experience with real-world projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;