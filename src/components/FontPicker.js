import React from 'react';

const FontPicker = ({ font, onChange }) => {
  const fonts = [
    'Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana', 'Comic Sans MS', 'Tahoma', 'Trebuchet MS', 'Impact', 'Lucida Console'
  ];

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="font-picker">Choose a font:</label>
      <select id="font-picker" value={font} onChange={handleChange}>
        {fonts.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontPicker;
