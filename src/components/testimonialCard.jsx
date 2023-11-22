import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  const { name, rating, content, url } = testimonial;

  return (
    <div className="bg-white max-w-sm rounded-xl overflow-hidden shadow-lg mx-5 w-80 h-64">
      <div className="px-6 pt-4 flex justify-between items-center">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star, index) => (
            <span key={index} className={index < rating ? 'text-yellow-500 text-3xl' : 'text-gray-300 text-3xl'}>&#9733;</span>
          ))}
        </div>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{content}</p>
        <div className="flex mt-8">
          <img 
          className='w-12 h-12'
          src={url}
          />
          <p className="flex items-center font-bold text-xl pl-3">{name}</p>
        </div>
      </div>
    </div>

  );
};

export default TestimonialCard;
