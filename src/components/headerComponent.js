import React, { Component } from "react";
import Logo from '../assets/images/logo.png';

class Header extends Component {
  render() {
    return (
      <header>
        <div class="logo">
          <a href="#">
            <img src={Logo} />
          </a>
        </div>
        <nav>
          <a href="#">Bio</a>
          <a href="#">Tour</a>
          <a href="#">Music</a>
          <a href="#">Videos</a>
          <a href="#">Shop</a>
        </nav>
      </header>
    );
  }
}

export default Header;