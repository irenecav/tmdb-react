import React from 'react';
import Search from './Search';
import Link from 'react-router-dom/Link';

const Navbar = () => (
  <nav className="navbar navbar-dark">
  <div className="menu">
    <Link to="/">Home</Link>
    <Link to="/collections">Colecciones</Link>
    </div>
    <Search />
  </nav>
);

export default Navbar;
