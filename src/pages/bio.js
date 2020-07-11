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
        <Info img={data.aboutImg.childImageSharp.fluid}>
          {/* <h2 className="info-subtitle">Joy, Vitality and a Touch of the Re-DICK-ulous!</h2>
          <p>A vivacious performer, voice artist, director, writer and Designated Linklater Voice teacher, Heather brings energy, joy and a touch of humour to all that she does.</p>
          <p>
            She has worked across Canada performing in, directing or producing more than 80 shows and is a highly sought-after voice and acting coach. When not working on film, television, commercials or voice projects, she loves the live, moment-to-moment interaction with an audience that is an essential part of acting on the stage. When directing, she carefully and respectfully interprets the world imagined by the playwright through lighting, sound, music, sets and costumes so that she and her actors can delve deeply into the text and bring ‘real’ human beings to life. As the Artistic Director of the Sirius Theatrical Company, she has created exciting multi-disciplinary, multi-cultural performance pieces that integrated acting, dance, photography, music, visual art and spoken word.</p>
          <p>In 1989 Heather founded the <strong>Sirius Theatrical Company (Toronto)</strong> to explore a diverse range of approaches to performance outside of the traditional theatre structure. From the seed of a dream, Heather built the <strong>STC</strong> into a flourishing organization. A part of the Toronto theatre scene for 30 years, the <strong>STC</strong> mentored emerging artists, offered professional voice and acting training, and produced critically acclaimed multi-disciplinary and multi-cultural performances pieces that integrated acting, dance, photography, music, visual art and spoken word.</p>
          <p>
            Heather and the <strong>STC</strong> were the recipients of several grants to develop new works including from: the Government of Canada Canadian Heritage 1812 Commemoration Fund grant <strong>(Forgotten Voices)</strong>; the City of Toronto Cultural Hotspot Signature Partnership program <strong>(My Lakeshore, My Home)</strong>; and the City of Toronto Culture Division - TO Live With Culture program <strong>(Tapestry of Dreams/Dreamweavers)</strong>. In 2013, Heather and the Sirius Theatrical Company were presented with the <strong>GEM of the LAKESHORE Award - Culture & Recreation</strong> for their work in “promoting arts and culture in the Lakeshore/Mimico community of Toronto”.  Heather, herself, received the Lakeshore Arts organization’s <strong>Impact Award</strong> in 2015 in “recognition of making continuous positive change and using the arts to engage and strengthen” the Lakeshore/Mimico community.
          </p>
          <p>
            As a writer, Heather has been published in two anthologies and is the <strong>winner of the Joseph Smrdelj Short Story Contest 2017</strong>.</p>
          <p>
            Heather’s work is <strong>rich, instinctual</strong> and <strong>vibrant</strong> with a <strong>touch of the Re-DICK-ulous!</strong>
          </p> */}
        </Info>
      </div>
      <Reels />
      <Audio />
      <ResumeList />
    </Layout>
  )
}

export default bio
