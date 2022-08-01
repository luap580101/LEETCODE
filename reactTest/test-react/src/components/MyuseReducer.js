import React, { useReducer } from "react";

const MyuseReducer = () => {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>Count : {state.count}<button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button></div>
    </>
  );
};

export default MyuseReducer;
