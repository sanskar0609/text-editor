import React from 'react';

const Colorpicker = ({ color, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={handleChange}
      />
      <p>Selected color: {color}</p>
    </div>
  );
};

export default Colorpicker;
