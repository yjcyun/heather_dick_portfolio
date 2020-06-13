import React from 'react'
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const getImage = graphql`
  query {
    defaultBcg:file(relativePath: {eq: "headshots/headshot4.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Info = ({ children, reverse,img }) => {
  const data = useStaticQuery(getImage);

  return (
    <InfoWrapper reverse={reverse}>
      <div className="info-text">
        {children}
      </div>
      <div className="info-image">
        <Image
          className="background-img"
          fluid={img || data.defaultBcg.childImageSharp.fluid}
        >
        </Image>
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
/* background: linear-gradient(#fff 0%, var(--lighterGold) 70%, #fff 100%); */
background-color: #f2f4fb;
background-image: url("https://www.transparenttextures.com/patterns/paper.png");
/* background: var(--lighterGold); */
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
  letter-spacing: 0.1rem;
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

.info-image{
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
