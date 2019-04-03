import React from 'react'
import { css } from '@emotion/core'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Profile from '../components/profile'
import Ext_link from '../components/ext_link'

const grid = css`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-gap: 1em;
`
const pic = css`
  width: 10em;
  margin: 0 auto;
`
const icon_link = css`
  display: inline-block;
  margin-right: 15px;
`
const About = ({ props }) => (
  <Layout>
    <SEO
      title="📃About"
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
        `bio`,
      ]}
    />
    <h1>About Me</h1>
    <div css={grid}>
      <div css={pic}>
        <Profile style={{ borderRadius: '10px' }} />
      </div>
      <div>
        <h2>Andrew Robida</h2>
        <p>Self-taught, inspired to learn</p>
{/* <p>Located in, <strong>San Diego, Ca</strong></p> */}
        <Ext_link href="https://github.com/arobida" styles={icon_link}>
          <FaGithub size="1.5em" color="#FFB237" />
        </Ext_link>
        <Ext_link href="https://twitter.com/theafr86" styles={icon_link}>
          <FaTwitter size="1.5em" color="#FFB237" />
        </Ext_link>
        <Ext_link
          href="https://www.linkedin.com/in/andrew-robida/"
          styles={icon_link}
        >
          <FaLinkedin size="1.5em" color="#FFB237" />
        </Ext_link>
      </div>
    </div>
    <div style={{ marginTop: '2em' }}>
      <h2>Hi Im Andrew & I am addicted to development</h2>
      <p>
        Ever since I was young I have loved figuring things out, how they work,
        how it was made, and can it be better. These things have constantly
        driven me to learn and improve all my life Im that annoying guy in your
        class that always ask why. Building things, solving problems, and
        process improvment is my cup of tea so if thats your cup too or you
        would like something special built give me a holler. Thanks for reading
        and I hope we will talk soon!
      </p>
    </div>
  </Layout>
)

export default About
