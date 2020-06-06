import React from 'react'
import styled from 'styled-components';
import BlogCard from './BlogCard';

const BlogFeatured = ({blogs}) => {
  return (
    <BlogFeaturedWrapper>
    <h2>Featured Articles</h2>
      {blogs.map(item => (
        <div className="blog-card">
        <BlogCard
          key={item.id}
          {...item}
        />
        </div>
      ))}
    </BlogFeaturedWrapper>
  )
}

const BlogFeaturedWrapper = styled.section`
display:flex;
flex:1;
flex-direction: column;
margin-left: 1rem;
border: 1px solid tomato;
.blog-card{
  padding: 1rem;
}
@media (max-width:996px){
    display:none;
  }
`;

export default BlogFeatured
