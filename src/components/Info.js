import React from 'react'
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
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

const Info = ({ children, reverse, img }) => {
  const data = useStaticQuery(getImage);

  return (
    <InfoWrapper reverse={reverse}>
      <div className="info-text">
        {children}
      </div>
      <div className="hero-image">
        <Image
          className="background-img"
          fluid={img || data.defaultBcg.childImageSharp.fluid}
        />
        <p className="image-caption">Photo taken by John Doe</p>
      </div>
    </InfoWrapper>
  )
}

const InfoWrapper = styled.section`
display: grid;
grid-template-columns: 1fr;
grid-column-gap:2rem;
padding:1.5rem 1rem;
justify-content:center;
align-items: start;
/* background-color: #f2f4fb; */
/* background-color: #131217; */
background-color: var(--lightestPurple);
/* color: white; */
background-image: url(${subtle});
margin: 0 auto;

.info-text {
  text-align: left;
  padding: 2rem 1rem;
  order: ${props => props.reverse ? '2' : ''};
}

.info-subtitle{
  font-family: var(--titleFont);
  font-weight: 300;
  font-size: 2rem;
  margin-bottom: 0.4rem;
}

.info-text p{
  line-height: 1.7;
}

.info-contact{
  margin: 2rem 0 1rem;
}

.info-author{
  font-size: 1.7rem;
  font-family: var(--titleFont);
}

.hero-image{
  position: relative;
  order: ${props => props.reverse ? '1' : ''};
}

@media (min-width: 996px) {
  grid-template-columns:${props => props.reverse ? '2fr 3fr' : '2fr 1fr'};
  padding: 5rem;

  .info-text {
  text-align: left;
  padding: 0 2rem 0;
  }
}
`;

export default Info
