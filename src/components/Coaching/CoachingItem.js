import React from 'react'
import styled from 'styled-components';
import Image from 'gatsby-image';

const CoachingItem = ({ image, desc, title }) => {
  return (
    <CoachingItemWrapper>
      <Image fluid={image} className="coaching-img" />
      <div className="coaching-text">
        <h1>{title}</h1>
        <p className="coaching-desc">{desc}</p>
      </div>
    </CoachingItemWrapper>
  )
}

const CoachingItemWrapper = styled.section`
display: flex;
padding: 3rem 0;

  .coaching-img {
    height: 15rem;
    flex:1;
  }

  .coaching-text{
    flex:3;
    padding: 0 2rem;
  }

  h1{
    font-family: var(--titleFont);
    font-size:1.6rem;
    margin-bottom:0.5rem;
  }
  
  @media (max-width: 768px){
    flex-direction:column;
  }
`;

export default CoachingItem
