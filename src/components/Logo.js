import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../images/logo.svg';

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/" className="logo-link">
        <img
          src={logo}
          alt="Sirius Theatrical Company Logo"
          className="logo-img"
        />
        <h3 className="logo-text">
          <span className="logo-name">Heather Dick &</span><br />
          <span className="logo-company">the Sirius Theatrical Company</span>
        </h3>
      </Link>
    </LogoWrapper>
  )
}

const LogoWrapper = styled.section`
position:relative;
  .logo-link{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .logo-img{
    width: 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: white;
  }

  .logo-text{
    letter-spacing:1px;
    font-weight: normal;
    line-height: 1;
    margin-bottom: 0;
    margin-left: 0.5rem;
    color: #fff;
  }

  .logo-company{
    font-size: 60%;
  }
  
  @media(min-width: 768px){
    .logo-company{
      font-size: 70%;
    }
    
    .logo-text{
      margin-left: 1.5rem;
    }
  }
`;

export default Logo