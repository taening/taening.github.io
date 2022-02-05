import React, { Component } from "react";

class Section extends Component {
  render() {
    return <section id={this.props.id}>{this.props.id}</section>;
  }
}

export default Section;
