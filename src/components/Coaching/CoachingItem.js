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
padding: 3rem 0 0;

  .coaching-img {
    height: 15rem;
    flex:2;
    margin-bottom: 2rem;
  }

  .coaching-text{
    flex:3;
    padding: 0 2rem;
  }

  h1{
    font-family: var(--titleFont);
    font-size:1.6rem;
    font-weight: 400;
    background: var(--lightGrey);
    margin-bottom:0.5rem;
    display: inline-block;
  }
  
  @media (max-width: 768px){
    flex-direction:column;
    padding: 3rem 1rem 0;

    .coaching-text{
      padding: 0;
    }
  }
`;

export default CoachingItem
