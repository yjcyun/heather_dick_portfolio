import React from 'react';
import styled from 'styled-components';

const Button = ({ text, styled, children }) => {
  return (
    <ButtonWrapper styled={styled}>
      {text}
      {children}
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
  background: ${props=>props.styled? 'var(--mainPurple)':''};
  color: ${props => props.styled ? '#fff' : ''};
  
  @media(max-width:768px) {
    margin: 0 auto;
  }
`;

export default Button
