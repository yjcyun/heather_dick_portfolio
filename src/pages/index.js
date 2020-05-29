import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import StyledHero from '../components/Home/StyledHero';
import quoteIcon from '../images/quote.png';
// Icons made by < a href = "https://www.flaticon.com/authors/freepik" title = "Freepik" > Freepik</a > from < a href = "https://www.flaticon.com/" title = "Flaticon" > www.flaticon.com</a >

export default function Home() {
  return (
    <HomeWrapper>
      <Link to="/landing" className="btn enter-btn">enter</Link>
      <StyledHero>
        
      </StyledHero>
      <div className="quote-container">
        <div>
          <img src={quoteIcon} alt="quote icon" className="quote-icon" />
          <p className="quote-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi sed quaerat minima nostrum perspiciatis, delectus sequi cumque perferendis earum!</p>
          <p className="quote-author">- Heather Dick</p>
        </div>
      </div>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
position: relative;
.enter-btn{
  text-transform:uppercase;
  position: absolute;
  z-index:2;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: var(--mainPurple);
  color: var(--mainWhite);
  font-size: 1.5rem;
  transition: var(--transition);
}

.enter-btn:hover{
  background: var(--lightPurple);
}

.quote-container{
  width: 85vw;
  max-width: 40rem;
  height: 50vh;
  display: flex;
  justify-content:center;
  align-items: center;
  margin: 0 auto;
}

.quote-icon{
  width: 2.3rem;
}

.quote-text{
  margin-left: 2rem;
  font-size: 1.2rem;
}

.quote-author {
  display:flex;
  justify-content:flex-end;
  font-family: 'Great Vibes', cursive;
  margin-top: 2rem;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
}

@media (min-width: 768px) {
  .quote-icon{
    width: 3rem;
  }
  .quote-text{
    margin-left: 3rem;
    font-size: 1.5rem;
  }
}

@media(max-width: 350px) {
  .quote-icon{
    width: 1rem;
  }
  .quote-text{
    margin-left: 1rem;
    font-size: 1rem;
  }
}
`;