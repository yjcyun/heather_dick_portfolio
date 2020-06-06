import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Blog from '../components/Blog/Blog';

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
        <Title title="Heather's word of wisdom"
          subtitle="short introduction about this page or leave it blank"
        />
        <Blog blogs={blogs} />
      </div>
    </Layout>
  )
}

export default blog
