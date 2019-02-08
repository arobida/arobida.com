import React from 'react'
import { css } from '@emotion/core'
import { ReactTypeformEmbed } from 'react-typeform-embed'
import { FaEnvelope } from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      hey:'working'
    }
    this.openForm = this.openForm.bind(this)
  }
  openForm() {
    this.typeformEmbed.typeform.open()
  }
  render() {
    return (
      <Layout>
      <ReactTypeformEmbed
          autoOpen={false}
          popup
          url="https://andrewrobida.typeform.com/to/fJa9Kr"
          mode="drawer_right"
          ref={tf => {
            this.typeformEmbed = tf
          }}
          style={{display:'overlay'}}
        />
        <SEO title="Contact" />
        <h1>Hi from the contact page</h1>
        <div
          className="column"
          onClick={this.openForm}
          style={{ cursor: 'pointer' }}
        >
          <FaEnvelope size="2em" />
        </div>
      </Layout>
    )
  }
}
