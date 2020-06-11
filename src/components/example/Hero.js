import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
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

const Hero = () => {
  const data = useStaticQuery(getImage);
  return (
    <HeroWrapper>
      <div className="hero-image">
        <Image
          className="background-img"
          fluid={data.defaultBcg.childImageSharp.fluid}
        >
        </Image>
      </div>
      <div className="hero-text">
        <div className="hero-title">
          <h1>heather dick</h1>
          <h3>&sirius theatrical company</h3>
        </div>
        <div className="hero-subtitle">
          <h5>actor. writer. producer.</h5>
        </div>

        <Link to="/about">
          <button className="btn hero-btn">learn more</button>
        </Link>
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
display:flex;
background-color:#f5f5f5;
height: 100vh;
position:relative;

.hero-image{
  position:absolute;
  top:50%;
  right:0;
  transform:translateY(-50%);
  width: 50%;
}

.hero-text{
  background:var(--lighterGold);
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width: 60vw;
}
`;

export default Hero
