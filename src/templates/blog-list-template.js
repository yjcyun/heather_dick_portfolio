import React from 'react';
import { graphql, Link } from 'gatsby';
import styles from 'styled-components';
import Title from '../components/Title';
import Layout from '../components/Layout';
import BlogList from '../components/Blog/BlogList';
import BlogCard from '../components/Blog/BlogCard';


export const query = graphql`
  query getPosts($skip:Int!, $limit:Int!){
    posts: allStrapiBlogs(sort: {fields: date, order: DESC}, limit: $limit, skip: $skip) {
      nodes {
        slug
        description
        title
        date(formatString: "MMM Do, YYYY")
        thumbnail {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
const BlogListTemplate = (props) => {
  const { data } = props;
  console.log(props);
  return (
    <>
      <Title title="blogs" />
      <div>
        {data.posts.nodes.map(item => {
          console.log(item);
          return(
            <BlogCard
              key={item.id}
              {...item}
            />
          )
        })}
      </div>
    </>
  )
}

export default BlogListTemplate
