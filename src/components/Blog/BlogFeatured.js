import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import SocialLinks from '../../constants/socialLinks';

const BlogFeatured = ({ blogs }) => {
  console.log(blogs);
  return (
    <BlogFeaturedWrapper>
      <section className="featured-header">
        <h2 className="featured-title">All the latest from Heather</h2>
        <hr />
        <p className="featured-subtitle">connect with her :</p>
        <SocialLinks styleClass="featured-icons" />
      </section>

      <section className="featured-header">
        <p className="featured-subtitle">featured posts :</p>
        {blogs.map(item => (
          <div className="blog-card" key={item.id}>
            <Link to={`/blog/${item.slug}`}>
              <h3>{item.title}</h3>
            </Link>
          </div>
        ))}
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
border-top: 1rem solid var(--lightGold);

.featured-header{
  width: 90%;
  margin: 1rem auto;
}
.featured-title{
  font-size: 2rem;
  color: var(--textPurple);
}
.featured-subtitle {
  text-transform: uppercase;
  letter-spacing: 0.07rem;
  margin-bottom: 0.5rem;
}

.blog-card{
  padding: 0.2rem 0;
  text-decoration:underline;
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
