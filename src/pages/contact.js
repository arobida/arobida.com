import React from 'react'
import { css } from '@emotion/core'
import { FaEnvelope } from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      hey:'working'
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Contact" />
        <h1>Hi from the contact page</h1>
        <div
          className="column"
          style={{ cursor: 'pointer' }}
        >
          <FaEnvelope size="2em" />
        </div>
      </Layout>
    )
  }
}
