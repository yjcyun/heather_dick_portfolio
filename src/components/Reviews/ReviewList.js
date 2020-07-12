import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import ReviewItem from './ReviewItem';

const query = graphql`
  {
    review:allStrapiReviews(sort: {fields: created_at, order: DESC}) {
      nodes {
        author
        content
        id
        role
      }
    }
  }
`
const ReviewList = () => {
  const data = useStaticQuery(query);

  return (
    <ReviewListWrapper>
      {data.review.nodes.map(item => (
        <div key={item.id}>
          <ReviewItem review={item} />
        </div>
      ))}
    </ReviewListWrapper>
  )
}

const ReviewListWrapper = styled.section`
display: -ms-grid;
display: grid;
-ms-grid-columns: 1fr 1fr;
grid-template-columns: 1fr 1fr;
-ms-grid-row-align:start;
align-items:start;
grid-gap: 4rem;
padding: 2rem 4rem;
margin-bottom: 5rem;

@media(max-width: 576px){
  margin: 3rem 1rem 6rem;
  padding: 0;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
}
`;

export default ReviewList