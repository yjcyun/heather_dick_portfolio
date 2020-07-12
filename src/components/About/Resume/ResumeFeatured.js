import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GiChainedHeart } from 'react-icons/gi';
import Image from 'gatsby-image';
import styled from 'styled-components';

// Sidebar mini gallery
const getImage = graphql`
  {
    allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "headshots"}}, sort: {fields: name, order: ASC}) {
      edges {
        node {
          childImageSharp {
            fluid {
              base64
              aspectRatio
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

  // Notification or events: props coming from ResumeList
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
            <div key={index} className="hero-image">
              <Image fluid={node.childImageSharp.fluid} alt="Heather's headshot" className="mini-gallery" />
              <p className="image-caption resume">Helen Tansey, Sundari Photography Inc.</p>
            </div>
          )
        })}
        <p>Helen Tansey, Sundari Photography Inc.
</p>
      </section>
    </BlogFeaturedWrapper>
  )
}

const BlogFeaturedWrapper = styled.section`
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
margin-top: 2rem;
border: 1px solid lightgray;
border-top: 1rem solid var(--mainPurple);
text-align:center;
padding: 0 0.5rem;

.featured-header{
  width: 100%;
  margin:8px auto;
  margin: 0.5rem auto;
}

.featured-title{
  font-size:25.6px;
  font-size: 1.6rem;
  margin-top:9.6px;
  margin-top: 0.6rem;
  color: var(--textPurple);
}

.featured-subtitle {
  text-transform: uppercase;
  letter-spacing:1.12px;
  letter-spacing: 0.07rem;
  margin-bottom:12.8px;
  margin-bottom: 0.8rem;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center;
  background: var(--lighterGold);
}

.featured-events{
  text-align: left;
  padding-bottom:16px;
  padding-bottom: 1rem;
}

.featured-events li {
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
}

.events-icon {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-top:3.2px;
  margin-top: 0.2rem;
}

.featured-events li span{
  -webkit-box-flex:7;
  -ms-flex:7;
  flex:7;
}

.mini-gallery {
  margin:8px 0;
  margin: 0.5rem 0;
}

.hero-image {
  position:relative;
}
`;

export default BlogFeatured