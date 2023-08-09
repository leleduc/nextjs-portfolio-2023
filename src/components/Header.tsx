import React from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="w-full">
      <Topbar />
      <Navbar />
    </div>
  );
};

export default Header;
