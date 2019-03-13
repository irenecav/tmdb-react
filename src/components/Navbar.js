import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark">
        <a href="javascript:void(0)" className="text-white">
          Menu
          <span className="badge badge-pill badge-light ml-2">
            Nombre usuario
          </span>
        </a>
        <Link to="/">Home</Link>
        <Link to="/collections">Colecciones</Link>
        <Link to="/collection/15">Colección 15</Link>
        <Link to="/movie/69">Movie 69</Link>
        <Search />
      </nav>
    );
  }
}

export default Navbar;
