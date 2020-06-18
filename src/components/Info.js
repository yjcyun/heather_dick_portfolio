import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
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

const Info = ({ children, img }, contact) => {
  const data = useStaticQuery(getImage);

  return (
    <InfoWrapper contact={contact}>
      <div className="hero-image">
        <Image
          className="background-img"
          fluid={img || data.defaultBcg.childImageSharp.fluid}
        />
        <p className="image-caption">Photo taken by John Doe</p>
      </div>

      <div className="info-text">
        {children}
      </div>
    </InfoWrapper>
  )
}

const InfoWrapper = styled.section`
display:-webkit-box;
display:-ms-flexbox;
display:flex;
flex-direction:column;
padding:1.5rem 1rem;
-webkit-box-pack:center;
-ms-flex-pack:center;
justify-content:center;
-ms-grid-row-align: start;
align-items: start;
background-color: var(--lightestPurple);
background-image: url(${subtle});
margin: 0 auto;
max-width: ${props => props.contact ? '1170px' : ''};

.info-text {
  text-align: left;
  padding: 32px 16px;
  padding: 2rem 1rem;
}

.info-subtitle{
  font-family: var(--titleFont);
  font-weight: 300;
  font-size: 32px;
  font-size: 3rem;
  margin-bottom: 1rem;
  
}

.info-single{
  margin: 0 0 3rem 3rem; 
}

.info-text p{
  line-height: 1.7;
}

.info-contact{
  margin: 32px 0 16px;
  margin: 2rem 0 1rem;
}

.info-author{
  font-size: 27.2px;
  font-size: 1.7rem;
  font-family: var(--titleFont);
}

.hero-image{
  position: relative;
  width: 90vw;
  margin: 0 auto;
}

.background-img{
  width:100%;
}


@media (min-width: 996px) {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  flex-direction:row;
  padding: 4rem 2rem;

  .info-text {
  text-align: left;
  padding: 0 2rem 0;
  -webkit-box-flex:3;
  -ms-flex:3;
  flex:${props => props.contact ? '1' : '3'};
  }

  .hero-image{
  -webkit-box-flex:1;
  -ms-flex:2;
  flex:${props => props.contact ? '1' : '2'};
  }
}
`;

export default Info
