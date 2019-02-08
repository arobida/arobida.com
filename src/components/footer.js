import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { FaGithub, FaTwitter } from 'react-icons/fa'

const footer = css`
  z-index: 50;
  position: fixed;
  bottom: 0;
  width: 100vw;
  mix-blend-mode: darken;
`
const footerbox = css`
  background-color: #663399;
  color:white;
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
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#FFB237' }}
        >
          Gatsby
        </a>{' '}
        <span role="img" aria-label="emoji heart">
          💜
        </span>
      </div>
      <div className="social" css={social}>
        <a
          href="https://github.com/arobida"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block',marginRight:'15px' }}
        >
          <FaGithub size="1em" color="#FFB237" />
        </a>
        <a
          href="https://twitter.com/theafr86"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline' }}
        >
          <FaTwitter size="1em" color="#FFB237" />
        </a>
      </div>
      <div className="free2" css={free2} />
    </div>
  </footer>
)

export default Footer
