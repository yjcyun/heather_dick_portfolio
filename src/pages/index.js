import React from 'react';
import StyledHero from '../components/Home/StyledHero';
import NavbarHome from '../components/NavbarHome';
import Notification from '../components/Home/Notification';

export default function Home() {
  return (
    <div>
      {/* <NavbarHome /> */}
      <Notification />
      <StyledHero />
    </div>
  )
}
