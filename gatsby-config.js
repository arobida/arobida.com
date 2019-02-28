require("dotenv").config({
  path: `.env`,
});
const fs = require(`fs`)
const fetch = require(`node-fetch`)
const { buildClientSchema } = require(`graphql`)
const { createHttpLink } = require(`apollo-link-http`)

module.exports = {
  siteMetadata: {
    title: `arobida.com`,
    description: `My portfolio site built with gatsby`,
    author: `Andrew Robida`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `github`,
        typeName: `GitHub`,
        createLink: () =>
          createHttpLink({
            uri: `https://api.github.com/graphql`,
            headers: {
              Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
            },
            fetch,
          }),
        createSchema: async () => {
          const json = JSON.parse(fs.readFileSync(`${__dirname}/github.json`))
          return buildClientSchema(json.data)
        },
      },
    },
    {
        resolve: `gatsby-source-twitter`,
        options: {
            q: `theafr86`,
            count:`100`,
            result_type: `mixed`,
            credentials: {
                consumer_key: `${process.env.TWITTER_CKEY}`,
                consumer_secret: `${process.env.TWITTER_CSECRET}`,
                bearer_token: `${process.env.TWITTER_TOKEN}`
            },
            tweet_mode: 'extended'
        }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `arobida.com`,
        short_name: `my-site`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    `gatsby-plugin-netlify`,
  ],
}
