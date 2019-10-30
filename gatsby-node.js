/**************************************
 Implement Gatsby's Node APIs in this file.
 See: https://www.gatsbyjs.org/docs/node-apis/
 **************************************/
const path = require(`path`)

// This creates the event pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
  {
    github {
      viewer {
        repositories(
          privacy: PUBLIC
          affiliations: OWNER
          isFork: false
          first: 100
        ) {
          nodes {
            id
            name
            url
            homepageUrl
            description
            updatedAt
            resourcePath
            openGraphImageUrl
          }
        }
      }
    }
  }
  `).then(result => {
    console.log(result.data.github.viewer.repositories.nodes)
    result.data.github.viewer.repositories.nodes.forEach((node ) => {
      console.log(node.name)
      createPage({
        path: "/projects/" + node.name,
        component: path.resolve(`./src/templates/projectPage.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.name,
          id: node.id,
          name:node.name,
          description:node.description,
          image:node.openGraphImageUrl,
          github:node.url,
          preview:node.homepageUrl
        },
      })
    })
  })
}