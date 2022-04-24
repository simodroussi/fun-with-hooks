import React, { useState, useRef } from 'react';

const RefTutorial = () => {
  const divRef = useRef();
  return (
    <div>
      <h1>useRef</h1>
      <div
        ref={divRef}
        style={{
          height: '100px',
          width: '100px',
          margin: '20px auto',
          backgroundColor: 'black',
        }}
      ></div>
      <label htmlFor="increments">Change box color:&nbsp;</label>
      <select
        name="changeBG"
        id="changeBG"
        onChange={(e) =>
          (divRef.current.style.backgroundColor = e.target.value)
        }
      >
        <option value="black">Black</option>
        <option value="yellow">Yellow</option>
        <option value="red">Red</option>
      </select>
    </div>
  );
};

export default RefTutorial;
