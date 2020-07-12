import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';
const CoachingQuote = ({ quote, author }) => {
  return (
    <StyledQuote>
      <div>
        <AiFillStar className="icon" />
      </div>
      <div>
        <p>{quote}</p><br />
        <span>{author}</span>
      </div>
    </StyledQuote>
  )
}

const StyledQuote = styled.div`
padding: 1rem 0.5rem;
display:flex;

.icon {
  font-size: 2rem;
  margin-right: 1rem;
  color: var(--mainGold);
}

@media (min-width: 1024px){
  .icon {
    font-size: 5rem;
    margin-right: 2rem;
  }
}
`;

export default CoachingQuote