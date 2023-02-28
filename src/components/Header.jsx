/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineMenuFold } from 'react-icons/ai';
import Sidebar from './Sidebar';
import { openMenu } from '../redux/menu/menuSlice';

const Header = () => {
  const [activeLink, setActiveLink] = useState(1);
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.menuBar);
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

  const handleLink = () => {
    dispatch(openMenu());
  };
  return (
    <div className=" w-full shadow-md bg-white">
      {menu && (
        <div className="md:hidden animate-slide-in fixed z-100  h-full w-full bg-white transition-all ease-in-out duration-500 ">
          <Sidebar />
        </div>
      )}
      <div className="flex justify-between items-center px-4 md:px-24 py-4 md:py-7">
        <div className="flex gap-8 items-center">
          <h1 className="text-3xl text-[#0290ff] font-bold">
            <Link to="/"> Bookstore cms </Link>
          </h1>
          <nav className="hidden md:flex gap-8 items-center">
            {links.map((link) => (
              <li
                key={link.id}
                className={`list-none text-sm transition-all ease-in-out duration-400 ${
                  activeLink === link.id
                    ? 'text-black text-xl'
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveLink(link.id)}
                aria-hidden="true"
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </nav>
        </div>
        <span className="hidden md:flex rounded-full border border-solid p-3 text-lg">
          <BsFillPersonFill style={{ color: '#0290ff' }} />
        </span>
        <span
          className="md:hidden flex p-3 text-2xl"
          onClick={() => handleLink()}
          aria-hidden="true"
        >
          <AiOutlineMenuFold style={{ fontSize: '2rem', color: '#0290ff' }} />
        </span>
      </div>
    </div>
  );
};

export default Header;
