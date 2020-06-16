import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';
import subtle from '../images/subtle-dark-vertical.png';

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
      <div className="hero-image">
        <Image
          className="background-img"
          fluid={img || data.defaultBcg.childImageSharp.fluid}
        />
        <p className="image-caption">Photo taken by John Doe</p>
      </div>

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
  padding: 32px 16px;
  padding: 2rem 1rem;
    -webkit-box-flex:1;
      -ms-flex:1;
          flex:1;
}

.info-subtitle{
  font-family: var(--titleFont);
  font-weight: 300;
  font-size: 32px;
  font-size: 2rem;
  margin-bottom: 6.4px;
  margin-bottom: 0.4rem;
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
    -webkit-box-flex:1;
      -ms-flex:1;
          flex:1;
}

@media (min-width: 996px) {
  grid-template-columns:2fr 3fr;
  padding: 4rem 2rem;

  .info-text {
  text-align: left;
  padding: 0 2rem 0;
  }
}
`;

export default Info
