const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `blog/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.slug
      }
    })
  })

  // amount of posts
  const posts = result.data.blogs.nodes;
  // posts per page
  const postsPerPage = 6;
  // how many pages?
  const numOfPages = Math.ceil(posts.length / postsPerPage);

  Array.from({length:numOfPages}).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve(`src/templates/blog-list-template.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numOfPages,
        currentPage: i + 1
      }
    })
  })
}