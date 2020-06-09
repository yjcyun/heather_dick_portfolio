import React from 'react';
import styled from 'styled-components';


const Title = ({ title }) => {
  return (
    <TitleWrapper>
      <h1 className="title">{title}</h1>
      <hr className="title-hr"/>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.section`
margin: 0 1rem 5rem;
text-align:center;

.title{
  font-family: var(--titleFont);
  font-size:2rem;
  text-transform: uppercase;
  display: inline-block;
  font-weight: 400;
}
.title-hr{
  margin: 1rem auto;
}


@media (min-width: 996px) {
  margin:0 auto 5rem;

  .title{
    font-size:2.4rem;
  }
  
}
`;

export default Title
