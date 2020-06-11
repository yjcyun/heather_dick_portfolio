/*
styled-components
file system for images
strapi 
*/

const VIMEO_ID = process.env.REACT_APP_VIMEO_ID;
const SECRET = process.env.REACT_APP_SECRET;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`resumes`, `blogs`, `productions`],
        // singleTypes: [`home-page`, `contact`],
      },
    },
    {
      resolve: 'gatsby-source-vimeo-all',
      options: {
        clientId: VIMEO_ID,
        clientSecret: SECRET,
        accessToken: ACCESS_TOKEN
      }
    },
  ]
}
