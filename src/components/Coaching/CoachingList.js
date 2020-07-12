import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import CoachingItem from './CoachingItem';
import verticalBcg from '../../images/subtle-dark-vertical.png';
import Subtitle from '../Subtitle';

const query = graphql`
  {
    coaching:allStrapiCoachings {
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
  const data = useStaticQuery(query);
  return (
    <CoachingListWrapper>
      <div className="subtitle-container">
        <Subtitle subtitle="A Heading?" credits />
      </div>
      <div className="coaching-container">
        {data.coaching.nodes.map(item => {
          return (
            <CoachingItem key={item.id} image={item.image.childImageSharp.fluid} desc={item.description} title={item.title} />
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

@media (min-width: 996px){
  margin-bottom:10rem;

  .subtitle-container{
  padding: 0rem;
}

}
`;

export default CoachingList