import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';
import subtle from '../../../images/subtle-dark-vertical.png';

// Profile image on Bio page
const getImage = graphql`
  query {
    defaultBcg:file(relativePath: {eq: "headshots/headshot1.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Info = ({ children, img }) => {
  const data = useStaticQuery(getImage);
  return (
    <InfoWrapper>
      {/* Profile Image */}
      <div className="hero-image">
        <Image
          className="background-img"
          fluid={img || data.defaultBcg.childImageSharp.fluid}
        />
        <p className="image-caption">Helen Tansey, Sundari Photography Inc.</p>
      </div>

      {/* Profile Text */}
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
  padding-top: 2rem;
}

.info-text p{
  line-height: 1.7;
  padding-bottom: 1rem;
}

.info-title{
  font-family: var(--titleFont);
  font-weight: 300;
  font-size: 32px;
  font-size: 3rem;
  margin-bottom: 2rem;
  line-height: 1;
}

.info-subtitle{
  margin: 1rem 0;
}

.info-single{
  margin: 2rem auto; 
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

@media (min-width: 768px) {
  .info-text{
   padding: 2rem 1.5rem;
  }
}

@media (min-width: 996px) {
  display:block;
  padding: 4rem 2rem;

  .info-text {
    padding: 0;
  }

  .hero-image{
    float: left;
    width: 500px;
    margin-right: 2rem;
    margin-bottom: 1rem;
  }

  .info-single{
    margin: 0 0 3rem 3rem; 
  }
}

@media (min-width: 1130px){
  .info-text .extra-padding{
    padding-top: 3rem;
  }
}
`;

export default Info