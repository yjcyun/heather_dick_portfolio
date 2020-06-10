import React from 'react';
import styled from 'styled-components';
import BlogCard from './BlogCard';
import BlogFeatured from './BlogFeatured';

const BlogList = ({ blogs }) => {
  return (
    <BlogListWrapper>
      <div className="blog-cards">
        {blogs.map(item => (
          <BlogCard
            key={item.id}
            {...item}
          />
        ))}
      </div>

      <div className="blog-sidebar">
        <BlogFeatured blogs={blogs} />
      </div>

    </BlogListWrapper>
  )
}

const BlogListWrapper = styled.section`
position:relative;
display:flex;


@media(max-width:415px){
  padding: 0 1rem;
}
@media(min-width: 768px){
  .blog-cards{
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px,1fr));
  grid-gap: 1.5rem;
  flex:3;
  }
  
}
@media (min-width: 996px){
  .blog-cards{
  flex:5;
  }

  .blog-sidebar{
  flex:2;
  }
}
`;

export default BlogList
