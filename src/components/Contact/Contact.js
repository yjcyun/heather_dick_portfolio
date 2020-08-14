import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import SocialLinks from '../../constants/socialLinks';
// import CompanyLinks from '../../constants/companyLinks';
import ContactInfo from './ContactInfo';

// Profile image
const getImage = graphql`
  query {
    contactImg: file(relativePath:{eq:"contact.jpg"}){
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
        <ContactInfo img={data.contactImg.childImageSharp.fluid}>
          {/* Heather's Info */}
          <div className="info-single">
            <h2 className="info-subtitle">Heather Dick</h2>
            <div className="social">
              <div className="email">
                <span>contact<small>[at]</small>heatherdick<small>[dot]</small>ca</span>
              </div>
              <SocialLinks footer styleClass="contact-social" />
            </div>
          </div>
          {/* Manager's Info */}
          {/* <div className="info-single">
            <h2 className="info-subtitle">Management Company</h2>
            <CompanyLinks styleClass="contact-social" />
          </div> */}
        </ContactInfo>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.div`
padding-bottom: 10rem;
margin: 3rem 1rem 0;

.contact-social, .footer-icon{
  color: var(--lighterPurple);
  font-size: 1.5rem;
}

.contact-social a:hover, .footer-icon a:hover, .social span:hover{
  font-weight:bold;
}

.email {
  background: var(--lightPurple);
  color: white;
  padding: 0.2rem 1rem;
  border-radius:2rem;
  display:inline-block;
  margin-bottom:1rem;
}

.email span{
  font-size: 1rem;
}

.email .contact-social{
  color: white;
}
@media(min-width:768px){
  .email span{
  font-size: 1.5rem;
}
}
`;

export default Contact;