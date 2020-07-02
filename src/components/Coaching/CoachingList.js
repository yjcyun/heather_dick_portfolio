import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import CoachingItem from './CoachingItem';
import verticalBcg from '../../images/subtle-dark-vertical.png';

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
.coaching-container{
background-color: var(--beige);
background-image: url(${verticalBcg});
padding: 0 16px 32px;
padding: 0 1rem 2rem;
}
`;

export default CoachingList