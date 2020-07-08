import React from 'react';
import styled from 'styled-components';
import leaf from '../images/leaf.svg';

const Title = ({ children, title}) => {
  return (
    <TitleWrapper>
      <h1 className="title">{title}</h1>
      <img src={leaf} className="leaf" alt="leaf" />
      <h2 className="subtitle">
        {children}<br />
        
      </h2>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.section`
margin: 0 1rem 5rem;
text-align:center;
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:vertical;
-webkit-box-direction:normal;
-ms-flex-direction:column;
flex-direction:column;

.title{
  font-family: var(--titleFont);
  font-size: 40px;
  font-size:2.5rem;
  text-transform: uppercase;
  display: inline-block;
  font-weight: 400;
}

.subtitle{
  font-size: 19.2px;
  font-size:1.2rem;
  padding: 16px;
  padding:1rem;
  font-weight: 300;
}

.subtitle span{
  text-align:right !important;
  font-family: "Margetha";
  font-size: 1.8rem;
  margin-top: 2rem;
}

.leaf{
  width: 50%;
  margin: 0 auto;
}

@media (min-width: 996px) {
  margin:0 auto 5rem;

  .title{
    font-size:3.7rem;
  }  
  .leaf{
    width: 25%;
  }
  .subtitle span {
    margin-left: 30rem;
  }
}

@media (max-width: 576px) {
  margin: 0 1rem 0;
}
`;

export default Title