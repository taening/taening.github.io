import React, { PureComponent } from "react";
import styles from "./navbar.module.css";
import NavbarMenu from "./navbarMenu";
import HamburgerButton from "../button/hamburgerButton";
import ToggleButton from "../button/toggleButton";

class Navbar extends PureComponent {
  state = {
    menus: [
      { path: "/home", value: [<i className="fas fa-home"></i>, "Home"] },
      { path: "/about", value: [<i className="fas fa-user"></i>, "About"] },
      {
        path: "/skills",
        value: [<i className="fas fa-flask"></i>, "Skills"],
      },
      {
        path: "/projects",
        value: [<i className="fas fa-project-diagram"></i>, "Projects"],
      },
      {
        path: "/testimonials",
        value: [<i className="fas fa-address-card"></i>, "Testimonials"],
      },
      {
        path: "/contact",
        value: [<i className="fas fa-paper-plane"></i>, "Contact"],
      },
    ],
  };

  render() {
    return (
      <nav id={styles.navbar}>
        <div className={styles.navbar__logo}>
          <a href="/home">
            <div className={styles.navbar__logo__img}></div>
          </a>
        </div>
        <ul className={styles.navbar__menu}>
          {this.state.menus.map((menu) => {
            return (
              <NavbarMenu key={menu.path} value={menu.value} path={menu.path} />
            );
          })}
        </ul>
        <HamburgerButton />
        <ToggleButton icon={["far fa-sun", "far fa-moon"]} />
      </nav>
    );
  }
}

export default Navbar;
