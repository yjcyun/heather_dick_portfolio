import React from 'react';
import styled from 'styled-components';


const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h1 className="info-title">{title}</h1>

      <h3 className="info-subtitle">{subtitle}</h3>

    </TitleWrapper>
  )
}

const TitleWrapper = styled.section`
margin-bottom:5rem;

.info-title{
  font-family: var(--titleFont);
  color: #190d27;
  margin-bottom:1rem;
  font-size:1.5rem;
  text-transform: uppercase;
  display: inline-block;
}


@media (min-width: 996px) {
  .info-title{
    letter-spacing: 0.15rem;
    font-size:3rem;
  }
  
  .info-subtitle {
    width: 100%;
    font-size: 1rem;
    width: 80%;
  }
}
`;

export default Title
