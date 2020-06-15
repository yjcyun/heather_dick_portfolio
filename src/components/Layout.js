import React, { useState } from 'react';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
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
      <ScrollUpButton
        AnimationDuration={1000}
        ContainerClassName='ScrollUpButton__Container'
        TransitionClassName='ScrollUpButton__Toggled'
      />
      {children}
      <Footer />
    </>
  )
}

export default Layout;
