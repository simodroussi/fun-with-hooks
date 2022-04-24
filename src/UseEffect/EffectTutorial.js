import React, { useEffect, useState } from 'react';
import axios from 'axios';

const randomInt = () => {
  return Math.floor(Math.random() * 500);
};

const EffectTutorial = () => {
  const [randomIndex, setRandomIndex] = useState(randomInt());
  const [data, setData] = useState([]);

  useEffect(() => {
    setRandomIndex(randomInt());
    axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
      setData(res.data);
      console.log('api was callled');
    });
  }, []);

  return (
    <div>
      <h1>useEffect</h1>
      <h2>{data[randomIndex]?.email}</h2>
      <button onClick={() => setRandomIndex(randomInt())}>
        Show random email
      </button>
    </div>
  );
};

export default EffectTutorial;
