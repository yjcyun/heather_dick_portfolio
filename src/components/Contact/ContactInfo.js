import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import subtle from '../../images/subtle-dark-vertical.png';

// Props from from Contact.js
const ContactInfo = ({ children, img }) => {
  return (
    <InfoWrapper>
      {/* Profile Image */}
      <div className="hero-image">
        <Image
          className="background-img"
          fluid={img}
        />
        <p className="image-caption">Photo taken by John Doe</p>
      </div>
      {/* Contact Text */}
      <div className="info-text">
        {children}
      </div>
    </InfoWrapper>
  )
}

const InfoWrapper = styled.section`
display:-webkit-box;
display:-ms-flexbox;
display:flex;
flex-direction:column;
padding:1.5rem 1rem;
-webkit-box-pack:center;
-ms-flex-pack:center;
justify-content:center;
-ms-grid-row-align: start;
align-items: start;
background-color: var(--lightestPurple);
background-image: url(${subtle});
margin: 0 auto;

.info-text {
  text-align: left;
  padding: 1rem 0.5rem;
}

.info-subtitle{
  font-family: var(--titleFont);
  font-weight: 300;
  font-size: 32px;
  font-size: 3rem;
  margin-bottom: 2rem;
  line-height: 1;
}

.info-single{
  margin: 2rem auto; 
}

.info-text p{
  line-height: 1.7;
}

.info-contact{
  margin: 32px 0 16px;
  margin: 2rem 0 1rem;
}

.info-author{
  font-size: 27.2px;
  font-size: 1.7rem;
  font-family: var(--titleFont);
}

.hero-image{
  position: relative;
  width: 90vw;
  margin: 0 auto;
}

.background-img{
  width:100%;
}

@media (min-width: 996px) {
  display:flex;
  flex-direction:row;
  padding: 4rem 2rem;

  .info-text {
  text-align: left;
  padding: 0;
  -webkit-box-flex:1;
  -ms-flex:1;
  flex:1;
  }

  .hero-image{
  -webkit-box-flex:1;
  -ms-flex:1;
  flex:1;
  }

  .info-single{
    margin: 0 0 3rem 3rem; 
  }
}
`;

export default ContactInfo