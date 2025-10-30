import React from 'react';

const RowComponent = ({ item }) => {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-8">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img src={item.imagePath} alt={item.title} className="w-72 h-72 object-cover rounded-2xl shadow-lg"/>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">{item.title}</h3>
            <p className="text-gray-700 leading-relaxed">{item.text}</p>
          </div>
        </div>
      </div>
    );
};

export default RowComponent;