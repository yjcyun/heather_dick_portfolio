import React from 'react';
import styled from 'styled-components';

const ResumeItem = ({ item }) => {
  const { company, show, role } = item;

  return (
    <ResumeItemWrapper>
      <p>{company} <span className="divider">|</span> {show} <span className="divider">|</span> {role}</p>
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
`;
export default ResumeItem
