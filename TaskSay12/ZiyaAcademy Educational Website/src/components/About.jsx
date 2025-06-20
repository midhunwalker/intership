import React from 'react';
import aboutImage1 from '../assets/image1.jpg';
import aboutImage2 from '../assets/image2.jpg';

const AboutUs = () => {
  return (
    <section id="about" className="bg-white py-16 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 relative">
  {/* First Image */}
  <img
    src={aboutImage1}
    alt="Team working"
    className="w-[80%] h-auto object-cover rounded-lg ml-[150px] pt-10" 
  />

  {/* Second Image*/}
  <img
    src={aboutImage2}
    alt="Classroom"
    className="absolute top-[400px] right-4 w-1/2 border-4 border-white shadow-lg rounded-[40px] transform rotate-[-20deg]"
  />
</div>

        {/*Text Content */}
        <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left  pt-[110px]">
          <h2 className="text-3xl font-bold text-black mb-4">___ About Us ___</h2>
          <p className="text-lg mb-4">
            Ziya Academy is more than just an educational institution, it's a place where potential meets purpose. Our mission is to empower students through personalized education and skill-building, helping them unlock their strengths and achieve their academic and career goals.
          </p>
          <p className="text-lg mb-8">
            At Ziya Academy, we believe that quality education lays the foundation for a brighter future. That’s why we are committed to delivering high-impact learning experiences through qualified tutors, tailored teaching methods, and a student-first approach.
          </p>

          {/* Stats Section */}
          <div className="w-[70%] mx-auto px-[50px] flex justify-center md:justify-start space-x-12 mb-8 pt-[50px] scale-[0.9] md:scale-[0.85]">
  <div className="text-center w-32">
    <h3 className="text-3xl font-bold text-black">100+</h3>
    <p className="text-sm text-gray-600 whitespace-nowrap">Completed Projects</p>
  </div>
  <div className="text-center w-32">
    <h3 className="text-3xl font-bold text-black">500+</h3>
    <p className="text-sm text-gray-600 whitespace-nowrap">Satisfied Customers</p>
  </div>
  <div className="text-center w-32">
    <h3 className="text-3xl font-bold text-black">10+</h3>
    <p className="text-sm text-gray-600 whitespace-nowrap">Years of Mastery</p>
  </div>
  <div className="text-center w-32">
    <h3 className="text-3xl font-bold text-black">25+</h3>
    <p className="text-sm text-gray-600 whitespace-nowrap">Employees</p>
  </div>
</div>


          
         {/* Explore More Button */}
         <div className="text-center pl-80">
  <button className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
    Explore More
  </button>
</div>


        </div>
      </div>
    </section>
  );
};

export default AboutUs;
