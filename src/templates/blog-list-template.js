import React from 'react';
import { graphql, Link } from 'gatsby';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import styled from 'styled-components';
import Title from '../components/Title';
import Layout from '../components/Layout';
import BlogFeatured from '../components/Blog/BlogFeatured';
import BlogCard from '../components/Blog/BlogCard';
import SEO from '../components/SEO';

export const query = graphql`
  query getPosts($skip:Int!, $limit:Int!){
    posts: allStrapiBlogs(sort: {fields: created_at, order: DESC}, limit: $limit, skip: $skip) {
      nodes {
        id
        slug
        description
        title
        featured
        author
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
  // pagination setup
  // const { currentPage, numOfPages } = props.pageContext;
  // const isFirst = currentPage === 1;
  // const isLast = currentPage === numOfPages;
  // const prevPage = currentPage - 1 === 1 ? `/blog` : `/blog/${currentPage - 1}`;
  // const nextPage = `/blog/${currentPage + 1}`;

  return (
    <Layout>
      <SEO title="Blog" description="Professional written and audio blogs on topics of interest to actors, directors, storytellers and musicians. Some of the topics include: audition techniques, voice work and comedy." />
      <div className="page">
        <Title page="blog" />
        <BlogListWrapper>
          <div className="blog-wrapper">
            {/* single card */}
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
              <BlogFeatured blogs={nodes} />
            </div>
          </div>

          {/* pagination */}
          <div className="flex-container">
            <div className="pagination">
            {/* If not on the first page, display a left arrow */}
              {/* {!isFirst && (
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
              })} */}

              {/* If not on the last page, display a right arrow */}
              {/* {!isLast && (
                <Link to={nextPage} className="page-direction"><FiArrowRight className="icons" />Next</Link>
              )} */}
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
  flex-direction:column;
  padding: 0 1rem;
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
  justify-content:center;
  flex:5;
  margin-top: 2rem;
  padding: 0 1rem;
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
  flex:0;
}

@media(min-width: 768px){
  .blog-wrapper{
    flex-direction:row;
  }

  .blog-cards{
    padding: 0 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
    grid-gap: 2rem;
    flex:5;
  } 

  .blog-sidebar{
    flex:3;
  }

  .empty-flex{
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

  .empty-flex{
  flex:2;
  }

  .pagination{
    padding: 0 2rem;
  }
}
`;

export default BlogListTemplate