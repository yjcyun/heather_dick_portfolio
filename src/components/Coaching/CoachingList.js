import React from 'react'
import CoachingItem from './CoachingItem';
import { graphql, useStaticQuery } from 'gatsby';
import Title from '../Title';

const getImage = graphql`
  query {
    defaultBcg:file(relativePath: {eq: "defaultImg.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const CoachingList = () => {
  const data = useStaticQuery(getImage);
  const image = data.defaultBcg.childImageSharp.fluid;

  return (
    <section>
      <Title title="coaching philosophy"/>
      <h1>Acting Coaching</h1>
      <CoachingItem
        image={image}
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, officiis debitis. Veritatis ipsam dolor, molestias quasi earum cum nostrum incidunt harum soluta quo, hic expedita aspernatur nam accusantium nobis ad laudantium molestiae, sequi beatae! Cumque quos minima quod officiis consequatur nulla, molestiae voluptate voluptas mollitia provident, molestias dicta asperiores blanditiis."
      />
      <h1>Voice Coaching</h1>
      <CoachingItem 
        image={image}
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, officiis debitis. Veritatis ipsam dolor, molestias quasi earum cum nostrum incidunt harum soluta quo, hic expedita aspernatur nam accusantium nobis ad laudantium molestiae, sequi beatae! Cumque quos minima quod officiis consequatur nulla, molestiae voluptate voluptas mollitia provident, molestias dicta asperiores blanditiis."
      />
    </section>
  )
}

export default CoachingList
