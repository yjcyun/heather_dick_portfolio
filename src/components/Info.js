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

const Info = ({ img, children }) => {
  const data = useStaticQuery(getImage);

  return (
    <InfoWrapper>
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
display:grid;
grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
justify-content:center;
align-items: center;
min-height: var(--minHeight);
max-width: 1170px;
margin: 0 auto;

.info-text {
  display:flex;
  flex-direction:column;
  text-align: left;
  width: 300px;
  margin: 2rem auto 0;
}

.info-contact{
  margin: 0.7rem 0;
}

.info-image{
  display:flex;
  justify-content: center;
  align-items:center;
  width: 320px;
  height: 370px;
  margin: 3rem auto 2rem;
}

.background-img{
  height: 100%;
  width:  100%;
}

@media (min-width: 996px) {
  .info-text {
    width: 100%;
    margin: 2rem auto 3rem 4rem;
  }

  .info-image{
    width: 500px;
    height: 330px;
    margin: 2rem auto 2rem;
  }
}
`;

export default Info
