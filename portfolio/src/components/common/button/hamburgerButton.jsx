import React, { Component } from "react";
import styles from "./button.module.css";

class HamburgerButton extends Component {
  state = {
    isOpen: false,
  };

  handleClick = () => {
    const [top, middle, bottom] =
      document.querySelector(".hamburgerBar").childNodes;

    if (this.state.isOpen === true) {
      top.style.transform = "translateY(0px) rotate(0deg)";
      middle.style.opacity = "1";
      bottom.style.transform = "translateY(0px) rotate(0deg)";
      this.setState({ isOpen: false });
    } else {
      top.style.transform = "translateY(9px) rotate(45deg)";
      middle.style.opacity = "0";
      bottom.style.transform = "translateY(-9px) rotate(-45deg)";
      this.setState({ isOpen: true });
    }
  };

  render() {
    return (
      <span className={styles.hamburgerBar} onClick={this.handleClick}>
        <span className={styles.top}></span>
        <span className={styles.middle}></span>
        <span className={styles.bottom}></span>
      </span>
    );
  }
}

export default HamburgerButton;
