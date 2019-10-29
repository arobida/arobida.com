import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { FaEnvelope } from 'react-icons/fa'
import useInput from '../hooks/useInput'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from '../components/form'
import Sent from '../components/sent'
import Tweets from '../components/tweets'

// for netlify forms
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
const button = css`
  background: #131921;
  border-radius: 0.4em;
  width: 4em;
`

const Contact = props => {
  const [toggle, setToggle] = useState(false)
  const name = useInput('')
  const email = useInput('')
  const message = useInput('')
  const onSubmit = e => {
    setToggle(!toggle)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    })
      .then(() =>
        console.log(
          'Success!',
          `You have sent this encoded url: ${encode({
            'form-name': 'contact',
            name: name.value,
            email: email.value,
            message: message.value,
          })}`
        )
      )
      .catch(error => console.log(error))
    e.preventDefault()
  }
  const reset = () => {
    setToggle(false)
    name.clear()
    email.clear()
    message.clear()
  }

  return (
    <Layout>
      <SEO
        title="📩Contact"
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
          `contact`,
        ]}
      />
      <h1>Contact Me</h1>
      <p>
        If you would like to contact me you can do so on social media or use the
        contact form below...
      </p>
      {!toggle ? (
        <Form onSubmit={onSubmit} name={name} email={email} message={message} />
      ) : (
        <Sent name={name} email={email} reset={reset} />
      )}
      <div>
        <Tweets twits={props.data.allTweet.edges} />
      </div>
    </Layout>
  )
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
export default Contact
