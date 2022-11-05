import React from "react";
import "./styles.css";
import { useReducer } from "react";
import Navbar from "./Navbar/Navbar";

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

function Reducer() {
  const [state, dispatch] = useReducer(setValue, initialState);

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleReset = () => dispatch({ type: "reset" });
  const handleDecrement = () => dispatch({ type: "decrement" });

  return (
    <div className="Reducer">
    <Navbar />
      <div className="Container ">
        <div>
          <h1>Counter</h1>
          <h2>{state.count}</h2>
          <button onClick={handleIncrement}>Increase</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleDecrement}>Decrease</button>
        </div>
      </div>
    </div>
  );
}

export default Reducer;
