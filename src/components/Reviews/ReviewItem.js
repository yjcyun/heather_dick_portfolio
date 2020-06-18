import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';

const ReviewItem = ({ review }) => {
  const { text, author } = review;

  return (
    <ReviewItemWrapper>
      <Slide bottom duration={1000}>
        <div className="bubble-text">
          <p><FaQuoteLeft className="quote-icon" />{text}</p>
          <span className="triangle"></span>
          <span className="author">-{author}</span>
        </div>
      </Slide>
    </ReviewItemWrapper>
  )
}

const ReviewItemWrapper = styled.div`

.bubble-text {
 position: relative;
 background-color: #f7eff9;
 width: auto;
 height: auto;
 border-radius: 2em;
 display: flex;
 justify-content: center;
 align-items: center;
 border: 3px solid var(--darkPurple);
 padding: 2rem;
}

.triangle { 
 display: block;
 height: 4rem;
 width: 4rem;
 background-color: inherit;
 border: inherit;
 position: absolute;
 bottom: -2rem;
 left: 4rem;
 clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
 transform: rotate(-45deg);
 border-radius: 0 0 0 0.25em;
}

.quote-icon{
   color: var(--mainPurple);
  font-size: 40px;
  font-size: 2.5rem;
  margin-right: 16px;
  margin-right: 1rem;
}
/*
.bubble{
  position: relative;
  font-size: 16px;
  font-size: 1rem;
  line-height: 24px;
  background: var(--lightestPurple);
  border-radius: 40px;
  border-bottom-left-radius: 0;
  padding: 24px 40px;
  padding: 1.5rem 2.5rem;
  text-align: center;
  border: 3px solid var(--darkPurple);
}

.pointer {
	height: 64px;
	height: 4rem;
  width: 112px;
  width: 7rem;
  -webkit-clip-path: polygon(0 0, 0 100%, 100% 0);
  clip-path: polygon(0 0, 0 100%, 100% 0);
  background:var(--lightestPurple);
  border: 3px solid var(--darkPurple);
	margin-top: -16px;
  margin-top: -1rem;
  position: relative;
}
*/

.author{
  position: absolute;
  bottom: -4rem;
  left: 80px;
  left: calc(50% - 5rem);
}

@media (min-width: 768px){
  margin-bottom: 5rem;
  .author{
    position: absolute;
    bottom: -7rem;
    left: 80px;
    left: 10%;
  }
}
@media (min-width: 996px){
  .author{
    bottom: -5rem;
    left: calc(50% - 2rem);
  }
}
`;

export default ReviewItem
