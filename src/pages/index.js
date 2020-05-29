import React from 'react';
import styled from 'styled-components';
import StyledHero from '../components/Home/StyledHero';
import quoteIcon from '../images/quote.png';
// Icons made by < a href = "https://www.flaticon.com/authors/freepik" title = "Freepik" > Freepik</a > from < a href = "https://www.flaticon.com/" title = "Flaticon" > www.flaticon.com</a >

export default function Home() {
  return (
    <HomeWrapper>
      <StyledHero>
        <button>enter</button>
      </StyledHero>
      <div className="quote-container">
        <div>
          <img src={quoteIcon} alt="quote icon" className="quote-icon" />
          <p className="quote-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi sed quaerat minima nostrum perspiciatis, delectus sequi cumque perferendis earum!</p>
          <span className="quote-author">- Heather Dick</span>
        </div>
      </div>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
.quote-container{
  width: 80vw;
  max-width: 40rem;
  height: 50vh;
  display: flex;
  justify-content:center;
  align-items: center;
  margin: -1rem auto;
}
.quote-icon{
  width: 3rem;
}
.quote-text{
  margin-left: 3rem;
  font-size: 1.5rem;
}
.quote-author {
  display:flex;
  justify-content:flex-end;
  font-family: 'Great Vibes', cursive;
  margin-top: 2rem;
  font-size: 1.3rem;
}

`;