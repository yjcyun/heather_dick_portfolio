import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FaRegEnvelope } from 'react-icons/fa';
import styled from 'styled-components';
import SocialLinks from '../../constants/socialLinks';
import CompanyLinks from '../../constants/companyLinks';
import Info from '../Info';

const getImage = graphql`
  query {
    contactImg: file(relativePath:{eq:"headshots/headshot4.jpg"}){
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Contact = () => {
  const data = useStaticQuery(getImage);

  return (
    <ContactWrapper>
      <div className="contact-content">
        <Info img={data.contactImg.childImageSharp.fluid}>
          <div className="info-single">
            <h2 className="info-subtitle">Heather Dick</h2>
            <div className="social">
              <FaRegEnvelope className="contact-social" /> <span>email@email.com</span>
              <SocialLinks footer styleClass="contact-social" />
            </div>
          </div>
          <div className="info-single">
            <h2 className="info-subtitle">Management Comapny</h2>
            <CompanyLinks styleClass="contact-social" />
          </div>
        </Info>

        {/* <SocialLinks styleClass="social-links contact" home />
        <a href={`mailto:%69%6E%66%6F%40%68%65%61%74%68%65%72%64%69%63%6B%2E%63%6F%6D`} className="email-icon-wrapper">
          <FaRegEnvelope className="social-icon email-icon" />
        </a> */}
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.div`
margin-top: 3rem;
padding-bottom: 10rem;

.contact-content {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
}

/*
.contact.social-links{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
}

.contact.social-links a, .email-icon-wrapper{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  border-radius: 50%;
  width: 48px;
  width: 3rem;
  height: 48px;
  height: 3rem;
  background: var(--lightGold);
  margin: 0 8px;
  margin: 0 0.5rem;
  box-shadow: 0 5px 4px rgba(0,0,0,0.5);
  -webkit-transition: var(--transition);
  transition: var(--transition);
} 

.social-icon, .email-icon{
  font-size: 48px;
  font-size:3rem;
  margin: 0 16px;
  margin: 0 1rem;
  color:black;
  -webkit-transition: 0.6s;
  transition: 0.6s;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}

.contact.social-links a:hover, 
.email-icon-wrapper:hover {
  -webkit-transform: translate(0, -1.5rem);
          transform: translate(0, -1.5rem);
}

*/
.contact-social, .footer-icon{
  color: var(--lighterPurple);
  font-size: 1.5rem;
}

.contact-social a:hover, .footer-icon a:hover{
  font-weight:bold;
}

.social span{
  font-size: 1.5rem;
}




@media(min-width: 768px){
  /* .contact.social-links .social-icon, 
  .email-icon{
    font-size:4rem;
  }

  .contact.social-links a, 
  .email-icon-wrapper{
    width: 4rem;
    height: 4rem;
    margin: 0 1rem;
  } */
}
`;

export default Contact;
