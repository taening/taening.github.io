import React, { PureComponent } from "react";

class NavbarMenu extends PureComponent {
  render() {
    return (
      <li className="navbar__menu__item" data-link={this.props.dataLink}>
        {this.props.value}
      </li>
    );
  }
}

export default NavbarMenu;
