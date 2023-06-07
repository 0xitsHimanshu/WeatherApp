import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/0xitsHimanshu/WeatherApp">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/0xitshimanshuyadav/">
          Himanshu 
        </a>{" "}
         with ❤️
      </div>
    </React.Fragment>
  );
}

export default App;
