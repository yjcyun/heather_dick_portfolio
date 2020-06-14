import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavLinks from '../constants/links';
import SocialLinks from '../constants/socialLinks';



const Sidebar = ({ isOpen, toggleNavbar }) => {
  
  useEffect(() => {
    isOpen && (document.body.style.overflow = "hidden");
    !isOpen && (document.body.style.overflow = "");
  }, [isOpen]);
  return (
    <SidebarWrapper>
      <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
        <div className="side-container">
          <NavLinks styleClass={`${isOpen ? 'sidebar-links' : ''}`} />
          <SocialLinks styleClass={`${isOpen ? 'sidebar-icons' : ''}`} />
        </div>
      </aside>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div`
.sidebar{
  background: white;
  position: fixed;
  top: 80px;
  left:0;
  width: 100%;
  height: calc(100vh - 80px);
  z-index:100;
  display:grid;
  place-items:center;
  opacity: 0 ;
  transition: var(--transition);
  transform: translateX(100%);
}
.show-sidebar {
  opacity:1;
  transform: translateX(0);
}
.sidebar-links li {
  opacity: 0;
}
.sidebar-links li a{
  display: block;
  text-align:center;
  color: var(--clr-black);
  font-size: 2.5rem;
  font-weight: bold;
  transition: var(--transition);
  margin-bottom: 0.5rem;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
}
.sidebar-links li a:hover{
  color: var(--clr-hover);
}
.sidebar-icons li {
  margin: auto;
}
.sidebar-icons li a {
  font-size: 2.5rem;
  padding: 0 1rem;
}
.social-links {
  width: auto;
}

}

@media (min-width: 996px) {
  .sidebar {
    transform: translateX(-100%);
  }
}
/*
=============== 
Sidebar Animation
===============
*/
.sidebar-links li {
  animation: slideRight 0.5s ease-in-out 0.3s forwards;
}
.sidebar-links li:nth-of-type(1) {
  animation-delay: 200ms;
}
.sidebar-links li:nth-of-type(2) {
  animation-delay: 400ms;
}
.sidebar-links li:nth-of-type(3) {
  animation-delay: 600ms;
}


@keyframes slideRight {
  0% {
    transform: translateX(200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.sidebar-icons li {
  opacity: 0;
  animation: slideUp 0.5s ease-in-out 0.3s forwards;
}
.sidebar-icons li:nth-of-type(1) {
  animation-delay: 150ms;
}
.sidebar-icons li:nth-of-type(2) {
  animation-delay: 300ms;
}
.sidebar-icons li:nth-of-type(3) {
  animation-delay: 450ms;
}
.sidebar-icons li:nth-of-type(4) {
  animation-delay: 600ms;
}

@keyframes slideUp {
  0% {
    transform: translateY(200px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

`;
export default Sidebar
