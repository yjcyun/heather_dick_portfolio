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
          </Link>
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

  .nav-header img{
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
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
  }
`;

export default Navbar
