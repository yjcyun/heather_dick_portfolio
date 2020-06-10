// import React from 'react';
// import { graphql } from 'gatsby';
// import Layout from '../components/Layout';
// import Title from '../components/Title';
// import BlogList from '../components/Blog/BlogList';
// import BlogListTemplate from '../templates/blog-list-template';

// export const query = graphql`
//   {
//     blog: allStrapiBlogs(sort: {fields: date, order: DESC}) {
//       nodes {
//         author
//         date(formatString: "MMM Do, YYYY")
//         description
//         id
//         slug
//         title
//         featured
//         thumbnail {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//             fixed(fit: COVER, height: 60, width: 80) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//       }
//     }
//   }
// `
// const blog = ({
//   data: { blog: { nodes: blogs } }
// }) => {
//   return (
//     <Layout>
//       <div className="page">
//         <Title title="blog" />
//         {/* <BlogListTemplate /> */}

//         {/* <BlogList blogs={blogs} /> */}
//       </div>
//     </Layout>
//   )
// }

// export default blog
