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
              <div>
                <FaRegEnvelope className="contact-social" />
                <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%65%6D%61%69%6C%40%65%6D%61%69%6C%2E%63%6F%6D">email@email.com</a>
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

.contact-social a:hover, .footer-icon a:hover, .social a:hover{
  font-weight:bold;
}

.social a{
  font-size: 1.5rem;
}

@media(min-width: 768px){
}
`;

export default Contact;
