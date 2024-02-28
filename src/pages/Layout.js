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
    <div className="">
      <nav className="sticky top-0 z-10 w-full h-28 shadow-md bg-[#181C25] border-[#CB9D74] border-b overflow-hidden">
        <div className="w-screen px-8 lg:px-8 py-2 lg:py-4 flex justify-around gap-40 items-center text-blue-gray-900">
          <div className="cursor-pointer py-1.5 font-semibold justify-start text-2xl">
            <Link
              className="text-3xl text-[#CB9D74] font-mono transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#CB9D74] duration-300 hover:text-[#181C25]"
              to="/"
            >
              Apartments Lolita
            </Link>
          </div>
          <div className="flex items-center justify-center lg:gap-x-10 font-semibold jus text-3xl">
            {navList.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className=" text-2xl text-zinc-50 font-mono transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#CB9D74] duration-300 hover:text-[#181C25]"
              >
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
