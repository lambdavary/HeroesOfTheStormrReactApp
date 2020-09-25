import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{}}>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
