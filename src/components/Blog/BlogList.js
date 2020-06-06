import React from 'react';
import styled from 'styled-components';
import BlogCard from './BlogCard';

const BlogList = ({ blogs }) => {
  return (
    <BlogListWrapper>
      {blogs.map(item => (
        <BlogCard
          key={item.id}
          {...item}
        />
      ))}
    </BlogListWrapper>
  )
}

const BlogListWrapper = styled.section`

@media(min-width: 768px){
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  grid-gap: 1.5rem;
  flex:3;
}
`;

export default BlogList
