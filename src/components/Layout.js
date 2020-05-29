import React, { useState } from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar toggleNavbar={toggleNavbar} />
      {children}
    </>
  )
}

export default Layout;
