import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import CompA from "./components/compA";
import CompB from "./components/compB";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <CompA />
      <CompB />
    </div>
  );
}

export default App;
