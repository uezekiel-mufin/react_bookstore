import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      name: 'Books',
    },
    {
      id: 2,
      path: 'categories',
      name: 'Categories',
    },
  ];

  return (
    <div className="navbar">
      <nav>
        {
          links.map((link) => (
            <li key={link.id}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))
        }
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
