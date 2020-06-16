import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const ResumeItem = ({ item }) => {
  const { company, show, role, location, names } = item;

  return (
    <ResumeItemWrapper>
      <Fade bottom>
        <p><strong>{show}</strong>
          {role ? <><span className="divider"> | </span> {role}</> : ''}
          {company ? <><span className="divider"> | </span> {company}</> : ''}
          {location ? <> <span className='divider'>|</span> {location}</> : ''}
          {names ? <> <span className='divider'>|</span> {names}</> : ''}
        </p>
      </Fade>
    </ResumeItemWrapper>
  )
}

const ResumeItemWrapper = styled.div`
text-transform: capitalize;
margin:0.5rem 0;
font-size: 90%;

.divider{
  color: var(--mainGold);
}

.none {
  opacity: 0;
}

@media(min-width:996px){
font-size: 1.1rem;
}
`;
export default ResumeItem
