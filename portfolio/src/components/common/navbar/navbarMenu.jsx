import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

class NavbarMenu extends PureComponent {
  render() {
    return (
      <Link to={this.props.path}>
        <li className={styles.navbar__menu__item}>
          <div className={styles.contents}>
            <span>{this.props.value[0]}</span>
            <span>{this.props.value[1]}</span>
          </div>
        </li>
      </Link>
    );
  }
}

export default NavbarMenu;
