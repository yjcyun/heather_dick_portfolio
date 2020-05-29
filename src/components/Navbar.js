import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import NavLinks from '../constants/links';
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="nav-center-banner">
        <div className="nav-header banner">
          <Link to="/">
            <img src={logo} alt="Heather Dick Logo" />
          </Link>
          <h3>
            <span className="banner-name">Heather Dick & </span>
            <span className="banner-company">Sirius Theatrical Company</span>
          </h3>
          
        </div>
      </div>
      <div className="nav-center-links">
        <div className="nav-header">
          <NavLinks styleClass="nav-links" />
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

  h3{
    font-family: var(--cursiveFont);
    letter-spacing: 0.1rem;
  }
  /* .banner-name {
    font-size: 40px;
  }
  .banner-company{
    font-size: 30px;
  } */

  .nav-center-banner{
    background:var(--mainPurple);
    color: var(--mainWhite);
  }
  
  .nav-header{
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }

  .nav-header.banner{
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 0.3rem 0;
  }

  .nav-header img{
    width: 50px;
  }

  .nav-center-links{
    padding: 1rem 0; 
    background: var(--mainWhite);
  }

  .nav-links {
    display: none;
  }

  .nav-links a {
    color: var(--mainGold);
    transition: var(--transition);
    font-size: 1.3rem;
    text-transform: capitalize;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    .nav-links{
      display: flex;
      width: 100%;
      justify-content:space-around;
    }   
  }
`;

export default Navbar
