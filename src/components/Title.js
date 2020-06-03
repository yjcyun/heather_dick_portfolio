import React from 'react';
import styled from 'styled-components';


const Title = ({title, subtitle}) => {
  return (
    <TitleWrapper>
      <h1 className="info-title">{title}</h1>
      <p className="info-subtitle">{subtitle}</p>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.section`
.info-title{
  font-size: 2.8rem;
  text-transform: uppercase;
  font-family: var(--titleFont);
  color: #190d27;
}

.info-subtitle {
  font-size: 1.1rem;
  margin-bottom:1.3rem;
}

@media (min-width: 996px) {
  .info-title{
    font-size: 3.5rem;
    letter-spacing: 0.15rem;
  }

  .info-subtitle {
    width: 75%;
    font-size: 1.3rem;
  }
}
`;

export default Title
