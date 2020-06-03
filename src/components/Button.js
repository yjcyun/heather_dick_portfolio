import React from 'react';
import styled from 'styled-components';

const Button = ({text}) => {
  return (
    <ButtonWrapper>
      {text}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  padding: 1rem 3rem;
  letter-spacing: 0.1rem;
  outline: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-family: var(--mainFont);

`;

export default Button
