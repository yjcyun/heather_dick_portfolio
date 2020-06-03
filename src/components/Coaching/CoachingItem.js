import React from 'react'
import styled from 'styled-components';
import Image from 'gatsby-image';

const CoachingItem = ({ image, desc }) => {
  return (
    <CoachingItemWrapper>
      <Image fluid={image} className="coaching-img" />
      <p className="coaching-desc">{desc}</p>
    </CoachingItemWrapper>
  )
}

const CoachingItemWrapper = styled.section`
display: flex;
padding: 2rem 0;

  .coaching-img {
    height: 15rem;
    flex:1;
  }

  .coaching-desc{
    flex:3;
    padding: 0 2rem;
  }

  @media (max-width: 768px){
    flex-direction:column;
  }
`;

export default CoachingItem
