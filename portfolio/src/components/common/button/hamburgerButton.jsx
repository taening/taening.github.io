import React, { Component } from "react";
import styles from "./hamburgerButton.module.css";

class HamburgerButton extends Component {
  state = {
    isOpen: false,
  };

  handleClick = () => {
    this.state.isOpen
      ? this.setState({ isOpen: false })
      : this.setState({ isOpen: true });
  };

  render() {
    const openStyle = {
      top: {
        transform: "translateY(9px) rotate(45deg)",
      },
      middle: {
        opacity: "0",
      },
      bottom: {
        transform: "translateY(-9px) rotate(-45deg)",
      },
    };

    const closeStyle = {
      top: {
        transform: "translateY(0px) rotate(0deg)",
      },
      middle: {
        opacity: "1",
      },
      bottom: {
        transform: "translateY(0px) rotate(0deg)",
      },
    };

    return (
      <div className={styles.hamburgerButton} onClick={this.handleClick}>
        <span
          className={styles.bar}
          style={this.state.isOpen ? openStyle.top : closeStyle.top}
        ></span>
        <span
          className={styles.bar}
          style={this.state.isOpen ? openStyle.middle : closeStyle.middle}
        ></span>
        <span
          className={styles.bar}
          style={this.state.isOpen ? openStyle.bottom : closeStyle.bottom}
        ></span>
      </div>
    );
  }
}

export default HamburgerButton;
