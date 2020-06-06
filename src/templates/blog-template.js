import React from 'react';
import { graphql, Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import Layout from '../components/Layout';

export const query = graphql`
  query GetSingleBlog($slug: String){
    blog:strapiBlogs(slug:{eq:$slug}) {
      date(formatString: "MMMM Do, YYYY")
      blog
      author
      title
    }
  }
 `;

const BlogTemplate = ({ data }) => {
  const { blog: { date, blog, title, author } } = data;

  return (
    <Layout>
      <BlogTemplateWrapper>
        
      </BlogTemplateWrapper>
    </Layout>
  )
}

const BlogTemplateWrapper = styled.div`

`;

export default BlogTemplate
