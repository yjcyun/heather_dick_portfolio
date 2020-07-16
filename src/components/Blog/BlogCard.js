import React from 'react';
import { Link } from 'gatsby';
import { BsDot } from 'react-icons/bs';
import Image from 'gatsby-image';
import styled from 'styled-components';

// Props coming from blog-list-template
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
          <div className="blog-img-container">
            <img src={thumbnail.childImageSharp.fluid.src} />
            {/* <Image
              fluipd={thumbnail.childImageSharp.fluid}
              className="blog-img"
              alt="blog thumbnail"
            /> */}
          </div>
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
margin-bottom:2rem;

.blog{
  height: auto;
  display:-ms-grid;
  display:grid;
  -webkit-transition:var(--transition);
  transition: var(--transition);
  margin-bottom:'32px';
  margin-bottom: '2rem';
  text-align:center;
  /* background: var(--beige); */
  border-radius: 10px;
}

.blog:hover .blog-text h3{
  color: var(--lightPurple);
}

.blog article {
  height: 100%;
  display: -ms-grid;
  display: grid;
  -ms-grid-rows: auto 1fr;
      grid-template-rows: auto 1fr;
}

.blog-card {
  display: -ms-grid;
  display: grid;
  -ms-grid-rows: auto 1fr auto;
      grid-template-rows: auto 1fr auto;
  padding:24px 16px;
  padding: 1.5rem 1rem;
}

.blog-img-container {
  height: 15rem;
}

.blog-img-container img {
  height: 100%;
  object-fit: contain;
}

/* .blog-img{
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  object-fit: contain;
} */

.blog-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  font-size:14.4px;
  font-size:0.9rem;
  color: grey;
}

.dot-icon{
  display: ${props => props.hide ? 'none' : ''}
}

.blog-text h3{
  margin:8px auto;
  margin: 0.5rem auto;
  text-transform: capitalize;
}

@media (min-width: 768px) {
  margin-bottom: 0;
}
`;

export default BlogCard