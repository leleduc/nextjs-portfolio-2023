'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { menuData } from '@/api/data';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  library.add(fas, fab);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    return;
  };
  return (
    <div className="relative container mx-auto bg-white px-[15px] py-[5px] flex justify-between items-center rounded-lg">
      {/* Logo */}
      <div className="logo">leleduc</div>
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
            <FontAwesomeIcon className="w-6 h-6" icon={['fas', 'x']} />
          ) : (
            <FontAwesomeIcon className="w-6 h-6" icon={['fas', 'bars']} />
          )}
        </div>
        <button className="primaryBtn">
          Ok
          <FontAwesomeIcon icon={['fas', 'arrow-right']} className="w-4 h-4" />
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={
          menuOpen
            ? 'mNavbar w-96 max-w-[75%] visibility opacity-100'
            : 'mNavbar w-0 invisible opacity-0'
        }
      >
        {/* Logo */}
        <div className="py-[21px] pl-[20px] logo">leleduc</div>

        {/* Menu */}
        <div className="py-[21px] pl-[20px]">
          <ul className="flex flex-col justify-start items-left gap-4">
            {menuData.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Icon */}
        <div className="py-[21px] pl-[20px] flex flex-col gap-6">
          <div className="flex justify-start items-center gap-6">
            <FontAwesomeIcon
              icon={['fab', 'facebook-f']}
              className="icon social"
            />
            <FontAwesomeIcon
              icon={['fab', 'twitter']}
              className="icon social"
            />
            <FontAwesomeIcon
              icon={['fab', 'youtube']}
              className="icon social"
            />
            <FontAwesomeIcon
              icon={['fab', 'linkedin']}
              className="icon social"
            />
          </div>

          <div className="flex justify-start items-center gap-2">
            <FontAwesomeIcon
              icon={['fas', 'envelope']}
              className="icon text-blue"
            />
            <span>leleduc@gmail.com</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <FontAwesomeIcon
              icon={['fas', 'phone']}
              className="icon text-blue"
            />
            <span>+84 918 983 869</span>
          </div>

          <div className="flex justify-start items-center gap-9"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
