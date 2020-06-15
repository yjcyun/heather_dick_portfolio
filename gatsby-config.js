/*
styled-components
file system for images
strapi 
*/

module.exports = {
  siteMetadata: {
    title: 'Heather Dick | Sirius Theatrical Company | Actor. Director. Coach | Toronto',
    description: "A professional actor and certified voice coach with a decade of experience based in Toronto. Provide private acting and voice lessons.Add more description here...",
    author: "Christina Yun",
    twitterHandle: "@Sirius_Theatre",
    image: "/twitter-card.png",
    siteUrl: "https://heather-dick-draft.netlify.app"
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `headshots`,
        path: `${__dirname}/src/images/headshots/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://heatherdick.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`resumes`, `blogs`, `productions`, `notifications`, `coachings`],
        // singleTypes: [`home-page`, `contact`],
      },
    }
  ]
}
