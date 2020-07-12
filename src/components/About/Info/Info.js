import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import Image from 'gatsby-image';
import subtle from '../../../images/subtle-dark-vertical.png';

// Profile image on Bio page
const query = graphql`
  {
    bio:allStrapiBios {
      nodes {
        id
        description
        heading
        profile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Info = () => {
  const data = useStaticQuery(query);
  return (
    <InfoWrapper>
      {data.bio.nodes.map(item => {
        return (
          <div key={item.id}>
            {/* Profile Image */}
            <div className="hero-image">
              <Image
                className="background-img"
                fluid={item.profile.childImageSharp.fluid}
              />
              <p className="image-caption">Helen Tansey, Sundari Photography Inc.</p>
            </div>

            {/* Profile Text */}
            <div className="subtitle-container"><h3 className="info-subtitle">{item.heading}</h3></div>

            <ReactMarkdown source={item.description} className="info-text" />
          </div>
        )
      })}
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

.info-text {
  text-align: left;
  padding-top: 2rem;
}

.info-text p{
  line-height: 1.7;
  padding-bottom: 1rem;
}

.info-subtitle{
  margin-top:2rem;
  text-align:center;
  font-size: 1.6rem;
}

.hero-image{
  position: relative;
  width: 90vw;
  margin: 0 auto;
}

.background-img{
  width:100%;
}

@media (min-width: 768px) {
  .info-text{
    padding: 2rem 1.5rem;
  }
}

@media (min-width: 996px) {
  display:block;
  padding: 4rem 2rem;

  .info-text {
    padding: 0;
  }

  .hero-image{
    float: left;
    width: 500px;
    margin-right: 2rem;
    margin-bottom: 1rem;
  }

  .info-subtitle{
    margin: 1rem 0;
    text-align:center;
    font-size: 2.2rem;
}
}

@media (min-width: 1130px){
  .info-text .extra-padding{
    padding-top: 3rem;
  }
}
`;

export default Info