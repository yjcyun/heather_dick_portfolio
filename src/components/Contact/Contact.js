import React from 'react';
import { graphql } from 'gatsby';
import { FaRegEnvelope } from 'react-icons/fa';
import styled from 'styled-components';
import SocialLinks from '../../constants/socialLinks';

export const query = graphql`
  query {
    contactImg: file(relativePath:{eq:"headshots/headshot1.jpg"}){
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <div className="contact-content">
        <SocialLinks styleClass="social-links contact" home />
        <a href={`mailto:%69%6E%66%6F%40%68%65%61%74%68%65%72%64%69%63%6B%2E%63%6F%6D`} className="email-icon-wrapper">
          <FaRegEnvelope className="social-icon email-icon" />
        </a>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.div`
margin-top: 3rem;
padding-bottom: 10rem;

.contact-content {
  display:flex;
  justify-content:center;
}

.contact.social-links{
  display:flex;
  flex-direction:row;
}

.contact.social-links a, .email-icon-wrapper{
  display:flex;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: var(--lightGold);
  margin: 0 0.5rem;
  box-shadow: 0 5px 4px rgba(0,0,0,0.5);
  transition: var(--transition);
}

.social-icon, .email-icon{
  font-size:3rem;
  margin: 0 1rem;
  color:black;
  transition: 0.6s;
  transition: var(--transition);
}

.contact.social-links a:hover, 
.email-icon-wrapper:hover {
  transform: translate(0, -1.5rem);
}

@media(min-width: 768px){
  .contact.social-links .social-icon, 
  .email-icon{
    font-size:4rem;
  }

  .contact.social-links a, 
  .email-icon-wrapper{
    width: 4rem;
    height: 4rem;
    margin: 0 1rem;
  }
}
`;

export default Contact;
