import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Title from '../components/Title';
import Layout from '../components/Layout';
import BlogFeatured from '../components/Blog/BlogFeatured';
import BlogCard from '../components/Blog/BlogCard';


export const query = graphql`
  query getPosts($skip:Int!, $limit:Int!){
    posts: allStrapiBlogs(sort: {fields: date, order: DESC}, limit: $limit, skip: $skip) {
      nodes {
        id
        slug
        description
        title
        featured
        date(formatString: "MMM Do, YYYY")
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
const BlogListTemplate = (props) => {
  const { data: { posts: { nodes } } } = props;
  const { currentPage, numOfPages } = props.pageContext;
  return (
    <Layout>
      <Title title="blogs" />
      <BlogListWrapper>
        <div className="blog-cards">
          {nodes.map(item => (
            <BlogCard
              key={item.id}
              {...item}
            />
          ))}
        </div>
        <div>
          {Array.from({ length: numOfPages }, (_, i) => {
            return (
              <Link
                key={i}
                to={`/blogs/${i === 0 ? "" : i + 1}`}
                >
                {i + 1}
              </Link>
            )
          })}
        </div>
        {/* <div className="blog-sidebar">
          <BlogFeatured blogs={nodes} />
        </div> */}
      </BlogListWrapper>
    </Layout>
  )
}
// className={i + 1 === currentPage ? `${pageBtn} ${pageBtnActive}` : `${pageBtn}`}

const BlogListWrapper = styled.div`

              `;

export default BlogListTemplate
