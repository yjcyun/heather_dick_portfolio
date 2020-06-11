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
align-items:start;
grid-gap: 4rem;
padding: 0 4rem;
@media(max-width: 576px){
  margin: 0 1rem;
  padding: 0;
}
`;
export default ReviewList
