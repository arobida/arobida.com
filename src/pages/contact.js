import { React, useState } from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { FaEnvelope } from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Tweets from '../components/tweets'

const Contact = ({ data }) => {
  const { count, setCount } = useState(0)
console.log(data)
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Hi from the contact page</h1>
      <div className="column" style={{ cursor: 'pointer' }}>
        <FaEnvelope size="2em" />
      </div>
      <div>
        <Tweets twits={data.allTweet.edges} />
      </div>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query TweetsQuery {
    allTweet {
      edges {
        node {
          user {
            screen_name
          }
          created_at
          full_text
          entities {
            urls {
              display_url
              url
            }
          }
          place {
            name
          }
        }
      }
    }
  }
`
