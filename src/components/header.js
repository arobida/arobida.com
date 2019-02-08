import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/core'
import Headroom from 'react-headroom'

import Icon from './icon'

const nav = css`
  margin-bottom: 1.45rem;
  .headroom {
    top: 0;
    left: 0;
    right: 0;
    zindex: 1;
  }
  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
  }
  .headroom--scrolled {
    transition: transform 200ms ease-in-out;
    mix-blend-mode: multiply;
    background: #ffffff; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to bottom,
      #00e676,
      #ffffff
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to bottom,
      #00e676,
      #ffffff
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
    mix-blend-mode: multiply;
    background: #ffffff; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to bottom,
      #00e676,
      #ffffff
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to bottom,
      #00e676,
      #ffffff
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0%);
  }
`
const navbox = css`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: grid;
  grid-template-columns: 0.3fr 1.7fr 1fr;
  grid-template-rows: ;
  grid-template-areas: 'logo free navlinks';
  grid-area: nav;
`
const logo = css`
  max-width: 100px;
  width: 80px;
  padding: 0;
  margin: 0;
  display: inline-block;
  grid-area: logo;
`
const navlinks = css`
  margin-top: 20px;
  grid-area: navlinks;
`
const free = css`
  grid-area: free;
`
const links = css`
  margin-left: 30px;
  font-weight: 900;
  font-size: 1.4em;
  color: #663399;
  :hover {
    color: #ffb237;
  }
`

const Header = ({ siteTitle }) => (
  <Headroom css={nav} disableInlineStyles>
    <div css={navbox} className="nav">
      <Link to="/" css={logo} className="logo">
        <Icon />
      </Link>
      <div css={navlinks} className="navlinks">
        <Link
          to="/about/"
          css={links}
          activeStyle={{
            color: '#ffb237',
            textDecoration: 'underline',
          }}
        >
          About
        </Link>
        <Link
          to="/projects/"
          css={links}
          activeStyle={{
            color: '#ffb237',
            textDecoration: 'underline',
          }}
        >
          Projects
        </Link>
        <Link
          to="/contact/"
          css={links}
          activeStyle={{
            color: '#ffb237',
            textDecoration: 'underline',
          }}
        >
          Contact
        </Link>
      </div>
      <div css={free} className="free" />
    </div>
  </Headroom>
)

export default Header
