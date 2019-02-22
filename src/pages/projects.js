import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Repos from '../components/repos'

const Projects = ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <h1>Hi from the project page</h1>
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
