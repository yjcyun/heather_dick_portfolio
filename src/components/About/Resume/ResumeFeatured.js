import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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

const BlogFeatured = () => {
  const data = useStaticQuery(getImage);
  return (
    <BlogFeaturedWrapper>
      <section className="featured-header">
        <h2 className="featured-title">Heather's Corner</h2>
      </section>

      <section className="featured-header">
        <p className="featured-subtitle">latest news</p>
      </section>

      <section className="featured-header">
        <p className="featured-subtitle">mini gallery</p>
        {data.allFile.edges.map(({ node }, index) => {
          return (
            <Image fluid={node.childImageSharp.fluid} key={index} alt="Heather's headshot" className="mini-gallery"/>
          )
        })}
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

.featured-header{
  width: 90%;
  margin: 1rem auto;
}

.featured-title{
  font-size: 1.6rem;
  color: var(--textPurple);
}

.featured-subtitle {
  text-transform: uppercase;
  letter-spacing: 0.07rem;
  margin-bottom: 0.5rem;
  display:flex;
  align-items: center;
  justify-content:center;
  background: var(--lighterGold);
}

.mini-gallery {
  margin: 0.5rem 0;
}
`;

export default BlogFeatured
