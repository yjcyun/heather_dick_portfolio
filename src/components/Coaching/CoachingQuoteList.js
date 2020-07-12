import React from 'react'
import { AiFillStar } from 'react-icons/ai';

import CoachingQuote from './CoachingQuote'
import styled from 'styled-components';
import horizontalBcg from '../../images/simple-horizontal-light.png';

const CoachingQuoteList = () => {
  return (
    <QuoteList>
      <div className="quote-list-container">
        <div className="quote-heading">
          <h3>"My students have said..."</h3>
          <hr />
        </div>
        <div className="quote-container">
          <CoachingQuote quote="Working with Heather over the last couple of years has allowed me to open my voice and body in ways that I didn’t think were possible. Heather’s empathy, depth of knowledge and unwavering commitment to discovery and play provided me with a safe place to grow as an actor and a person." author="-  Mary Thomas, Voice & Acting Student" />
          <div className="icon-container"><AiFillStar className="icon" /><AiFillStar className="icon" /><AiFillStar className="icon" /></div>

          <CoachingQuote quote="Heather was fantastic to work with. She really helped me build characters from the ground up by making me comfortable with my voice and physicality. As well as finding ways to experiment with characters, she has an eye for what can be explored and developed within an actor. She is an endlessly patient teacher with her students' best interest at heart." author="- Sophie Mercer, Actor" />
        </div>
      </div>
    </QuoteList>
  )
}

const QuoteList = styled.div`
  background-image: url(${horizontalBcg});
  background-color: var(--lightestPurple);
  padding: 3rem 0.5rem;
  margin-bottom: 3rem;

  .quote-list-container{
    max-width: 1170px;
    margin: 0 auto;
  }

  .quote-heading{
    margin-left: 1rem;
  }

  h3 {
    font-size: 1.4rem;
  }

  .icon-container {
    text-align:center;
  }

 .icon {
    font-size: 2rem;
    color: var(--mainGold);
  }

  @media (min-width: 768px){
    padding: 3rem 2rem;

    .quote-heading{
      margin-left: 0rem;
    }

    h3 {
      font-size: 1.8rem;
    }
  }
`;

export default CoachingQuoteList