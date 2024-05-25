import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/shankyyyy/project" target="_blank">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="/">
          Shashank Yadav
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
