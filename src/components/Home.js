import React from "react";
import { Helmet } from "react-helmet";
import "./styles.css";
import Navbar from "./Navbar/Navbar";
function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="Container">
      <p>Counter built with Custom Hook and useReducer</p>
      {/* <CustomHook initialCount={1} /> */}
      <Helmet>
        <title> React Counter App</title>
        <meta
          name={"Counter"}
          content={
            "React Counter built with useReducer to setValue, Increase, Decrease and Reset."
          }
        />
      </Helmet>
    </div>
    </div>
    
  );
}

export default Home;
