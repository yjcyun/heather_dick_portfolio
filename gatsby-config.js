/*
styled-components
file system for images
strapi 
*/



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
    // {
    //   resolve: 'gatsby-source-vimeo-all',
    //   options: {
    //     clientId: process.env.GATSBY_VIMEO_ID,
    //     clientSecret: process.env.GATSBY_SECRET,
    //     accessToken: process.env.GATSBY_ACCESS_TOKEN
    //   }
    // },
    // {
    //   resolve: `gatsby-source-vimeo`,
    //   options: {
    //     clientID: process.env.GATSBY_VIMEO_ID,
    //     clientSecret: process.env.GATSBY_SECRET,
    //     userID: 'user117137254',
    //     transformer(video) {
    //       // Transform the video data [OPTIONAL]
    //       // i.e. Add extra fields or alter existing field
    //       video.newField = 'value'
    //       return video
    //     }
    //   },
    // },
  
  ]
}
