import React from 'react';
import styled from 'styled-components';
import leaf from '../images/leaf.svg';

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h1 className="title">{title}</h1>
      <img src={leaf} className="leaf" />
      <h2 className="subtitle">{subtitle}</h2>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.section`
margin: 0 1rem 5rem;
text-align:center;
display:flex;
flex-direction:column;

.title{
  font-family: var(--titleFont);
  font-size:2.5rem;
  text-transform: uppercase;
  display: inline-block;
  font-weight: 400;
}

.subtitle{
  font-size:1.2rem;
  padding-top:1rem;
}
.leaf{
  width: 25%;
  margin: 0 auto;
}


@media (min-width: 996px) {
  margin:0 auto 5rem;

  .title{
    font-size:2.4rem;
  }  
}

@media (max-width: 576px) {
  margin: 0 1rem 0;
}
`;

export default Title
