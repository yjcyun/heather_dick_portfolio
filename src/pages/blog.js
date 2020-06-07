import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/Title';
import BlogList from '../components/Blog/BlogList';

export const query = graphql`
  {
    blog: allStrapiBlogs(sort: {fields: date, order: DESC}) {
      nodes {
        author
        date(formatString: "MMM Do, YYYY")
        description
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
`
const blog = ({
  data: { blog: { nodes: blogs } }
}) => {
  return (
    <Layout>
      <div className="page">
        <Title title="Blog Page"
          subtitle="short introduction about this page or leave it blank"
        />
        <BlogList blogs={blogs} />
      </div>
    </Layout>
  )
}

export default blog
