import React from 'react';
import styled from 'styled-components';

const ResumeItem = ({ item }) => {
  const { company, show, role, location, names } = item;

  return (
    <ResumeItemWrapper>
      <p><strong>{show}</strong>
        {role ? <><span className="divider"> | </span> {role}</> : ''}
        {company ? <><span className="divider"> | </span> {company}</> : ''}
        {location ? <> <span className='divider'>|</span> {location}</> : ''}
        {names ? <> <span className='divider'>|</span> {names}</> : ''}

      </p>
    </ResumeItemWrapper>
  )
}

const ResumeItemWrapper = styled.div`
text-transform: capitalize;
letter-spacing: 0.1rem;
margin:0.5rem 0;
font-size: 1.1rem;

.divider{
  color: var(--lightGold);
}
.none {
  opacity: 0;
}
`;
export default ResumeItem
