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
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
min-height: var(--minHeight);
max-width: 1170px;
margin: 0 auto 3rem;
padding: 0 2rem;

.info-text {
  display:flex;
  flex-direction:column;
  text-align: left;
  align-items:flex-start;
  padding: 2rem;
}

.info-contact{
  margin: 2rem 0 1rem;
}

.info-image{
  display:flex;
  justify-content: center;
  align-items:flex-start;
  max-height: 35rem;
  min-height: 30rem;
  min-width: 20rem;
  max-width: 30rem;
}

.background-img{
   width: 100%;
   height:100%;
}

@media (min-width: 768px) {
flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};

.info-image{
  margin: 0 auto;
  height: 30rem;
  flex:2;
}
  .info-text {
    width: 100%;
    margin: 0 auto;
    flex:3
  }

}
`;

export default Info
