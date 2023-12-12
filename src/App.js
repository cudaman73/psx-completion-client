import "./bootstrap.min.css";
import "./App.css"
import Navbar from "./Components/navbar";
import React from "react";
import Home from "./Home";
import Completed from "./Completed";
import Uncompleted from "./Uncompleted";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequireAuth from "./Components/requireAuth";

function App() {

  return (
    <div className="App">
    <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={
        <RequireAuth>
          <Home/>
        </RequireAuth>} />
      <Route exact path="/completed" element={<RequireAuth>
        <Completed/>
      </RequireAuth>} />
      <Route exact path="/uncompleted" element={
        <RequireAuth>
          <Uncompleted/>
        </RequireAuth>
      } />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/register" element={<Register/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
