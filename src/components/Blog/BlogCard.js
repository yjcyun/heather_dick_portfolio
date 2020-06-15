import React from 'react';
import { Link } from 'gatsby';
import { BsDot } from 'react-icons/bs';
import Image from 'gatsby-image';
import styled from 'styled-components';

const BlogCard = ({
  id, title, thumbnail, date, slug, author, description, hide, featured
}) => {
  return (
    <BlogCardWrapper hide={hide} featured={featured}>
      <Link to={`/blog/${slug}`}
        key={id}
        className="blog"
      >
        <article>
          <Image fluid={thumbnail.childImageSharp.fluid} className="blog-img" alt="blog thumbnail" />
          <div className="blog-card">
            <div className="blog-header">
              <div className="blog-author">{author}</div>
              <BsDot className="dot-icon" />
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
  margin-bottom: '2rem';
  text-align:center;
  background: var(--beige);
  border-radius: 10px;
}

.blog:hover .blog-text h3{
  color: var(--lightPurple);
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
  border-top-left-radius:10px;
  border-top-right-radius:10px;
}

.blog-header {
  display: flex;
  justify-content:center;
  align-items:center;
  font-size:0.9rem;
  color: grey;
}

.dot-icon{
  display: ${props => props.hide ? 'none' : ''}
}

.blog-text h3{
  margin: 0.5rem auto;
  text-transform: capitalize;
}
`;

export default BlogCard
