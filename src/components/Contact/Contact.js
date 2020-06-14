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
  // const email = 'info@heatherdick!@#$%com';
  // let newEmail;
  // const changeEmail = () => {
  //   newEmail = email.replace('!@#$%', '.');
  //   console.log(newEmail);
  //   return newEmail;
  // };
  // changeEmail();
  // console.log(newEmail);
 

  return (
    <ContactWrapper>
      <div className="contact-content">
        <SocialLinks styleClass="social-links contact" home />
        <a href={`mailto:%69%6E%66%6F%40%68%65%61%74%68%65%72%64%69%63%6B%2E%63%6F%6D`} >
            <FaRegEnvelope className="social-links social-icon"
              style={{ fontSize: '3rem', margin: '0 1.2rem' }} />
          </a>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.div`
.contact-content {
  display:flex;
  justify-content:center;
}
.contact.social-links {
  display:flex;
}
.contact.social-links .social-icon{
  font-size:3rem;
  margin: 0 1.2rem;
}
`;

export default Contact;
