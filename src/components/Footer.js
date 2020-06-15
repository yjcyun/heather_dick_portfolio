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
          <div className="footer-nav">
            <p>explore</p>
            <NavLinks styleClass="nav-links" />
          </div>
          <div className="footer-social">
            <p>follow me</p>
            <SocialLinks styleClass="nav-links" footer />
          </div>
          <div className="footer-contact">
            <p>Contact</p>
            <div>
              <small>email[@]email[.]com</small>
              <small>Toronto, ON</small>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
background: var(--darkestPurple);
color: #fff;
padding: 2rem;

.footer-center{
  max-width: 1170px;
  margin: 0 auto;
}

a{
  color: #fff;
}

p{
  margin-bottom:0.5rem;
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

@media (min-width: 576px) {
  .footer-center{
    display:flex;
    flex-direction: row;
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
}
`;
export default Footer
