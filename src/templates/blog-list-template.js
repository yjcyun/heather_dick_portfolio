import React from 'react';
import { graphql, Link } from 'gatsby';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
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
        author
        date(formatString: "MMM Do, YYYY")
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
  }
`
const BlogListTemplate = (props) => {
  const { data: { posts: { nodes } } } = props;
  const { featured: { nodes: blogs } } = props.data;

  const { currentPage, numOfPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numOfPages;
  const prevPage = currentPage - 1 === 1 ? `/blog` : `/blog/${currentPage - 1}`;
  const nextPage = `/blog/${currentPage + 1}`;

  return (
    <Layout>
      <div className="page">
        <Title title="blogs" />
        <BlogListWrapper>
          <div className="blog-wrapper">
            <div className="blog-cards">
              {nodes.map(item => (
                <BlogCard
                  key={item.id}
                  {...item}
                />
              ))}
            </div>
            {/* blog featured */}
            <div className="blog-sidebar">
              <BlogFeatured blogs={blogs} />
            </div>
          </div>

          {/* pagination */}
          <div className="flex-container">
            <div className="pagination">
              {!isFirst && (
                <Link to={prevPage} className="page-direction">
                  Previous
                  <FiArrowLeft className="icons" />
                </Link>
              )}

              {Array.from({ length: numOfPages }, (_, i) => {
                return (
                  <Link
                    key={i}
                    to={`/blog/${i === 0 ? "" : i + 1}`}
                    className={i + 1 === currentPage ? 'page-numbers active' : 'page-numbers'}
                  >
                    {i + 1}
                  </Link>
                )
              })}
              {!isLast && (
                <Link to={nextPage} className="page-direction"><FiArrowRight className="icons" />Next</Link>
              )}
            </div>
            <div className="empty-flex" />
          </div>
        </BlogListWrapper>
      </div>
    </Layout>
  )
}

const BlogListWrapper = styled.section`
.blog-wrapper{
position:relative;
display:flex;
}
.page-numbers{
  padding: 0.5rem;
  color: #000;
  display:inline-block;
  transition: var(--mainTransition);
  cursor: pointer;
}
.page-numbers:hover{
  color: darkgray;
}
.active{
  color: var(--mainGold);
}
.pagination{
  font-family: var(--titleFont);
  display:flex;
  align-items:center;
  justify-content:flex-end;
  flex:5;
  margin-top: 2rem;
  padding-right: 3rem;
}
.page-direction{
  color: var(--mainGold);
  display:flex;
}
.icons {
  display:flex;
  align-items:center;
  margin:5px 2px 0;
}
.flex-container{
  display:flex;
}
.empty-flex{
  flex:2;
}

@media(max-width:415px){
  padding: 0 1rem;
}
@media(min-width: 768px){
  .blog-cards{
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px,1fr));
  grid-gap: 2rem;
  flex:3;
  }
  
}
@media (min-width: 996px){
  .blog-cards{
  flex:5;
  padding: 0 3rem;
  }

  .blog-sidebar{
  flex:2;
  }
}
`;

export default BlogListTemplate
