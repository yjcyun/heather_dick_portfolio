import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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
  }
`

const CoachingList = () => {
  const { coaching } = useStaticQuery(query);
  return (
    <CoachingListWrapper>
      <div className="coaching-container">
        {coaching.nodes.map(item => {
          return (
            <CoachingItem key={item.id} image={item.image.childImageSharp.fluid} desc={item.description} title={item.title} />
          )
        })}
      </div>
    </CoachingListWrapper>
  )
}

const CoachingListWrapper = styled.section`
margin: 0 1rem 5rem;

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

@media (min-width: 1200px){
    margin: 0 0 5rem;
}
`;

export default CoachingList