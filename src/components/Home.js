import React from "react";
import Counter from "./Counter";
import { Helmet } from 'react-helmet';
import "./styles.css"
function Home() {
  return (
    <div className="Home">
      <h1>Counter</h1>
      <Counter />
      <Helmet>
        <title> React Counter App</title>
        <meta
          name={"Counter"}
          content={"React Counter built with useReducer to setValue, Increase, Decrease and Reset."}
        />
      </Helmet>
    </div>
  );
}

export default Home;
