import React, { Component } from "react";
import styles from "./toggleButton.module.css";

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
      <div className={styles.toggleButton} onClick={this.handleClick}>
        <div className={styles.leftContainer}>
          <i className={leftIcon}></i>
        </div>
        <div className={styles.rightContainer}>
          <i className={rightIcon}></i>
        </div>
        <div
          className={styles.toggle}
          style={this.state.checked ? lightStyle : darkStyle}
        ></div>
      </div>
    );
  }
}

export default ToggleButton;
