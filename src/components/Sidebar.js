import React, { useEffect } from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import styled from 'styled-components';
import NavLinks from '../constants/links';
import SocialLinks from '../constants/socialLinks';

const Sidebar = ({ isOpen }) => {
  // Prevent scroll when sidebar is open
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
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  opacity: 0 ;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}

.show-sidebar {
  opacity:1;
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

.sidebar-links li a{
  display: block;
  text-align:left;
  color: var(--darkPurple);
  font-size: 32px;
  font-size: 2rem;
  font-weight: bold;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  margin-bottom: 8px;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  letter-spacing: 0.1rem;
}

.social-links-wrapper{
  margin-top: 32px;
  margin-top: 2rem;
}

.social-links {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
}

.social-icon{
  font-size: 32px;
  font-size:2rem;
  color: var(--darkPurple);
}

@media (min-width: 996px) {
  .sidebar {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
`;

export default Sidebar