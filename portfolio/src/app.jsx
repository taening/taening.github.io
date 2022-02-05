import React, { Component } from "react";
import "@fortawesome/fontawesome-free/js/all.js";

import "./app.css";
import Navbar from "./components/navbar";
import Section from "./components/section";
import Footer from "./components/footer";

class App extends Component {
  state = {
    id: ["home", "about", "skills", "works", "testimonials", "contact"],
  };

  render() {
    return (
      <>
        <Navbar />
        {this.state.id.map((id) => {
          return <Section key={id} id={id} />;
        })}
        <Footer />
      </>
    );
  }
}

export default App;
