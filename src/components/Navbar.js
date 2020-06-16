import React from 'react';
import styled from 'styled-components';
import NavLinks from '../constants/links';
import Logo from './Logo';
import Burger from './Burger';

const Navbar = ({ toggleNavbar, isOpen }) => {
  return (
    <NavbarWrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Logo />
          <Burger isOpen={isOpen} toggle={toggleNavbar} />
        </div>
        <NavLinks styleClass="nav-links" />
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #27004d;
  height: 5rem;

  .nav-header{
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack:justify;
        -ms-flex-pack:justify;
    justify-content:space-between;
    padding: 8px 12.8px;
    padding: 0.5rem 0.8rem;
    height: 80px;
    height: 5rem;
  }

  .nav-links {
    display: none;
  }

  .nav-links a {
    color: #fff;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    font-size: 16px;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1.6px;
    letter-spacing: 0.1rem;
    text-decoration: none;
  }

  @media(min-width:768px){
    .nav-center{
      display: -ms-grid;
      display: grid;
      height: 5rem;
      max-width: 1202px;
      margin: auto;
      -ms-grid-row-align: center !important;
          align-items: center !important;
      padding: 0 1rem;
    }

    .nav-header {
      -webkit-box-pack:justify;
          -ms-flex-pack:justify;
              justify-content:space-between;
    }
  }

  @media (min-width: 996px) {
  .nav-center {
    -ms-grid-columns: 1fr 1.5fr;
        grid-template-columns: 1fr 1.5fr;
  }

  .nav-links{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -ms-flex-pack:distribute;
    justify-content:space-around;
  } 

  .nav-links a:hover{
    box-shadow:0 4px var(--lighterGold);
  } 
    
  .logo-text{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    font-size: 1.3rem;
    width: auto;
    text-align: left;
    line-height: 0.5;
    margin-left: 0.5rem;
  }
  
    .menu-btn {
    display: none;
  }
  }
`;

export default Navbar
