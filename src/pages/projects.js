import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Repos from '../components/repos'

const Projects = ({ data }) => (
  <Layout>
    <SEO
      title="🏗Projects"
      keywords={[
        `andrew`,
        `robida`,
        `arobida`,
        `andrew robida`,
        `portfolio`,
        `gatsbyjs developer`,
        `reactjs developer`,
        `graphql developer`,
        `website developer`,
        `jamstack developer`,
        `javascript developer`,
        `projects`,
        `examples`,
        `websites`,
      ]}
    />
    <h1>Current Projects</h1>
    <p>Here is a current list of projects that I am working on...</p>
    <Repos repositories={data.github.viewer.repositories} />
  </Layout>
)

export default Projects

export const query = graphql`
  query RepositoriesQuery {
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
`
