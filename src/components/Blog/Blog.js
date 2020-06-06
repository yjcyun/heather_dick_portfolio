import React from 'react';
import styled from 'styled-components';
import BlogList from './BlogList';
import BlogFeatured from './BlogFeatured';



const Blog = ({blogs}) => {
  return (
    <BlogWrapper>
      <BlogList blogs={blogs} />
    </BlogWrapper>
  )
}

const BlogWrapper = styled.section`
  display:flex;
`;
export default Blog
