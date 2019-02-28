/**************************************
 Implement Gatsby's Node APIs in this file.
 See: https://www.gatsbyjs.org/docs/node-apis/
 **************************************/
 const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `GitHub`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
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
              name
              url
              homepageUrl
              description
              updatedAt
              resourcePath
            }
          }
        }
      }
    }
  `).then(result => {
    console.log(JSON.stringify(result, null, 4))
  })
}
