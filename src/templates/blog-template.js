import React from 'react';
import { graphql, Link } from 'gatsby';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import Layout from '../components/Layout';
import BlogFeatured from '../components/Blog/BlogFeatured';
import Button from '../components/Button';

export const query = graphql`
  query GetSingleBlog($slug: String){
    blog:strapiBlogs(slug:{eq:$slug}) {
      date(formatString: "MMMM Do, YYYY")
      blog
      author
      title
    }
    featured: allStrapiBlogs(sort: {fields: date, order: DESC}) {
      nodes {
        id
        slug
        title
        thumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
 `;

const BlogTemplate = ({ data }) => {
  const { blog: { date, blog, title, author }, featured: { nodes: blogs } } = data;

  return (
    <Layout>
      <BlogTemplateWrapper className="page">
        <div className="header">
          <h1 className="blog-title">
            {title}</h1>
          <h5 className="blog-author">Written by {author} | {date}</h5>
        </div>

        <div className="main-blog">
          <article className="blog-content">
            <ReactMarkdown source={blog} className="blog-markdown" />
            <Link to="/blog" className="blog-btn">
              <Button styled text="back to blog" />
            </Link>
          </article>
          <article className="blog-sidebar">
            <BlogFeatured blogs={blogs} />
          </article>
        </div>
        
      </BlogTemplateWrapper>
    </Layout>
  )
}

const BlogTemplateWrapper = styled.div`
padding: 0 1rem;

.main-blog{
  display:flex;
  margin-top: 3rem;
}

.blog-content{
  flex:1;
  display:flex;
  flex-direction: column;
  min-height: 1065px;
  justify-content: space-between;
}

.blog-markdown{
  margin-bottom: 5rem;
}

.blog-title{
  font-size: 2rem;
  text-transform: capitalize;
}

.blog-author{
  font-size: 1rem;
  color: grey;
}

/* .blog-btn {
    color: black;
    text-transform:uppercase;
    letter-spacing:0.1rem;
    font-size: 1.3rem;
    margin-top: 2rem;
    box-shadow: 0 2px black;
    text-decoration:none;
  }

  .blog-btn:hover {
    color: var(--lightPurple);
    box-shadow: 0 2px var(--lightPurple);
  }

  .blog-btn span{
    margin-left: 1rem;
  } */

ul, ol{
  padding-left: 2rem;
  display: inline-block;
}

ul li{
  list-style: circle;
}

blockquote {
  border: 1px solid var(--mainGold);
  border-left: 10px solid var(--mainGold);
  padding: 0.5rem;
  border-radius: 0.3rem;
  line-height:2;
  margin: 2rem 0;
  display: inline-block;
}

a{
  text-decoration: underline;
  color: var(--lightPurple);
}

p{
  line-height: 1.7;
  font-size:1.1rem;
}

img{
  width: 100%;
  height: auto;
  margin: 3rem 0;
}

@media(min-width: 768px) {
  padding: 0 2rem;
}
@media (min-width: 996px){
  .blog-content{
  flex:5;
  }

  .blog-sidebar{
  flex:2;
  }
  .blog-title{
  font-size: 4rem;
}

}
`;

export default BlogTemplate;
