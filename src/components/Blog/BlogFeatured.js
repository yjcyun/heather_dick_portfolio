import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GiChainedHeart } from 'react-icons/gi';
import Image from 'gatsby-image';
import styled from 'styled-components';
import SocialLinks from '../../constants/socialLinks';

const query = graphql`
 {
  notification:allStrapiNotifications {
    nodes {
      notification
      id
    }
  }
}
`;

const BlogFeatured = ({ blogs }) => {
  const { notification: { nodes: notification } } = useStaticQuery(query);

  const events = notification.map(item => {
    return (
      <ul className="featured-events" key={item.id}>
        <li>
          <GiChainedHeart className="events-icon" style={{color:'tomato'}}/>
          <span> {item.notification}</span>
        </li>
      </ul>
    )
  });

  return (
    <BlogFeaturedWrapper>
      <section className="featured-header">
        <h2 className="featured-title">All the latest from Heather</h2>
        <p className="featured-subtitle">connect with her</p>
        <SocialLinks styleClass="featured-icons" />
      </section>

      <section className="featured-header">
        <p className="featured-subtitle">featured posts</p>
        {blogs.map(item => {
          const newFeatured = item.featured
            ? (
              <div className="blog-card" key={item.id}>
                <Image fixed={item.thumbnail.childImageSharp.fixed} className="fixed-img" />
                <Link to={`/blog/${item.slug}`} className="title-link">
                  <p>{item.title}</p>
                  <small>{item.date}</small>
                </Link>
              </div>)
            : null;
          return newFeatured;
        })}
      </section>

      <section className="featured-header">
        <p className="featured-subtitle">latest events</p>
        {events}
      </section>

    </BlogFeaturedWrapper>
  )
}

const BlogFeaturedWrapper = styled.section`
display:flex;
flex-direction: column;
border: 1px solid lightgray;
border-top: 1rem solid var(--mainPurple);
text-align:center;

.featured-header{
  width: 90%;
  margin: 1rem auto;
}

.featured-title{
  font-size: 2rem;
  color: var(--textPurple);
  margin-bottom: 1.2rem;
  line-height: 1;
}

.featured-subtitle {
  text-transform: uppercase;
  letter-spacing: 0.07rem;
  margin-bottom: 1rem;
  display:flex;
  align-items: center;
  justify-content:center;
  background: var(--lighterGold);
}

.blog-card{
  padding: 0.2rem 0;
  display:flex;
}

.fixed-img{
  flex:2;
  border-radius:0.5rem;
}

.title-link{
  flex:3;
  margin-left: 0.5rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align:left;
}

.title-link p{
  font-weight: bold;
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

a{
  color: black !important;
  text-decoration: none !important;
}

img{
  margin:0 !important;
}
`;

export default BlogFeatured
