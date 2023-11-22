import React, { useState } from 'react';

const LayananCard = ({ url, title, description }) => {

  return (
    <div className="bg-[#FBFBFB] px-4 pt-5 h-48 w-48 shadow-md rounded-md cursor-pointer transition duration-300 transform hover:scale-105"
    
    >
      <img src={url} alt="Icon" className="w-14 h-14 mb-4 mx-auto" />
      <h3 className="text-lg font-semibold text-center">{title}</h3>
      <p className="text-gray-600 text-sm text-center">{description}</p>
      <div className='box'>
            
            </div>
    </div>
  );
};

export default LayananCard;
