import React from 'react';

const ShadowPicker = ({ shadow, onChange }) => {
  const shadows = {
    'None': 'none',
    'Gray Shadow': '2px 2px 5px gray',
    'Black Shadow': '5px 5px 15px black',
    'Light Shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    'Soft Black Shadow': '10px 10px 20px rgba(0, 0, 0, 0.19)',
    'Dark Shadow': '0 0 10px rgba(0, 0, 0, 0.5)',
  };

  const handleChange = (event) => {
    onChange(shadows[event.target.value]);
  };

  return (
    <div>
      <label htmlFor="shadowPicker">Select Shadow</label>
      <select id="shadowPicker" value={Object.keys(shadows).find(key => shadows[key] === shadow)} onChange={handleChange}>
        {Object.keys(shadows).map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ShadowPicker;
