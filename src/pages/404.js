import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { IoIosArrowBack } from 'react-icons/io'

const win = typeof window !== 'undefined' ? window : null

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found ❓" author />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <div
      onClick={() => win.history.back()}
      style={{ cursor: 'pointer', color: '#ffb237', marginLeft: '-1em' }}
    >
      <IoIosArrowBack size="2em" style={{ transform: 'translateY(30%)' }} />
      Go Back
    </div>
  </Layout>
)

export default NotFoundPage
