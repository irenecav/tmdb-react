import React from "react";
import Search from "./Search";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark">
        <a href="#" className="text-white">
          Menu
          <span className="badge badge-pill badge-light ml-2">
            Nombre usuario
          </span>
        </a>
        <Search />
      </nav>
    );
  }
}

export default Navbar;
