import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// Define your navList as an array of objects
const navList = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/reviews', label: 'Reviews' },
];

const Layout = () => {
  return (
    <div className="overflow-x-hidden ">
      <nav className="fixed top-0 z-10 w-full h-28 shadow-md backdrop-filter backdrop-blur-3xl">
        <div className="max-w-screen-lg  px-8 lg:px-8 py-2 lg:py-4 flex justify-between items-center text-blue-gray-900">
          <div className="cursor-pointer py-1.5 font-semibold justify-start text-2xl">
            <Link to="/">Apartments Lolita</Link>
          </div>
          <div className="flex items-center justify-between lg:gap-x-10 font-semibold text-xl">
            {navList.map((item) => (
              <Link key={item.label} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
