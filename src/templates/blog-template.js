import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
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
      thumbnail {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
  const { blog: { date, blog, title, author, thumbnail }, featured: { nodes: blogs } } = data;

  return (
    <Layout>
      <BlogTemplateWrapper className="page">
        <div className="main-blog">
          <div className="header">
            <h5 className="blog-author">Written by {author} | {date}</h5>
            <h1 className="blog-title">
              {title}</h1>
            <hr className="center-hr" />
            <Image fluid={thumbnail.childImageSharp.fluid} className="thumbnail" />
          </div>
          <ReactMarkdown source={blog} className="blog-markdown" />
          <Link to="/blog" className="blog-btn">
            <Button styled text="back to blog" />
          </Link>
        </div>

        <div className="blog-sidebar">
          <BlogFeatured blogs={blogs} />
        </div>
      </BlogTemplateWrapper>
    </Layout>
  )
}

const BlogTemplateWrapper = styled.div`
padding: 0 1rem;
display: flex;

.header{
padding-bottom: 4rem;
text-align:center;
}

.thumbnail{
  width: 70%;
  margin: auto;
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
  color: var(--mainGold);
}

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
  .main-blog{
  flex:5;
  }

  .blog-sidebar{
  flex:2;
  }
  .blog-title{
  font-size: 4rem;
  }

  .blog-sidebar ul{
  display: flex;
  padding-left: 0;
  }

.blog-sidebar li{
  list-style: none;
}

}
`;

export default BlogTemplate;
