import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';
import Image from 'gatsby-image';
import bcg from '../../images/bcg.jpg';
import Name from './Name';

const getImage = graphql`
  query {
    defaultBcg:file(relativePath: {eq: "home.jpg"}) {
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
    <HeroWrapper>
      {/* Homepage text */}
      <div className="hero-text">
        <div className="hero-text-wrapper">
          <div className="hero-title">
            <Name />
            <h3>& the Sirius Theatrical Company</h3>
          </div>
          <div className="hero-subtitle">
            <h5>
              <span><AiFillStar className="star-icon" /></span>Performer
              <span><AiFillStar className="star-icon" /></span>Voice Artist
              <span><AiFillStar className="star-icon" /></span>Director
              <span><AiFillStar className="star-icon" /></span>Writer
              <span><AiFillStar className="star-icon" /></span>Designated Linklater Voice Teacher
            </h5>
          </div>

          <Link to="/bio">
            <button className="btn hero-btn">learn more</button>
          </Link>
        </div>
      </div>

      {/* Homepage Image */}
      <div className="hero-image">
        <Image
          className="background-img"
          fluid={data.defaultBcg.childImageSharp.fluid}
          alt="Profile image of Heather Dick"
        />
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  position:relative;

:before{
  content:"";
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
  -webkit-box-ordinal-group:3;
  -ms-flex-order:2;
  order:2;
  padding: 0 16px;
  padding: 0 1rem;
  margin-top: 32px;
  margin-top: 2rem;
  text-align:center;
}

.hero-title h3 {
  letter-spacing: 1.6px;
  letter-spacing: 0.1rem;
  font-size: 19.2px;
  font-size: 1.2rem;
  margin: 8px 0;
  margin: 0.5rem 0;
}

.hero-subtitle h5{
  font-size: 17.6px;
  font-size: 1.1rem;
  max-width: 28rem;
  margin: 0 auto;
  text-transform: capitalize;
}

.hero-subtitle h5 span{
  vertical-align:middle;
}

.hero-image{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position:relative;
  position:relative;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center;
  width: 100%;
  height: 400px;
  height: 25rem;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}

.background-img{
  width: 100%;
  height: 100%;
}

.star-icon{
  color: var(--mainGold);
  margin-left: 0.5rem;
}
@media (min-width: 768px) {
  padding: 0 2rem 0 1rem;
  .hero-text{
    margin-top:3rem;
    width: 45rem;
  }
  
  .hero-title h3 {
    font-size: 2rem;
    margin-bottom:2rem;
  }

  .hero-subtitle h5{
    font-size: 1.5rem;
  }

  .hero-image{
    height: 60%;
  }
}

@media (min-width: 996px) {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;

  .hero-text{
    -webkit-box-ordinal-group:1;
    -ms-flex-order:0;
    order:0;
    text-align:center;
    padding: 0 3rem 0 1.5rem;
  }

  .hero-title h3 {
    font-size: 1.7rem;
  }

  .hero-subtitle h5{
    font-size: 1.2rem;
  }

  .hero-image{
    width: 33rem;
    height: 40rem;
  }
}
`;

export default StyledHero;