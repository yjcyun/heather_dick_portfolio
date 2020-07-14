import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';

// Props from ReviewList
const ReviewItem = ({ review }) => {
  const { author, content, role } = review;

  return (
    <ReviewItemWrapper>
      <Slide bottom duration={1000}>
        <div className="bubble-text">
          <h3 className="bubble-title">{role}</h3>
          <div className="testing">
            <FaQuoteLeft className="quote-icon" />
            <ReactMarkdown source={content} />
          </div>
          <span className="triangle"></span>

          <p className="author">
            <span>-</span><ReactMarkdown source={author} />
          </p>
        </div>
      </Slide>
    </ReviewItemWrapper>
  )
}

const ReviewItemWrapper = styled.div`
margin-bottom: 4rem;

.bubble-text {
 position: relative;
 background-color: var(--beige);
 width: auto;
 height: auto;
 border-radius: 2em;
 display: flex;
 flex-direction:column;
 justify-content: center;
 align-items: center;
 border: 3px solid var(--darkPurple);
 padding: 2rem;
 text-align:center;
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
  float:left;
}

.bubble-title{
  margin-bottom:1rem;
}

.author{
  position: absolute;
  bottom: -4rem;
  left: 35%;
  display:flex;
  text-align:left;
}

.author span {
  margin-right:0.5rem;
}

@media (max-width: 360px){
  .author{
    bottom: -4.8rem;
    left: 35%;
  }
}

@media (min-width: 768px){
  margin-bottom: 5rem;
  .author{
    position: absolute;
    bottom: -5rem;
    left: 50%;
  }
}

@media (min-width: 996px){
  .author{
    bottom: -4rem;
    left: calc(50% - 3rem);
  }
}
`;

export default ReviewItem