import React from 'react'
import styled from 'styled-components';
import Image from 'gatsby-image';
import Slide from 'react-reveal/Slide';

const CoachingItem = ({ image, desc, title }) => {
  return (
    <CoachingItemWrapper>
      <Image fluid={image} className="coaching-img" />
      <div className="coaching-text">
      <Slide bottom duration={1000}>
        <h1>{title}</h1>
        <p className="coaching-desc">{desc}</p>
        </Slide>
      </div>
    </CoachingItemWrapper>
  )
}

const CoachingItemWrapper = styled.section`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
padding: 3rem 0 0;

  .coaching-img {
    height: 240px;
    height: 15rem;
    -webkit-box-flex:2;
        -ms-flex:2;
            flex:2;
    margin-bottom: 32px;
    margin-bottom: 2rem;
  }

  .coaching-text{
    -webkit-box-flex:3;
        -ms-flex:3;
            flex:3;
    padding: 0 32px;
    padding: 0 2rem;
  }

  h1{
    font-family: var(--titleFont);
    font-size: 25.6px;
    font-size:1.6rem;
    font-weight: 400;
    margin-bottom: 8px;
    margin-bottom:0.5rem;
    display: inline-block;
  }
  
  @media (max-width: 768px){
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column;
    padding: 3rem 1rem 0;

    .coaching-text{
      padding: 0;
    }
  }
`;

export default CoachingItem
