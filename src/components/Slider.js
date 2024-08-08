import React, { useState } from 'react';

const Slider = ({value,onChange}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <input
        type="range"
        min="3"
        max="200"
        value={value}
        onChange={handleChange}
      />
      <p>font size: {value}px</p>
    </div>
  );
};

export default Slider;