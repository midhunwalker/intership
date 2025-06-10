import React from 'react';

const BannerAd = ({ position = 'top', imageUrl, altText = 'Advertisement', link = '#' }) => {
  const defaultImage = position === 'top' 
    ? 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200&h=300&fit=crop'
    : 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200&h=300&fit=crop';

  return (
    <div className="w-full mb-6">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative overflow-hidden rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
          <img 
            src={imageUrl || defaultImage}
            alt={altText}
            className="w-full h-32 md:h-40 object-cover"
          />
          <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
            Ad
          </div>
        </div>
      </a>
    </div>
  );
};

export default BannerAd;