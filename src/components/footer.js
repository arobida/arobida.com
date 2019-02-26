import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

import Ext_link from '../components/ext_link'

const footer = css`
  z-index: 50;
  position: fixed;
  bottom: 0;
  width: 100vw;
  mix-blend-mode: darken;
  @media (max-width: 450px) {
    display: none;
  }
`
const footerbox = css`
  background-color: #663399;
  color: white;
  margin: 0;
  padding: 10px;
  display: grid;
  grid-template-columns: 0.2fr 1.3fr 1fr 0.4fr;
  grid-gap: 2em;
  grid-template-areas: 'free1 rights social free2';
  grid-area: footer;
`
const rights = css`
  grid-area: rights;
`
const free1 = css`
  grid-area: free1;
`
const social = css`
  grid-area: social;
`
const free2 = css`
  grid-area: free2;
`
const ext_link = css`
color:#FFB237;
`
const icon_link = css`
display:inline-block;
margin-right:15px;
`

const Footer = () => (
  <footer css={footer}>
    <div className="footer" css={footerbox}>
      <div className="free1" css={free1} />
      <div className="rights" css={rights}>
        <Link to="/">
          <span role="img" aria-label="emoji home">
            🏡
          </span>
        </Link>
        © {new Date().getFullYear()}, Built with
        {` `}
        <Ext_link href="https://www.gatsbyjs.org" styles={ext_link}>Gastby</Ext_link>
        {' '}
        <span role="img" aria-label="emoji heart">
          💜
        </span>
      </div>
      <div className="social" css={social}>
      <Ext_link href="https://github.com/arobida" styles={icon_link}><FaGithub size="1em" color="#FFB237" /></Ext_link>
      <Ext_link href="https://twitter.com/theafr86" styles={icon_link}><FaTwitter size="1em" color="#FFB237" /></Ext_link>
      <Ext_link href="https://www.linkedin.com/in/andrew-robida/" styles={icon_link}><FaLinkedin size="1em" color="#FFB237" /></Ext_link>
      </div>
      <div className="free2" css={free2} />
    </div>
  </footer>
)

export default Footer
