import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import styled from 'styled-components';

const ReviewItem = ({ review }) => {
  const { text, author } = review;

  return (
    <ReviewItemWrapper>
      <div className="bubble">
        <p><FaQuoteLeft className="quote-icon" />{text}</p>
        <span className="author">-{author}</span>
      </div>
      <div className="pointer"></div>
    </ReviewItemWrapper>
  )
}

const ReviewItemWrapper = styled.div`
.bubble{
  position: relative;
  font-size: 1rem;
  line-height: 24px;
  background: #F7EDDE;
  border-radius: 40px;
  border-bottom-left-radius: 0;
  padding: 1.5rem 2.5rem;
  text-align: center;
}


.pointer {
	height: 4rem;
  width: 7rem;
  clip-path: polygon(0 0, 0 100%, 100% 0);
	background: #F7EDDE;
	margin-top: -1rem;
}

.author{
  position: absolute;
  bottom: -3rem;
  left: 5rem;
}

.quote-icon{
  color: var(--mainPurple);
  font-size: 2.5rem;
  margin-right: 1rem;
}


`;

export default ReviewItem
