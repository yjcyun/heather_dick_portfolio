import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import SocialLinks from '../../constants/socialLinks';

const BlogFeatured = ({ blogs }) => {
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
        <p className="featured-subtitle">latest events :</p>
      </section>

    </BlogFeaturedWrapper>
  )
}

const BlogFeaturedWrapper = styled.section`
display:flex;
flex-direction: column;
margin-left: 2.5rem;
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
  margin-bottom: 2rem;
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

a{
  color: black !important;
  text-decoration: none !important;
}

img{
  margin:0 !important;
}

@media (max-width:996px){
    display:none;
  }
`;

export default BlogFeatured
