import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { sidebarService } from 'react-sidebarjs'
import { FaCode } from 'react-icons/fa'
import Header from './header'
import SideNav from './sidenav'
import Footer from './footer'
import left from '../images/left-angle.svg'
import right from '../images/right-angle.svg'

const leftAngle = css`
  z-index: -50;
  position: fixed;
  top: 0;
  margin: 0;
  padding: 0;
  left: 0;
  @media (max-width: 400px) {
    width: 90px;
  }
`
const rightAngle = css`
  z-index: -50;
  position: fixed;
  bottom: 0;
  margin: 0;
  padding: 0;
  right: 0;
  @media (max-width: 400px) {
    width: 90px;
  }
`
const container = css`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 3.45rem;
  padding-top: 0;
  font-size: 1.2em;
`
const burger = css`
  @media (min-width: 450px) {
    display: none;
  }
  position: fixed;
  width: 36px;
  height: 30px;
  bottom: 20px;
  right: 25px;
  transition: 1s;
  :hover {
    -webkit-transform: scale(1.5) rotate(360deg);
    transform: scale(1.5) rotate(360deg);
  }
`
const toggleSidebar = () => {
  sidebarService.toggle('MainSidebar')
}

const Layout = ({ children, props }) => (
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
        <Header />
        <div css={container}>{children}</div>
        <SideNav />
        <div css={burger} onClick={toggleSidebar}>
          <FaCode color="#ffb237" size="3em" />
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
