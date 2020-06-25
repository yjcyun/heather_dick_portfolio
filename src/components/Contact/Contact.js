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
              <div className="email">
                {/* <FaRegEnvelope className="contact-social" /> */}
                <span>email@email.com</span>
              </div>
              <SocialLinks footer styleClass="contact-social" />
            </div>
          </div>
          <div className="info-single">
            <h2 className="info-subtitle">Management Company</h2>
            <CompanyLinks styleClass="contact-social" />
          </div>
        </Info>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.div`
margin-top: 3rem;
padding-bottom: 10rem;

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

.email .contact-social{
  color: white;
 
}
.social span{
  font-size: 1.5rem;
}

@media(min-width: 768px){
}
`;

export default Contact;
