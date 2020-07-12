import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Info from '../components/About/Info/Info';
import Reels from '../components/About/Reels/Reels';
import ResumeList from '../components/About/Resume/ResumeList';
import Audio from '../components/About/Audio/Audio';
import SEO from '../components/SEO';

export const query = graphql`
  query {
    aboutImg: file(relativePath:{eq:"headshots/headshot6.jpg"}){
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;


const bio = ({ data }) => {
  return (
    <Layout>
      <SEO title="Biography" description="Heather Dick is an internationally recognized Canadian voice and performance artist. She is an actor, director, writer, comedian, coach, Designated Linklater Voice Teacher & audio book narrator. She has worked in theatre, film, television, commercials & has done voice work. She is the founding Artistic Director of the Sirius Theatrical Company. " />
      <div className="about-page">
        <Title page="bio" />
        <Info />
      </div>
      <Reels />
      <Audio />
      <ResumeList />
    </Layout>
  )
}

export default bio
