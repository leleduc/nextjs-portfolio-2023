import React from 'react';
import {
  logoData,
  menuData,
  socialData,
  serviceData,
  contactData,
} from '@/api/data';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  library.add(fab);
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="container mx-auto pb-10  flex flex-wrap text-center gap-10">
        {/* Logo */}
        <div className="group">
          {/* Logo */}
          <div className="title text-white">{logoData.title}</div>

          {/* Slogan */}
          <p className="md:text-left w-[80%] md:w-full mx-auto">
            {logoData.slogan}
          </p>

          {/* Social */}
          <div className="flex justify-center md:justify-start items-center md:items-start gap-4">
            {socialData.map((item, index) => (
              <Link key={index} href={item.url}>
                <FontAwesomeIcon
                  icon={['fab', item.icon]}
                  className="icon social"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Menu */}
        <div className="group">
          <h2 className="title">Links</h2>
          <ul className="itemsWrap">
            {menuData.map((item, index) => (
              <li key={index} className="item">
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service */}
        <div className="group">
          <h2 className="title">Services</h2>
          <ul className="itemsWrap">
            {serviceData.map((item, index) => (
              <li key={index} className="item">
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Infor */}
        <div className="group">
          <h2 className="title">My Info:</h2>
          <ul className="itemsWrap">
            {contactData.map((item, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row md:gap-4 xl:flex-col xl:gap-0 justify-center items-center"
              >
                <FontAwesomeIcon
                  icon={['fas', item.icon]}
                  className="icon text-blue-500"
                />
                <span className="item">{item.data}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full bg-gray-500 h-[1px]"></div>
      <div className="container mx-auto pt-10 flex flex-col xl:flex-row xl:gap-4 justify-center items-center">
        <span>Copyright © {currentYear} - All Rights Reserved.</span>
        <span>Made by {logoData.title}</span>
      </div>
    </div>
  );
};

export default Footer;
