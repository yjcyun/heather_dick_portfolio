module.exports = {
  siteMetadata: {
    title:
      "Heather Dick | Sirius Theatrical Company | Actor. Director. Writer. Linklater Voice Teacher. | Toronto",
    description:
      "A professional theatre, film, television and voice actor, director, writer and Designated Linklater Voice coach based in Toronto, Canada.  She is the Artistic Director of the Sirius Theatrical Company, a multi-disciplinary performance company.",
    author: "Christina Yun",
    twitterHandle: "@Sirius_Theatre",
    defaultImage: "/twitter-card.png",
    siteUrl: "https://heatherdick.ca",
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
        //apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [
          `resumes`,
          `blogs`,
          `productions`,
          `notifications`,
          `coachings`,
          `bios`,
          `titles`,
          `reviews`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:300,400`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://heatherdick.ca`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://heatherdick.ca",
        sitemap: "https://heatherdick.ca/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
