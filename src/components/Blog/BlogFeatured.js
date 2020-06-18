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
      <ul key={item.id} className="featured-events">
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
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
border: 1px solid lightgray;
border-top: 1rem solid var(--mainPurple);
text-align:center;

.featured-header{
  width: 90%;
  margin:16px auto;
  margin: 1rem auto;
}

.featured-title{
  font-size: 1.5rem;
  color: var(--textPurple);
  margin-bottom:19.2px;
  margin-bottom: 1.2rem;
}

.featured-subtitle {
  text-transform: uppercase;
  letter-spacing:1.12px;
  letter-spacing: 0.07rem;
  margin-bottom:16px;
  margin-bottom: 1rem;
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

.blog-card{
  padding:3.2px 0;
  padding: 0.2rem 0;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
}

.fixed-img{
  -webkit-box-flex:2;
      -ms-flex:2;
          flex:2;
  border-radius:0.5rem;
}

.title-link{
  -webkit-box-flex:3;
      -ms-flex:3;
          flex:3;
  margin-left:8px;
  margin-left: 0.5rem;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  text-align:left;
}

.title-link p{
  font-weight: bold;
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


a{
  color: black !important;
  text-decoration: none !important;
}

img{
  margin:0 !important;
}
`;

export default BlogFeatured
