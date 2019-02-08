import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import { FaGithub, FaTwitter } from 'react-icons/fa'

import 'bulma/css/bulma.min.css'
import './layout.css'

import Header from './header'
import Footer from './footer'
import left from '../images/left-angle.svg'
import right from '../images/right-angle.svg'

const leftAngle = css`
  z-index: -50;
  position: fixed;
  top: 0;
  margin:0;
  padding:0;
  left: 0;
  @media (max-width: 400px) {
    width: 90px;
  }
`
const rightAngle = css`
  z-index: -50;
  position: fixed;
  bottom: 0;
  margin:0;
  padding:0;
  right: 0;
  @media (max-width: 400px) {
    width: 90px;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <img src={left} alt="left triangle" css={leftAngle} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer />
        <img src={right} alt="right triangle" css={rightAngle} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
