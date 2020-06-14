import React, { useEffect } from 'react';
import { FaRegEnvelope } from 'react-icons/fa';

import styled from 'styled-components';
import NavLinks from '../constants/links';
import SocialLinks from '../constants/socialLinks';



const Sidebar = ({ isOpen }) => {

  useEffect(() => {
    isOpen && (document.body.style.overflow = "hidden");
    !isOpen && (document.body.style.overflow = "");
  }, [isOpen]);

  return (
    <SidebarWrapper>
      <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
        <div className="side-container">
          <NavLinks styleClass={`${isOpen ? 'sidebar-links' : ''}`} />
          <div className="social-links-wrapper">
            <SocialLinks styleClass="social-links contact" home/>
            <a href={`mailto:%69%6E%66%6F%40%68%65%61%74%68%65%72%64%69%63%6B%2E%63%6F%6D`} >
              <FaRegEnvelope className="social-icon email-icon"
              />
            </a>
          </div>
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


.sidebar-links li a{
  display: block;
  text-align:left;
  color: var(--darkPurple);
  font-size: 2rem;
  font-weight: bold;
  transition: var(--transition);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}

.social-links-wrapper{
  display:flex;
  justify-content:center;
  margin-top: 2rem;
}

.social-links {
  display:flex;
}

.social-icon, .email-icon{
  font-size:2rem;
  color: var(--darkPurple);
}


@media (min-width: 996px) {
  .sidebar {
    transform: translateX(-100%);
  }
}

`;
export default Sidebar
