import React from 'react';
import Search from './Search';
import Link from 'react-router-dom/Link';

const Navbar = () => (
  <nav className="navbar navbar-dark">
    <a href="javascript:void(0)" className="text-white">
      Menu
      <span className="badge badge-pill badge-light ml-2">Nombre usuario</span>
    </a>
    <Link to="/">Home</Link>
    <Link to="/collections">Colecciones</Link>
    <Search />
  </nav>
);

export default Navbar;
