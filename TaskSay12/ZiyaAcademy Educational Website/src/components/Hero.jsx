import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center text-white"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Darker blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#022851]/90 to-transparent"></div>

      {/* Hero Content */}
      <div className="relative z-10 pt-80 px-12 sm:px-16 lg:px-24">
        <div className="max-w-4xl space-y-8">
          {/* Headline & Description */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Unlock Your Potential
              <span className="block text-white">With Ziya Academy</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From school education to professional IT training — your complete learning solution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 pt-10">
  {/* Free Consultation */}
  <button className="btn-secondary flex items-center gap-2 border-primary-500 px-4 py-2 text-sm h-11">
    <span className="leading-none">Free Consultation</span>
    <span className="h-7 w-7 bg-white text-gray-900 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
      <ArrowRight className="h-4 w-4" />
    </span>
  </button>

  {/* Explore Courses */}
  <button className="btn-primary flex items-center gap-2 px-4 py-2 text-sm h-11">
    <span className="leading-none">Explore Courses</span>
    <span className="h-7 w-7 bg-white text-gray-900 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
      <ArrowRight className="h-4 w-4" />
    </span>
  </button>
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
