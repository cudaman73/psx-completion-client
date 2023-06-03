import "./bootstrap.min.css";
import "./App.css"
import Navbar from "./Components/navbar";
import React from "react";
import Home from "./Home";
import Completed from "./Completed";
import Uncompleted from "./Uncompleted";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
    <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/completed" element={<Completed/>} />
      <Route exact path="/uncompleted" element={<Uncompleted/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
