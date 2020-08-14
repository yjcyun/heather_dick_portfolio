import React from 'react';
import styled from 'styled-components';
import NavLinks from '../constants/links';
import Logo from './Logo';
import SocialLinks from '../constants/socialLinks';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-center">
        <div className="footer-logo">
          <Logo />
        </div>
        <div className="footer-content">
          {/* Page Nav */}
          <div className="footer-nav">
            <p>explore</p>
            <NavLinks styleClass="nav-links" footer/>
          </div>
          {/* Social medial icons */}
          <div className="footer-social">
            <p>follow me</p>
            <SocialLinks styleClass="nav-links" footer />
          </div>
          {/* Contact */}
          <div className="footer-contact">
            <p>Contact</p>
            <div>
              <small>contact[at]heatherdick[dot]ca</small>
              <small>Toronto, ON</small>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="footer-center" style={{ marginTop: '0.8rem' }}>
        <span className="footer-copyright">Copyright &copy; {new Date().getFullYear()} Heather Dick & The Sirius Theatrical Company</span>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
background: var(--mainPurple);
color: #fff;
padding: 2rem 2rem 1rem;

.footer-center{
  max-width: 1170px;
  margin: 0 auto;
}

a{
  color: #fff;
}

p{
  margin-bottom:0.5rem;
  text-decoration:underline;
}

.footer-logo {
  margin-bottom: 0.5rem;
}

.footer-content {
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1rem;
  margin-top: 1rem;
  text-transform: capitalize;
  text-align: left;
}

.footer-nav a:hover, .footer-social a:hover{
  font-weight:bold;
}

.footer-contact{
  text-transform: none;
  grid-column: 1/3;
}

.footer-contact div{
  display:flex;
  flex-direction: column;
}

.footer-contact small {
  font-size: 0.8rem;
  margin-right: 2rem;
}

.nav-links{
  font-size: 0.8rem;
}

.footer-copyright{
  font-size: 0.6rem;
  display:flex;
  justify-content:center;
}

@media (min-width: 576px) {
  .footer-center{
    display:flex;
    flex-direction: row;
    justify-content:center;
  }

  .footer-logo {
    flex:2;
  }

  .footer-content {
    flex:3;
    margin-top:0;
    flex-direction: row;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .footer-contact{
    grid-column: 3/3;
  }
  
  .footer-copyright{
    margin: 2rem auto 0;
    font-size: 0.7rem;
  }
}
`;
export default Footer
