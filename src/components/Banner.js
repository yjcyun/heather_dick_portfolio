import React from 'react';
import styled from 'styled-components';
import bannerImg from '../images/banner.png';
// bannerImg from https://www.canva.com/design/DAD-JB8umaY/lsfo9QMUKd7NZYkGdmEUOw/edit?category=tACFakiSKJ8
import quoteOpenIcon from '../images/quote.svg';
import quoteCloseIcon from '../images/quote-close.svg';
// Icons made by < a href = "https://www.flaticon.com/authors/freepik" title = "Freepik" > Freepik</a > from < a href = "https://www.flaticon.com/" title = "Flaticon" > www.flaticon.com</a >

const Banner = ({ heading, subHeading }) => {
  return (
    <BannerWrapper>
      <h1>
        <img src={quoteOpenIcon} alt="quote-icon" className="quote-icon" />
        {heading}
        <img src={quoteCloseIcon} alt="quote-icon" className="quote-icon" />
      </h1>
      <h3>{subHeading}</h3>
      {/* <img src={ornamentImg} alt="ornament" className="ornament-img"/> */}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.section`
  background: radial-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.1)), url(${bannerImg});
  background-position:center;
  background-size: cover;
  background-repeat:no-repeat;
  min-width: 20rem;
  max-width: 1040px;
  width: 90%;
  height: 30vh;
  margin: 0 auto;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

h1{
  color: #efe9d0 ;
  font-size: 3.5rem;
  font-family: var(--cursiveFont);
letter-spacing: 0.2rem;
display:flex;
}

h3{
color: var(--lightGold);
font-size: 1.1rem;
text-transform: uppercase;
font-weight: 400;
font-family: var(--titleFont);
letter-spacing: 0.05rem;
}

.ornament-img{
width: 10rem;
}

.quote-icon{
  width: 2rem; 
  margin:0 1rem;
  align-self: flex-start;
}
@media (max-width: 768px) {
  width:100%;
  padding: 0;
  h1 {
    font-size:2rem;
  }
  .quote-icon{
    width:1rem;
    margin: 0 0.5rem;
  }
}
`;

export default Banner
