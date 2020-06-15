import React, { useState } from 'react';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <LayoutWrapper>
      <Navbar toggleNavbar={toggleNavbar} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} />
      <ScrollUpButton
        AnimationDuration={500}
        ContainerClassName='ScrollUpButton__Container'
        TransitionClassName='ScrollUpButton__Toggled'
      />
      {children}
      <Footer />
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
.ScrollUpButton__Container.ScrollUpButton__Toggled,
.ScrollUpButton__Container {
  fill: white !important;
  background-color: var(--mainPurple) !important;
  border-radius: 50%;
  height: 35px !important;
  width: 35px !important;
  padding: 5px !important;
}

@media(max-width: 450px){
  .ScrollUpButton__Container.ScrollUpButton__Toggled,
.ScrollUpButton__Container{
  display:none;
}
}
`;
export default Layout;
