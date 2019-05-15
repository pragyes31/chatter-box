import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// Complete Skype app by Friday 17th May
// Reach halfway of Book 2 by Ohans by Saturday EOD
