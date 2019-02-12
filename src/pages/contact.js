import {React, useState} from 'react'
import { css } from '@emotion/core'
import { FaEnvelope } from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'

const  Contact =() => {
  const {count, setCount}= useState(0)

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

export default Contact
