import React, { PureComponent } from "react";
import NavbarMenu from "./navbarMenu";

class Navbar extends PureComponent {
  state = {
    menus: [
      { dataLink: "#home", value: "Home" },
      { dataLink: "#about", value: "About" },
      { dataLink: "#skills", value: "Skills" },
      { dataLink: "#works", value: "My Works" },
      { dataLink: "#testimonials", value: "Testimonials" },
      { dataLink: "#contact", value: "Contact" },
    ],
  };

  render() {
    return (
      <nav id="navbar">
        <a href="#">
          <div className="navbar__logo"></div>
          <b>Paul</b>
        </a>
        <ul className="navbar__menu">
          {this.state.menus.map((menu) => {
            return (
              <NavbarMenu
                key={menu.dataLink}
                value={menu.value}
                dataLink={menu.dataLink}
              />
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
