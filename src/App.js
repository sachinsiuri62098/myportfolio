import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/project" Component={Project} />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/register" Component={Register} />
          <Route exact path="/login" Component={Login} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;