import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import StyledHero from '../components/Home/StyledHero';

import quoteIcon from '../images/quote.png';
import NavbarHome from '../components/NavbarHome';
// Icons made by < a href = "https://www.flaticon.com/authors/freepik" title = "Freepik" > Freepik</a > from < a href = "https://www.flaticon.com/" title = "Flaticon" > www.flaticon.com</a >

export default function Home() {
  return (
    <HomeWrapper>
      <NavbarHome />
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`

`;