import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import "./styles.css";

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);
  return {
    value: count,
    increase: () => setCount((prevCount) => prevCount + 1),
    decrease: () => setCount((prevCount) => prevCount - 1),
    reset: () => setCount(initialCount),
  };
};

function CustomHook({ initialCount }) {
  const counter = useCounter(initialCount);
  return (
    <div className="CustomHook">
    <Navbar />
      <div className="Container ">
        <div>
          <h1>Counter</h1>
          <h2>{counter.value}</h2>
          <button onClick={counter.increase}>Increase</button>
          <button onClick={counter.reset}>Reset</button>
          <button onClick={counter.decrease}>Decrease</button>
        </div>
      </div>
    </div>
  );
}

export default CustomHook;
