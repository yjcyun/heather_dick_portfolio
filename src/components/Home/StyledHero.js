import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
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

const StyledHero = ({ img, children }) => {
  const data = useStaticQuery(getImage);

  return (
    <HeroWrapper>
      <div className="hero-text">
        <div className="hero-title">
          <h1>heather dick</h1>
          <h3>&sirius theatrical company</h3>
        </div>
        <div className="hero-subtitle">
          <h5>actor. writer. producer.</h5>
        </div>
        <button className="btn hero-btn">
          learn more
          </button>
      </div>
      <div className="hero-image">
        <Image
          className="background-img"
          fluid={img || data.defaultBcg.childImageSharp.fluid}
        >
        </Image>
        <div className="background-frame"></div>
      </div>

    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
max-width: 1170px;
margin: auto;
min-height: calc(100vh - 72px);
grid-auto-flow: dense;

.hero-text{
  order:2;
  padding: 0 1rem;
  margin-top: 2rem;
  text-align:center;
}

.hero-title h1{
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  font-size: 3rem;
  line-height: 1;
  margin:0.7rem auto 0;
}

.hero-title h3 {
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.hero-subtitle h5{
  font-size: 1.1rem;
  text-transform: capitalize;
}

.hero-btn{
  margin-top: 2rem;
  text-transform: uppercase;
  background: var(--mainPurple);
  color: white;
}

.hero-image{
  display:flex;
  position:relative;
  align-items: center;
  justify-content:center;
  z-index:2;
  width: 100%;
}

.background-img{
  width: 100%;
  height: 20rem;
}
.background-frame{
 display: none;
}

@media (min-width: 768px) {
  .hero-title h1{
  font-size: 7rem;
}

.hero-title h3 {
  font-size: 2rem;
}
.background-frame{
  background-color: var(--mainPurple);
  width: 25rem;
  height: 40rem;
  position: absolute;
  left: 7rem;
  top: -2rem;
  z-index:1;
}
}
`;

export default StyledHero;
