import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import NavLinks from '../constants/links';
import logo from '../images/logo.png';

const Navbar = ({ toggleNavbar }) => {
  return (
    <NavbarWrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Heather Dick Logo" />
            <h3 className="logo-text">
              <span className="logo-name">Heather Dick &</span><br />
              <span className="logo-company">Sirius Theatrical Company</span>
            </h3>
          </Link>
          <div className="menu-btn" role="button" tabIndex={0} onClick={toggleNavbar} onKeyDown={toggleNavbar}>
            <div className="menu-btn-burger"></div>
          </div>
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
  background: var(--mainWhite);
  color: var(--mainPurple);

  .nav-header{
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 0.5rem 0.8rem;

  }

  .logo-link{
    display:flex;
    align-items: center;
  }

  .logo-text{
    letter-spacing: 0.1rem;
    font-weight: normal;
    line-height: 1;
    margin-bottom: 0;
    margin-left: 0.5rem;
    display: inline-block;
    
  }

  .logo-company{
    font-size: 70%;
  }

  .nav-header img{
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-links {
    display: none;
  }

  .nav-links a {
    color: var(--mainPurple);
    transition: var(--transition);
    font-size: 1rem;
    text-transform: capitalize;
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
      padding: 1rem 1.25rem;
      justify-content: flex-start;
    }

    .nav-links{
      display: flex;
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
