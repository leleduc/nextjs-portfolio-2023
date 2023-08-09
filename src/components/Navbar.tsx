'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { menuData } from '@/api/data';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  library.add(fas);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    return;
  };
  return (
    <div className="relative container mx-auto bg-white px-[15px] py-[5px] flex justify-between items-center rounded-lg">
      {/* Logo */}
      <div>leleduc</div>
      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex justify-start items-center gap-4">
          {menuData.map((item, index) => (
            <li key={index}>
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Button */}
      <div className="flex justify-end items-center gap-10 text-white">
        <div
          onClick={toggleMenu}
          className="primaryBtn md:hidden cursor-pointer"
        >
          {menuOpen ? (
            <FontAwesomeIcon className="w-6 h-6" icon={['fas', 'bars']} />
          ) : (
            <FontAwesomeIcon className="w-6 h-6" icon={['fas', 'x']} />
          )}
        </div>
        <button className="primaryBtn">
          Ok
          <FontAwesomeIcon icon={['fas', 'arrow-right']} className="w-4 h-4" />
        </button>
      </div>
      {/* Mobile Menu */}
      <div className="sticky top-0 left-0 h-full w-[60%] pl-4 bg-blue flex flex-col  ">
        <ul className="flex flex-col justify-start items-center gap-4">
          {menuData.map((item, index) => (
            <li key={index}>
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
