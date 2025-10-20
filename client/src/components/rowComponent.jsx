import React from 'react';

const RowComponent = ({ item }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto px-6 py-16">
      {/* Image */}
      <img 
        src={item.imagePath} 
        alt="Row content" 
        className="w-80 h-80 rounded-3xl object-cover shadow-2xl flex-shrink-0" 
      />
      
      {/* Text Content */}
      <div className="flex-1">
        <h3 className="text-4xl font-bold text-gray-900 mb-6">{item.title}</h3>
        <p className="text-lg text-gray-700 leading-relaxed">{item.text}</p>
      </div>
    </div>
  );
};

export default RowComponent;