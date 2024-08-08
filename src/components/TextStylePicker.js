import React from 'react';

const TextStylePicker = ({ styles, onChange }) => {
  const handleChange = (event) => {
    const { name, checked } = event.target;
    onChange(name, checked);
  };

  const mar={
    margin:10,
    fontSize:30
  }
  
  const siz={
    width:20,
    height:20
  }
  return (
    <div>
      <label style={mar}>
        <input
          type="checkbox"
          name="bold"
          checked={styles.bold}
          onChange={handleChange}
          style={siz}
        />
        Bold
      </label>
      <label style={mar}>
        <input
          type="checkbox"
          name="italic"
          checked={styles.italic}
          onChange={handleChange}
          style={siz}

        />
        Italic
      </label>
      <label style={mar}>
        <input
          type="checkbox"
          name="underline"
          checked={styles.underline}
          onChange={handleChange}
          style={siz}
        />
        Underline
      </label>
    </div>
  );
};

export default TextStylePicker;
