import React from 'react';
import styled from 'styled-components';


const Title = ({ title, subtitle}) => {
  return (
    <TitleWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.section`
margin: 0 1rem 5rem;

.title{
  font-family: var(--titleFont);
  color: #190d27;
  margin-bottom:1rem;
  font-size:2.5rem;
  letter-spacing:0.1rem;
  text-transform: uppercase;
  display: inline-block;
}

@media (min-width: 996px) {
  margin:0 0 5rem;

  .title{
    letter-spacing: 0.15rem;
    font-size:3rem;
  }
  
  .subtitle {
    width: 100%;
    font-size: 1rem;
    width: 80%;
  }
}
`;

export default Title
