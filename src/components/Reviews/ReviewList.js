import React from 'react';
import styled from 'styled-components';
import reviewData from '../../constants/reviews';
import ReviewItem from './ReviewItem';

const ReviewList = () => {
  return (
    <ReviewListWrapper>
      {reviewData.map(review => (
        <div key={review.id}>
          <ReviewItem review={review} />
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