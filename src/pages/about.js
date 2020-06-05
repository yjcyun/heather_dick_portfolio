import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Button from '../components/Button';
import Info from '../components/Info';
import Reels from '../components/About/Reels/Reels';
import ResumeList from '../components/About/Resume/ResumeList';

export const query = graphql`
  query {
    aboutImg: file(relativePath:{eq:"headshot.jpg"}){
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const about = ({ data }) => {
  return (
    <Layout>
      <div className="page-height extra-margin max-width ipad-padding">
        <Title
          title="biography"
          subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nesciunt ex accusamus repudiandae, velit, ab corporis itaque iure natus quos tenetur. Eveniet, eum distinctio. Dolorum rem sint laudantium veniam, nulla cumque dolore unde blanditiis ducimus esse recusandae optio eum commodi!" />
        <Info reverse img={data.aboutImg.childImageSharp.fluid}>
          <h1>WHO IS HEATHER?</h1>
          <p>Heather Dick is an accomplished performer, director, Designated Linklater Voice Teacher, and acting instructor who loves to bring humour into every aspect of her work. She has worked across Canada performing in, directing or producing more than 70 shows and is a highly sought-after voice and acting coach. Working in both English and French, and in a variety of theatrical styles, she has been directing for over 24 years.</p><br />
          <p>Heather graduated from Queen’s University (BA Hons. with majors in both Drama and French), and between performing commitments, followed up her formal studies by attending the Master Drama Program (acting) in Banff, Alberta and training under several master coaches in Toronto. She has studied with the world renowned Shakespeare & Company (Lenox, Mass.) where she was also Teacher Trainee in Voice for their Month-long January professional actor intensives (2012 - 2014) and at the Kristin Linklater Voice Centre in Orkney, Scotland where she certified as a Designated Linklater Voice Teacher. In recent years, she has also branched out into writing plays and short stories.</p><br />
          <Button styled className="about-btn" text="contact for full resume" />
        </Info>
        <Reels />
        <ResumeList />
      </div>
    </Layout>
  )
}

export default about
