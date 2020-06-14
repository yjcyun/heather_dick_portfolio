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
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 0.5rem 0.8rem;
    height: 5rem;
  }

  .nav-links {
    display: none;
  }

  .nav-links a {
    color: #fff;
    transition: var(--transition);
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.1rem;
    text-decoration: none;
  }

  @media(min-width:768px){
    .nav-center{
      display: grid;
      height: 5rem;
      max-width: 1202px;
      margin: auto;
      align-items: center !important;
      padding: 0 1rem;
    }

    .nav-header {
      justify-content:space-between;
    }  
  }

  @media (min-width: 996px) {
  .nav-center {
    grid-template-columns: 1fr 1.5fr;
  }
  
  .nav-links{
    display: ${props => props.home ? 'none' : 'flex'};
    width: 100%;
    justify-content:space-around;
  } 

    .nav-links a:hover{
      box-shadow:0 4px var(--lighterGold);
    } 
    
    .logo-text{
      display: flex;
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
