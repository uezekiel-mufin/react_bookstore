/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../redux/menu/menuSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = useState(1);
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

  const handleLink = (id) => {
    setActiveLink(id);
    dispatch(closeMenu());
  };
  return (
    <div className="fixed bg-[#fff] w-full z-100 flex px-4 md:px-24 py-4 md:py-7 h-screen">
      <div className="flex flex-col gap-8 w-full ">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl text-[#0290ff] font-bold">
            <Link to="/"> Bookstore cms </Link>
          </h1>
          <span
            className="md:hidden flex p-3 text-2xl"
            onClick={() => dispatch(closeMenu())}
            aria-hidden="true"
          >
            <AiOutlineCloseCircle
              style={{ fontSize: '2rem', color: '#0290ff' }}
            />
          </span>
        </div>
        <nav className="flex flex-col gap-4 items-start">
          {links.map((link) => (
            <li
              key={link.id}
              className={`list-none   font-semibold border-r border-solid  w-full border-[#0290ff] transition-all ease-in-out duration-300 ${
                activeLink === link.id
                  ? 'text-black text-2xl'
                  : 'text-gray-500 text-xl'
              }`}
              onClick={() => handleLink(link.id)}
              aria-hidden="true"
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
