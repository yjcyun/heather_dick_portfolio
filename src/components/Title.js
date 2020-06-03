import React from 'react';
import styled from 'styled-components';


const Title = ({ title, subtitle, title2 }) => {
  return (
    <TitleWrapper>
      <h1 className="info-title title-one">{title}</h1> {' '}
      <h1 className="info-title title-two">{title2}</h1>
      <p className="info-subtitle">{subtitle}</p>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.section`
.info-title{
  font-family: var(--titleFont);
  color: #190d27;
  display: inline-block;
  margin-bottom:2rem;
  font-size:1.5rem;
}

.title-two {
  color: var(--mainPurple);
}

@media (min-width: 996px) {
  .info-title{
    letter-spacing: 0.15rem;
    font-size:3rem;
  }
  
  .info-subtitle {
    width: 100%;
    font-size: 1rem;
  }
}
`;

export default Title
