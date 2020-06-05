import React from 'react'
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const getImage = graphql`
  query {
    defaultBcg:file(relativePath: {eq: "defaultImg.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Info = ({ img, children, reverse }) => {
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
/* display:flex;
flex-direction:  ${props => props.reverse ? 'column-reverse' : 'column'}; */
display: grid;
grid-template-columns:${props => props.reverse ? '1fr 2fr' : '2fr 1fr'};
grid-gap:2rem;
justify-content:center;
align-items: start;
min-height: var(--minHeight);
max-width: 1170px;
margin: 0 auto 3rem;

.info-text {
  text-align: left;
  padding: 0 2rem;
  order: ${props => props.reverse ? '2' : ''};
}

.info-text h1{
  font-size: 2rem;
  letter-spacing:0.1rem;
  margin-bottom:0.4rem;
}

.info-text p{
  line-height: 1.7;
}

.info-contact{
  margin: 2rem 0 1rem;
}

.info-image{
order: ${props => props.reverse ? '1' : ''};
}

@media (max-width: 768px) {
  grid-template-columns: 1fr;
}

`;

export default Info
