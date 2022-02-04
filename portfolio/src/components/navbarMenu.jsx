import React, { PureComponent } from "react";

class NavbarMenu extends PureComponent {
  render() {
    return (
      <li className="navbar__menu__item" data-link={this.props.dataLink}>
        {this.props.value[0]} {this.props.value[1]}
      </li>
    );
  }
}

export default NavbarMenu;
