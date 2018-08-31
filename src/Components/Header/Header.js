import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div>JSKart</div>
        <Link to="/cart">
          <div>Cart</div>
        </Link>
      </div>
    );
  }
}

export default Header;
