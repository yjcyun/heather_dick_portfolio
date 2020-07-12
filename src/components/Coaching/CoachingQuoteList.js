import React from 'react'
import CoachingQuote from './CoachingQuote'
import styled from 'styled-components';
import horizontalBcg from '../../images/simple-horizontal-light.png';

const CoachingQuoteList = () => {
  return (
    <QuoteList>
      <h3>"My students have said...</h3>
      <hr />
      <div className="quote-container">
        <CoachingQuote quote="Working with Heather over the last couple of years has allowed me to open my voice and body in ways that I didn’t think were possible. Heather’s empathy, depth of knowledge and unwavering commitment to discovery and play provided me with a safe place to grow as an actor and a person." author="-  Mary Thomas, Voice & Acting Student" />
        <CoachingQuote quote="Heather was fantastic to work with. She really helped me build characters from the ground up by making me comfortable with my voice and physicality. As well as finding ways to experiment with characters, she has an eye for what can be explored and developed within an actor. She is an endlessly patient teacher with her students' best interest at heart." author="- Sophie Mercer, Actor" />
      </div>
    </QuoteList>
  )
}

const QuoteList = styled.div`
  background-image: url(${horizontalBcg});
  background-color: var(--lightestPurple);
  /* background-color:#e7e5f1; */
  padding: 2rem;
  margin-bottom: 3rem;
  h3 {
    font-size: 1.8rem;
  }
  .quote-container{
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`;

export default CoachingQuoteList