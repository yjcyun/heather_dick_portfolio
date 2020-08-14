import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

// Coaching information in beige box
const query = graphql`
  {
    coachingImg: allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "coaching"}}, sort: {fields: name, order: ASC}) {
      edges {
        node {
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

const CoachingImages = () => {
  const { coachingImg } = useStaticQuery(query);
  return (
    <CoachingImgWrapper>
      <div className="coaching-bottom">
        {coachingImg.edges.map(({ node }, index) => {
          return (
            <div key={index} className="coaching-img-container">
              <Image fluid={node.childImageSharp.fluid} alt="photos of Heather coaching" />
            </div>
          )
        })}
      </div>
    </CoachingImgWrapper>
  )
}
const CoachingImgWrapper = styled.div`
margin: 0 1rem 3rem;

.coaching-bottom{
  display:grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 0.5rem;
}

.coaching-img-container .gatsby-image-wrapper {
  height:13rem;
}

@media (min-width: 768px){
  .coaching-img-container .gatsby-image-wrapper {
    max-height:15rem;
  }

  .coaching-bottom{
    grid-template-columns: repeat(4,1fr);
  }
}

@media (min-width: 768px){
  .coaching-img-container .gatsby-image-wrapper {
   height:18rem;
  }
}

@media (min-width: 1200px){
    margin: 0 0 3rem;
}
`;
export default CoachingImages