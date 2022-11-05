import React from "react";
import { useReducer } from "react";

const initialState = { count: 0 };

function setValue(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: (state.count = 0) };
    default:
      throw new Error("Oops");
  }
}

function Counter() {
  const [state, dispatch] = useReducer(setValue, initialState);

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleReset = () => dispatch({ type: "reset" });
  const handleDecrement = () => dispatch({ type: "decrement" });

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>Decrease</button>
    </div>
  );
}

export default Counter;
