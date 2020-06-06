import React from 'react';
import { Link } from 'gatsby';
import { BsDot } from 'react-icons/bs';
import Image from 'gatsby-image';
import styled from 'styled-components';

const BlogCard = ({ id, title, thumbnail, date, slug, author, description }) => {
  return (
    <BlogCardWrapper>
      <Link to={`/blog/${slug}`}
        key={id}
        className="blog"
      >
        <article>
          <Image fluid={thumbnail.childImageSharp.fluid} className="blog-img" alt="blog thumbnail" />
          <div className="blog-card">
            <div className="blog-header">
              <div className="blog-author">{author}</div>
              <BsDot />
              <p>{date}</p>
            </div>
            <div className="blog-text">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </article>
      </Link>
    </BlogCardWrapper>
  )
}

const BlogCardWrapper = styled.div`
.blog{
  height: auto;
  display:grid;
  transition: var(--transition);
  margin-bottom: 2rem;
  text-align:center;
  box-shadow:0px 1px 2px rgba(46,41,51,0.08), 0px 2px 4px rgba(71,63,79,0.08)
}

.blog article {
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
}

.blog-card {
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 1.5rem 1rem;
}

.blog-img{
  height: 15rem;
}

.blog-header {
  display: flex;
}
`;

export default BlogCard
