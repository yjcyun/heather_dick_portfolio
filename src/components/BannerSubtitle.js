import React from 'react'
import styled from 'styled-components';

const BannerSubtitle = ({icon, title}) => {
  return (
    <BannerWrapper>
      <h2 className="event-title">
        <img src={icon} className="horn" />  {title}
        </h2>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
.event-title{
  text-transform: capitalize;
  font-family: 'Chasy';
  font-size: 3.5rem;
  line-height: 1;
  display:flex;
  justify-content: center;
  align-items: center;
  margin:auto 1rem;
}

.horn{
  width: 60px;
  margin-right: 0rem;
}

@media (min-width: 768px) {
  .event-title{
    font-size: 4rem;
  }
  .horn{
    width: 80px;
    margin-right: 2rem;
  }
}
`;

export default BannerSubtitle
