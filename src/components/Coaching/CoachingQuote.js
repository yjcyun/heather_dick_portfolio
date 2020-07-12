import React from 'react';
import styled from 'styled-components';

const CoachingQuote = ({ quote, author }) => {
  return (
    <StyledQuote>
      <div>
        <p>"{quote}"</p><br />
        <span>{author}</span>
      </div>
    </StyledQuote>
  )
}

const StyledQuote = styled.div`
padding: 1rem 0.5rem;
display:flex;
text-align:center;

@media (min-width: 996px){
  padding: 1rem 4rem;
}
`;

export default CoachingQuote