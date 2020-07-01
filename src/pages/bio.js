import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Info from '../components/Info';
import Reels from '../components/About/Reels/Reels';
import ResumeList from '../components/About/Resume/ResumeList';
import Audio from '../components/About/Audio/Audio';
import SEO from '../components/SEO';

export const query = graphql`
  query {
    aboutImg: file(relativePath:{eq:"headshots/headshot1.jpg"}){
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
      <SEO title="Biography" description="Heather Dick is an internationally recognized Canadian voice and performance artist. She is an actor, director, writer, comedian, coach, Designated Linklater Voice Teacher & audio book narrator. She has worked in theatre, film, television, commercials & has done voice work. She is the founding Artistic Director of the Sirius Theatrical Company." />
      <div className="about-page">
        <Title title="biography" subtitle="In 1989, Heather founded the Sirius Theatrical Company to explore a diverse range of approaches to performance outside of the traditional theatre structure. Having experienced the challenges facing emerging artists, she also wanted to create work and mentoring opportunities for them with established professionals. From this dream, Heather built the Sirius Theatrical Company (Toronto) into a flourishing organization which produced critically acclaimed multi-disciplinary and multi-cultural performances, mentored emerging artists and offered professional voice and acting training for 30 years. The STC now focuses on providing artistic consulting services to organizations that are developing and producing multi-cultural community arts performances and festivals." />
        <Info img={data.aboutImg.childImageSharp.fluid}>
          <h2 className="info-subtitle">Here’s  Heather - </h2>
          <h2 className="info-subtitle">Joy, Vitality and a Touch of the Re-DICK-ulous!</h2>
          <p>A performer, voice artist, director, writer and Designated Linklater Voice teacher, Heather brings energy, joy and a touch of humour to all that she does.

          Heather has worked across Canada performing in, directing or producing more than 80 shows and is a highly sought-after voice and acting coach. When not working on film, television, commercials or voice projects, she loves the live, moment-to-moment interaction with an audience that is an essential part of acting on the stage. As a director, Heather carefully and respectfully interprets the world imagined by the playwright through lighting, sound, music, sets and costumes so that she and her actors can delve deeply into the text and bring ‘real’ human beings to life. As the Artistic Director of the Sirius Theatrical Company, she has created exciting multi-disciplinary, multi-cultural performance pieces that integrated acting, dance, photography, music, visual art and spoken word.

          Heather and the Sirius Theatrical Company were the recipients of several grants to develop new works including: a Government of Canada Canadian Heritage 1812 Commemoration Fund grant (Forgotten Voices); a City of Toronto’s Cultural Hotspot Signature Partnership Project grant (My Lakeshore, My Home); and a City of Toronto Culture Division - TO Live With Culture grant (Tapestry of Dreams/Dreamweavers). In 2013, Heather and the Sirius Theatrical Company were presented with the GEM of the LAKESHORE Award for Cultural & Recreation for their work in “promoting arts and culture in the Lakeshore/Mimico community of Toronto”.  Heather, herself, received the Lakeshore Arts organization’s Impact Award in 2015 in “recognition of making continuous positive change and using the arts to engage and strengthen” the Lakeshore/Mimico community.

          As a writer, Heather has been published in two anthologies and is the winner of the Joseph Smrdelj Short Story Contest 2017.

          Heather’s work is rich, instinctual and vibrant with a touch of the Re-DICK-ulous!
</p><br />
        </Info>
      </div>
      <Reels />
      <Audio />
      <ResumeList />
    </Layout>
  )
}

export default bio
