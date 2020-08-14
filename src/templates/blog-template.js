import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import Layout from '../components/Layout';
import BlogFeatured from '../components/Blog/BlogFeatured';
import SEO from '../components/SEO';
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

export const query = graphql`
  query GetSingleBlog($slug: String){
    blog:strapiBlogs(slug:{eq:$slug}) {
      date(formatString: "MMMM Do, YYYY")
      blog
      author
      title
      slug
      description
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
        featured
        thumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            fixed(fit: COVER, height: 60, width: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    website:site {
      siteMetadata {
        author
        siteDescription: description
        siteUrl
        defaultImage
        siteTitle: title
        twitterHandle
      }
    }
  }
 `;

const BlogTemplate = ({ data }) => {
  const {
    blog: { date, blog, title, author, thumbnail, description, slug },
    featured: { nodes: blogs },
    website: { siteMetadata: { siteUrl } }
  } = data;
  console.log(`${siteUrl}/blog/${slug}`)

  return (
    <Layout>
      <SEO title={title} description={description} image={thumbnail.childImageSharp.fluid.src} />
      <BlogTemplateWrapper className="page">
        <div className="main-blog">
          <div className="header">
            <h5 className="blog-author">Written by {author}</h5>
            <h1 className="blog-title">
              {title}</h1>
            <hr className="center-hr" />
            <EmailShareButton className="share-icon">
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
            <FacebookShareButton
              className="share-icon"
              url={`${siteUrl}/blog/${slug}`}
              quote={description}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton
              className="share-icon"
              url={`${siteUrl}/blog/${slug}`}
              title={title}
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton><br />
            <Image fluid={thumbnail.childImageSharp.fluid} className="thumbnail" />
          </div>
          <ReactMarkdown source={blog} className="blog-markdown" />

          <Link to="/blog" >
            <button className="blog-btn btn">see all blogs</button>
          </Link>
        </div>
        {/* featured sidebar */}
        <div className="blog-sidebar">
          <BlogFeatured blogs={blogs} />
        </div>
      </BlogTemplateWrapper>
    </Layout>
  )
}

const BlogTemplateWrapper = styled.div`
padding: 1rem;
display: flex;
flex-direction:column;

.header{
padding-bottom: 4rem;
text-align:center;
}

.thumbnail{
  width: 70%;
  margin: 3rem auto 0;
}

.blog-markdown{
  margin-bottom: 5rem;
}

.blog-title{
  font-size: 2rem;
  text-transform: capitalize;
  margin-top:1rem;
}

.blog-author{
  font-size: 1rem;
  color: var(--mainGold);
}

.blog-sidebar {
  margin-top: 2rem;
}

.blog-sidebar li{
  list-style: none;
}

.blog-sidebar ul{
  padding: 0;
  padding-bottom: 1rem;
}

/* markdown */
ul, ol{
  padding: 2rem 0 0 2rem;
}

ul li{
  list-style: circle;
}

blockquote {
  border-left: 10px solid var(--lighterPurple);
  background:var(--lightestPurple);
  padding: 0.5rem;
  line-height:2;
  margin: 2rem 0;
}

.blog-markdown a{
  color: red;
  text-decoration:underline;
}

.blog-markdown p{
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size:1.1rem;
}

.blog-markdown em {
  text-decoration: italic;
}

p img{
  display:block;
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 3rem auto;
}
/* end of markdown */

.share-icon{
  margin:  1rem 0.5rem 0;
}

@media(min-width: 768px) {
  padding: 4rem 1rem;
  flex-direction:row;

  .blog-sidebar{
    margin-left:2rem;
    flex:2;
  }

  .main-blog{
    flex:5;
    padding:0 2rem;
  }
}

@media (min-width: 996px){
  .blog-title{
  font-size: 4rem;
  }
}
`;

export default BlogTemplate;