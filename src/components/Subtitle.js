import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import styled from 'styled-components';

const Subtitle = ({ subtitle, white, linkUrl, linkText, credits }) => {
  return (
    <SubtitleWrapper white={white} credits={credits}>
      <h4>{subtitle}</h4>
      <hr className="short-hr" />
      <a href={linkUrl} className="link"><BsArrowRight /> {linkText}</a>
    </SubtitleWrapper>
  )
}

const SubtitleWrapper = styled.div`
font-family: var(--titleFont);
font-size:2.5rem;
display: inline-block;

h4{
font-weight: 300;
color: ${props => props.white ? '#fff' : '000'};
}

.link{
  font-size: 1.4rem;
  text-transform: uppercase;
  padding-bottom: 2rem;
  color:  ${props => props.white ? '#fff' : '000'};
  display: ${props=>props.credits? 'none': 'block'}
}
.link:hover{
  text-decoration: underline;
  text-decoration-color: var(--mainGold);
}

@media (min-width: 768px){
  font-size: 4rem;
}
`;
export default Subtitle
