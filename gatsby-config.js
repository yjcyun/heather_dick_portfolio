module.exports = {
  siteMetadata: {
    title: 'Heather Dick | Sirius Theatrical Company | Actor. Director. Writer. Linklater Voice Teacher. | Toronto',
    description: "A professional theatre, film, television and voice actor, director, writer and Designated Linklater Voice coach based in Toronto, Canada.  She is the Artistic Director of the Sirius Theatrical Company, a multi-disciplinary performance company.",
    author: "Christina Yun",
    twitterHandle: "@Sirius_Theatre",
    image: "/twitter-card.png",
    siteUrl: "https://heatherdick.netlify.app"
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
        apiURL:`https://heatherdick.herokuapp.com`,
        // apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`resumes`, `blogs`, `productions`, `notifications`, `coachings`]
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            subset:[`latin`],
            variants: [`300`,`400`],
          },
          {
            family: `Poppins`,
            variants: [`300`, `400`]
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://heatherdick.netlify.app`,
      },
    },
  ]
}
