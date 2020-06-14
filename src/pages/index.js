import React from 'react';
import StyledHero from '../components/Home/StyledHero';
import Notification from '../components/Home/Notification';
import SEO from '../components/SEO';


export default function Home() {
  return (
    <div>
      <SEO title="Home" description="Heather Dick is..."/>
      <Notification />
      <StyledHero />
    </div>
  )
}
