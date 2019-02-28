import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { FaEnvelope } from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Tweets from '../components/tweets'

const button = css`
  background: #131921;
  border-radius: 0.4em;
  width: 4em;
`

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    //this.openForm = this.openForm.bind(this)
  }
  // openForm() {
  //   this.typeformEmbed.typeform.open()
  // }
  render() {
    return (
      <Layout>
        <SEO
          title="Contact"
          keywords={[`andrew`, `robida`, `arobida`, `contact`]}
        />
        <h1>Contact Me</h1>
        <p>
          If you would like to contact me you can do so on social media or use
          the contact form below...
        </p>
        <button css={button}>
          <a href="mailto:afrobida@gmail.com">
            <FaEnvelope size="2em" color="#70cd88" />
          </a>
        </button>
        {/* <ReactTypeformEmbed
          popup
          autoOpen={false}
          url="https://andrewrobida.typeform.com/to/fJa9Kr"
          hideHeaders
          hideFooter
          buttonText="Go!"
          style={{ zIndex: -500 }}
          ref={tf => {
            this.typeformEmbed = tf
          }}
        /> */}
        <div>
          <Tweets twits={this.props.data.allTweet.edges} />
        </div>
      </Layout>
    )
  }
}

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
          id_str
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
