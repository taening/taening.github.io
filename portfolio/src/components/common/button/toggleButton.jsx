import React, { Component } from "react";
import styles from "./button.module.css";

class ToggleButton extends Component {
  state = {
    checked: false,
  };

  handleClick = () => {
    this.state.checked
      ? this.setState({ checked: false })
      : this.setState({ checked: true });
  };

  render() {
    const darkStyle = {
      transform: "translate(0px)",
      backgroundColor: "black",
    };

    const lightStyle = {
      transform: "translate(24px)",
      backgroundColor: "white",
    };
    const [leftIcon, rightIcon] = this.props.icon;
    return (
      <div className={styles.button__container} onClick={this.handleClick}>
        <div className={styles.left__image}>
          <i className={leftIcon}></i>
        </div>
        <div className={styles.right__image}>
          <i className={rightIcon}></i>
        </div>
        <div
          className={styles.button}
          style={this.state.checked ? lightStyle : darkStyle}
        ></div>
      </div>
    );
  }
}

export default ToggleButton;
