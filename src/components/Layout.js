import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar toggleNavbar={toggleNavbar} isOpen={isOpen} />
        <Sidebar isOpen={isOpen} />
      {children}
      <Footer />
    </>
  )
}

export default Layout;
