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
          <Link to="/">
            <img src={logo} alt="Heather Dick Logo" />
          </Link>
          <h3 className="logo-text">
            <span className="logo-name">Heather Dick & </span>
            <span className="logo-company">Sirius Theatrical Company</span>
          </h3>

          <div className="menu-btn" role="button" tabIndex={0} onClick={toggleNavbar} onKeyDown={toggleNavbar}>
            <div className="menu-btn-burger"></div>
          </div>
        </div>

        <div className="nav-center-links">
          <div className="nav-header">
            <NavLinks styleClass="nav-links" />
          </div>
        </div>
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  .nav-header{
    display: flex;
    align-items: center;
    padding: 1rem 1.25rem;
  }

  .logo-text{
    font-family: 'Montaga', serif;
    letter-spacing: 0.1rem;
    display:none;
    font-weight: normal;
  }

  .nav-center{
    background: #542C85;
    color: var(--mainWhite);
  }

  .nav-header img{
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-links {
    display: none;
  }

  .nav-links a {
    color: var(--mainWhite);
    transition: var(--transition);
    font-size: 1rem;
    text-transform: capitalize;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    .nav-center {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      align-items: center;
    }
    .nav-links{
      display: flex;
      width: 100%;
      justify-content:space-around;
    }  
    .nav-links a:hover{
      box-shadow:0 2px var(--mainGold);
    }

    .menu-btn {
      display: none;
    } 
    
    .logo-text{
      display: flex;
      flex-direction: column;
      margin-left: 0.5rem;
    }
  }
`;

export default Navbar
