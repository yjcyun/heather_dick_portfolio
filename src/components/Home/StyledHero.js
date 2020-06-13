import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';
import bcg from '../../images/bcg.jpg';

const getImage = graphql`
  query {
    defaultBcg:file(relativePath: {eq: "headshots/headshot2.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const StyledHero = () => {
  const data = useStaticQuery(getImage);

  return (
    <>
      <HeroWrapper>

        <div className="hero-text">
          <div className="hero-text-wrapper">
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
          {/* <p className="event-news"><FaInfoCircle className="icon" /> Upcoming Event: Monday June 10 - Siriusly Fun Workshop</p> */}
        </div>

        <div className="hero-image">
          <Image
            className="background-img"
            fluid={data.defaultBcg.childImageSharp.fluid}
          >
          </Image>
        </div>
      </HeroWrapper>
    </>
  )
}

const HeroWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
height: 100vh;
position:relative;

::after{
  content:"";
background-color: rgba(0,0,0,1);
background-image: url(${bcg});
background-position:center;
background-size: cover;
opacity:0.3;
top:0;
left:0;
bottom:0;
right:0;
position:absolute;
z-index:-1
}

.hero-text{
  order:2;
  padding: 0 1rem;
  margin-top: 2rem;
  text-align:center;
  position:relative;
}

.event-news{
  position: absolute;
  bottom:0;
  left: 2%;
}

.hero-title h1{
  text-transform: capitalize;
  letter-spacing: 0.05rem;
  font-size: 3rem;
  line-height: 1;
  margin:0.7rem auto 0;
  font-family: 'Chasy', cursive;
  color: var(--mainPurple);
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
}

.background-frame{
 display: none;
}

.icon{
  color: var(--mainPurple);
}

@media (min-width: 768px) {
  padding: 0 2rem 0 1rem;

  .background-frame{
   
    left: 0;
  }

  .hero-text{
    margin-top:3rem;
  }
  
  .hero-title h1{
  font-size: 5rem;
  }

  .hero-title h3 {
    font-size: 2rem;
    margin-bottom:2rem;
  }
  .hero-subtitle h5{
    font-size: 1.5rem;
  }
  .event-news{
  position: absolute;
  bottom:2%;
  left: 2%;
}
}

@media (min-width: 996px) {
  flex-direction: row;
   .hero-text{
    order:0;
    text-align:center;
    padding: 0 3rem 0 1.5rem;
  }
  .hero-image{
    width: 25rem;
    margin-left: 3rem;
  }
  .background-img{
    width: 25rem;
    height: 30rem;
  }
  .hero-title h1{
  font-size: 6rem;
  }
  .hero-title h3 {
    font-size: 1.7rem;
  }
  .hero-subtitle h5{
    font-size: 1.2rem;
  }
   .background-frame{
    display:flex;
    background-color: var(--mainPurple);
    width: 25rem;
    height: 30rem;
    position: absolute;
    left: 2rem;
    top: -2rem;
    z-index:-1;
  }
}

@media (min-width: 1110px) {
  .hero-image{
    width: 33rem;
  }

  .background-img{
    width: 33rem;
    height: 40rem;
  }

  .background-frame{
    width: 33rem;
    height: 40rem;
  }
}
`;

export default StyledHero;
