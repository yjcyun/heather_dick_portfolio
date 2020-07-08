import React from 'react';
import styled from 'styled-components';

const CoachingQuote = ({quote, author}) => {
  return (
    <StyledQuote>
      <p>{quote}</p>
      <span>{author}</span>
    </StyledQuote>
  )
}
const StyledQuote = styled.div`
padding: 1rem 0.5rem;

  @media (min-width: 768px){
    padding: 1rem 5rem;
  }
`;

export default CoachingQuote
