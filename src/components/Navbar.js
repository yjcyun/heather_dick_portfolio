import React from 'react';
import styled from 'styled-components';
import NavLinks from '../constants/links';
import Logo from './Logo';

const Navbar = ({ toggleNavbar }) => {
  return (
    <NavbarWrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Logo />
          <div className="menu-btn" role="button" tabIndex={0} onClick={toggleNavbar} onKeyDown={toggleNavbar}>
            <div className="menu-btn-burger"></div>
          </div>
        </div>

        <NavLinks styleClass="nav-links" home />
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--mainWhite);
  color: var(--mainPurple);

  .nav-header{
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 0.5rem 0.8rem;
  }

  .nav-links {
    display: none;
  }

  .nav-links a {
    color: var(--mainPurple);
    transition: var(--transition);
    font-size: 1rem;
    text-transform: lowercase;
    font-weight: bold;
    letter-spacing: 0.1rem;
    text-decoration: none;
  }

  @media (max-width: 400px) {
    h3.logo-text{
      font-size: 0.9rem;
    }
  }

  @media (max-width: 1199px) {
    .nav-center{
      max-width: 900px;
      margin: 0 auto;
    }
  }

  @media (min-width: 1200px) {
    .nav-center {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      align-items: center !important;
      max-width: 1170px;
      margin: 0 auto;
    }

    .nav-header{
      padding: 1rem 0;
      justify-content: flex-start;
    }

    .nav-links{
      /* display: none; */
      display: ${props => props.home ? 'none' : 'flex'};
      width: 100%;
      justify-content:space-around;
    } 

    .nav-links a:hover{
      box-shadow:0 4px var(--mainGold);
    }

    .menu-btn {
      display: none;
    } 
    
    .logo-text{
      display: flex;
      flex-direction: column;
      font-size: 1.2rem;
      width: auto;
      text-align: left;
      line-height: 0.5;
      margin-left: 0.5rem;
    }
  
  }
`;

export default Navbar
