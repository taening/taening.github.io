import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/js/all.js";

import "./app.css";
import Home from "./components/home/home";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/home"} element={<Home />} />
          <Route exact path={"/about"} element={<About />} />
          <Route exact path={"/skills"} element={<Skills />} />
          <Route exact path={"/projects"} element={<Projects />} />
          <Route exact path={"/testimonials"} element={<Testimonials />} />
          <Route exact path={"/contact"} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
