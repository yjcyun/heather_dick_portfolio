import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import CoachingItem from './CoachingItem';
import verticalBcg from '../../images/subtle-dark-vertical.png';

// Coaching information in beige box
const query = graphql`
  {
    coaching:allStrapiCoachings(sort: {fields: category, order: DESC}) {
      nodes {
        category
        id
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
      }
    }
    coachingImg: allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "coaching"}}, sort: {fields: name, order: ASC}) {
      edges {
        node {
          childImageSharp {
            fluid {
              base64
              aspectRatio
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  }
`

const CoachingList = () => {
  const { coaching, coachingImg } = useStaticQuery(query);
  return (
    <CoachingListWrapper>
      <div className="coaching-container">
        {coaching.nodes.map(item => {
          return (
            <CoachingItem key={item.id} image={item.image.childImageSharp.fluid} desc={item.description} title={item.title} />
          )
        })}
      </div>
      <div className="coaching-bottom">
        {coachingImg.edges.map(({ node }, index) => {
          return (
            <div key={index} className="coaching-img-container">
              <Image fluid={node.childImageSharp.fluid} alt="photos of Heather coaching" />
            </div>
          )
        })}
      </div>
    </CoachingListWrapper>
  )
}

const CoachingListWrapper = styled.section`
margin-bottom:5rem;

.subtitle-container{
  padding: 0 2rem;
}

.coaching-container{
  background-color: var(--beige);
  background-image: url(${verticalBcg});
  padding: 0 16px 32px;
  padding: 0 1rem 2rem;
  margin: 2rem auto;
}
.coaching-bottom{
  display:grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 0.5rem;
}

.coaching-img-container .gatsby-image-wrapper {
  max-height:10rem;
}

.coaching-img-container img {
  width: 100%;
  height:100%;
}

.coaching-img-container .gatsby-image-wrapper picture img{
  object-fit:contain!important;
  
}

@media (min-width: 768px){
  margin-bottom:10rem;

  .subtitle-container{
    padding: 0rem;
  }

  .coaching-img-container .gatsby-image-wrapper {
    max-height:13rem;
  }

  .coaching-bottom{
    grid-template-columns: repeat(4,1fr);
  }
}

@media (min-width: 996px){
  .coaching-img-container .gatsby-image-wrapper {
     max-height:18rem;
  }
}
`;

export default CoachingList