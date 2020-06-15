import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GiChainedHeart } from 'react-icons/gi';
import Image from 'gatsby-image';
import styled from 'styled-components';

const getImage = graphql`
  {
    allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "headshots"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;

const BlogFeatured = ({ notification }) => {
  const data = useStaticQuery(getImage);
  const events = notification.map((item, index) => {
    return (
      <ul key={index} className="featured-events">
        <li>
          <GiChainedHeart
            style={{ color: 'tomato' }}
            className="events-icon" />
          <span>{item.notification}</span>
        </li>
      </ul>
    )
  });

  return (
    <BlogFeaturedWrapper>
      <section className="featured-header">
        <h2 className="featured-title">Heather's Corner</h2>
      </section>

      <section className="featured-header">
        <p className="featured-subtitle">latest news</p>
        {events}
      </section>

      <section className="featured-header">
        <p className="featured-subtitle">mini gallery</p>
        {data.allFile.edges.map(({ node }, index) => {
          return (
            <Image fluid={node.childImageSharp.fluid} key={index} alt="Heather's headshot" className="mini-gallery" />
          )
        })}
        <p>Photos taken by John Doe</p>
      </section>
    </BlogFeaturedWrapper>
  )
}

const BlogFeaturedWrapper = styled.section`
display:flex;
flex-direction: column;
margin-top: 2rem;
border: 1px solid lightgray;
border-top: 1rem solid var(--mainPurple);
text-align:center;
padding: 0 0.5rem;

.featured-header{
  width: 100%;
  margin: 0.5rem auto;
}

.featured-title{
  font-size: 1.6rem;
  margin-top: 0.6rem;
  color: var(--textPurple);
}

.featured-subtitle {
  text-transform: uppercase;
  letter-spacing: 0.07rem;
  margin-bottom: 0.8rem;
  display:flex;
  align-items: center;
  justify-content:center;
  background: var(--lighterGold);
}

.featured-events{
 text-align: left;
 padding-bottom: 1rem;
}

.featured-events li {
  display:flex;
}

.events-icon {
  flex: 1;
  margin-top: 0.2rem;
}

.featured-events li span{
  flex:7;
}

.mini-gallery {
  margin: 0.5rem 0;
}
`;

export default BlogFeatured
