import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../images/logo.png';

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/" className="logo-link">
        <img src={logo} alt="Heather Dick Logo" className="logo-img" />
        <h3 className="logo-text">
          <span className="logo-name">Heather Dick &</span><br />
          <span className="logo-company">Sirius Theatrical Company</span>
        </h3>
      </Link>
    </LogoWrapper>
  )
}

const LogoWrapper = styled.section`
  .logo-link{
      display:flex;
      align-items: center;
    }

  .logo-img{
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-text{
    letter-spacing: 0.1rem;
    font-weight: normal;
    line-height: 1;
    margin-bottom: 0;
    margin-left: 0.5rem;
  }

  .logo-company{
    font-size: 70%;
  }
`;

export default Logo
