import React from 'react';
import styled from 'styled-components';
import reviewData from '../../constants/reviews';
import ReviewItem from './ReviewItem';

const ReviewList = () => {
  return (
    <ReviewListWrapper>
      {reviewData.map(review => {
        return (
          <div key={review.id}>
            <ReviewItem review={review} />
          </div>
        )
      })}
    </ReviewListWrapper>
  )
}

const ReviewListWrapper = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
/* grid-auto-rows:minmax(min-content, max-content); */
align-items:start;
grid-gap: 4rem;
padding: 0 2rem;
`;
export default ReviewList
