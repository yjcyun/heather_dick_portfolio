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

const Info = ({ img, children, reverse}) => {
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
flex-direction: ${props => props.reverse ? 'row-reverse' : ''};
justify-content:center;
align-items: center;
min-height: var(--minHeight);
max-width: 1170px;
margin: 0 auto;

.info-text {
  display:flex;
  flex-direction:column;
  text-align: left;
  padding-left: 2rem;
  flex:3;
}

.info-contact{
  margin: 0.7rem 0;
}

.info-image{
  display:flex;
  justify-content: center;
  align-items:flex-start;
  flex:2;
  margin: 3rem auto 2rem;
  height: 30rem;
}

.background-img{
   width: 100%;
  height:100%;
}

@media (min-width: 996px) {
  .info-text {
    width: 100%;
    margin: 0 auto;
  }

  .info-image{
   
    margin: 0 auto;
  }
}
`;

export default Info
