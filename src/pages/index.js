import React from 'react';
import StyledHero from '../components/Home/StyledHero';
import NavbarHome from '../components/NavbarHome';


export default function Home() {
  return (
    <div className="page-margin">
      <NavbarHome />
      <StyledHero />
    </div>
  )
}
