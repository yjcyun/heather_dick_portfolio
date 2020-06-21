import React from 'react';
import StyledHero from '../components/Home/StyledHero';
import Notification from '../components/Home/Notification';
import SEO from '../components/SEO';


export default function Home() {
  return (
    <div>
      <SEO description="The Home Page for Heather Dick, a Canadian actress, writer, director, Designated Linklater Voice Teacher, voice actor & acting and voice coach. The Home Page for the Sirius Theatrical Company, an independent theatre company in Toronto, Canada"/>
      <Notification />
      <StyledHero />
    </div>
  )
}
