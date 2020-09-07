import React, { Component } from "react";
import Logo from "../assets/images/logo.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="#">
          <img src={Logo} />
        </a>
        <div>
          Designed by <a href="https://github.com/raulbarriga">Raul Barriga</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
