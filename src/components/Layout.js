import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar toggleNavbar={toggleNavbar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout;
