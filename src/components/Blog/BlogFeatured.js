import React from 'react'
import styled from 'styled-components';
import BlogCard from './BlogCard';

const BlogFeatured = ({ blogs }) => {
  return (
    <BlogFeaturedWrapper>
      <h2 className="featured-title">Featured Articles</h2>
      {blogs.map(item => (
        <div className="blog-card" key={item.id}>
          <BlogCard
            key={item.id}
            {...item}
            hide
            featured
          />
        </div>
      ))}
    </BlogFeaturedWrapper>
  )
}

const BlogFeaturedWrapper = styled.section`
display:flex;
flex-direction: column;
margin-left: 2.5rem;
border: 1px solid lightgray;
border-top: 1rem solid var(--lightGold);

.featured-title{
  text-align:center;
  text-transform: uppercase;
  margin-top: 1rem;
}

.blog-card{
  padding: 1rem;
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
