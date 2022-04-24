import React, { useReducer } from 'react';

const ReducerTutorial = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + 1 };
      case 'changeColor':
        if (state.count % 2 === 0) {
          return { ...state, color: 'red' };
        }
        return { ...state, color: 'black' };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0, color: 'red' });

  return (
    <div>
      <h1>usReducer</h1>
      <p
        style={{
          color: state.color,
          fontSize: '30px',
          fontWeight: 'bold',
        }}
      >
        {state.count}
      </p>
      <button
        onClick={() => {
          dispatch({ type: 'increment' });
          dispatch({ type: 'changeColor' });
        }}
      >
        ++
      </button>
    </div>
  );
};

export default ReducerTutorial;
