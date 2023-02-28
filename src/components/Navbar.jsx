import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Navbar = () => (
  <div className="navbar">
    <Header />
    <Outlet />
  </div>
);

export default Navbar;
