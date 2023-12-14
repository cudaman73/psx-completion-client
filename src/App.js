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
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>} />
        <Route exact path="/completed" element={<ProtectedRoute>
          <Completed/>
        </ProtectedRoute>} />
        <Route exact path="/uncompleted" element={
          <ProtectedRoute>
            <Uncompleted/>
          </ProtectedRoute>
        } />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
