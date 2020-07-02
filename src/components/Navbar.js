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
          {/* Burger will not show on desktop view */}
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
  background:var(--mainPurple);
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
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      height: 5rem;
      max-width: 1202px;
      margin: auto;
      -ms-grid-row-align: center !important;
      align-items: center !important;
      padding: 0 1rem;
    }

    .nav-links{
      -webkit-box-flex:1.5;
      -ms-flex:1.5;
      flex:1.5;
    }

    .nav-header {
      -webkit-box-pack:justify;
      -ms-flex-pack:justify;
      justify-content:space-between;
      flex: 1
    }
  }

  @media (min-width: 996px) {
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
  
  .menu-btn {
    display: none;
  }
}
`;

export default Navbar