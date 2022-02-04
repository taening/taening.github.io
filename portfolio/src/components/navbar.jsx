import React, { PureComponent } from "react";
import NavbarMenu from "./navbarMenu";

class Navbar extends PureComponent {
  state = {
    menus: [
      { dataLink: "#home", value: [<i className="fas fa-home"></i>, "Home"] },
      { dataLink: "#about", value: [<i className="fas fa-user"></i>, "About"] },
      {
        dataLink: "#skills",
        value: [<i className="fas fa-flask"></i>, "Skills"],
      },
      {
        dataLink: "#works",
        value: [<i className="fas fa-project-diagram"></i>, "My Works"],
      },
      {
        dataLink: "#testimonials",
        value: [<i className="fas fa-address-card"></i>, "Testimonials"],
      },
      {
        dataLink: "#contact",
        value: [<i className="fas fa-paper-plane"></i>, "Contact"],
      },
    ],
  };

  render() {
    return (
      <nav id="navbar">
        <a href="#">
          <div className="navbar__logo"></div>
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
