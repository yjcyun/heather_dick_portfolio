import React from 'react'
import styled from 'styled-components';

const BannerSubtitle = ({ icon, title }) => {
  return (
    <BannerWrapper>
      <div className="banner-hr" />
      <h2 className="event-title">
        <img src={icon} className="icon" alt="icon" />  {title}
      </h2>
      <div className="banner-hr" />
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;

.event-title{
  text-transform: capitalize;
  font-family: 'Margetha';
  font-size: 56px;
  font-size: 2rem;
  line-height: 1.3;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: auto 16px;
  margin: auto 1rem;
  border-top: 1px solid var(--mainGold);
  padding-top: 2rem;
}

.icon{
  width: 60px;
  margin-right: 0px;
  margin-right: 0rem;
}

.banner-hr {
  display:none;
}

@media (min-width: 768px) {
  .event-title{
    font-size: 4rem;
    padding-top: 4rem;
  }

  .icon{
    width: 80px;
    margin-right: 2rem;
  }
}

@media (min-width:1024px){
  .banner-hr{
    display:flex;
    width: 6rem;
    height: 0.07rem;
    background-color: var(--mainGold);
    margin: 0 1rem;
  }

  .event-title{
    font-size: 4rem;
    border-top: 0;
    padding-top:0;
  }
}

@media (min-width:1366px){
  .banner-hr{
    width: 10rem;
  }
}
`;

export default BannerSubtitle