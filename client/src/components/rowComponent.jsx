import React from 'react';

const RowComponent = ({ item }) => {
    return (
      <div className="row">
        <img src={item.imagePath} alt="Row content" className='images' />
        <div className="text-content">
          <h3 className='title'>{item.title}</h3>
          <p className='text'>{item.text}</p>
        </div>
      </div>
    );
  };

export default RowComponent;