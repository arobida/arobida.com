import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Sidebar from 'react-sidebar'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

import Profile from '../components/profile'
import Ext_link from '../components/ext_link'

const burger = css`
  position: fixed;
  width: 36px;
  height: 30px;
  bottom: 20px;
  right: 25px;
`
const list = css`
margin-top:50px;
  list-style: none;
  margin-left:30%;
`
const link = css`
  font-weight: 200;
  font-size: 1.4em;
  color: #663399;
`
const pic = css`
  width: 10em;
  margin: 0 auto;
  margin-bottom:30px;
`
const icon_link = css`
  display: inline-block;
  margin-right: 15px;
`

export default class MobileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarOpen: false,
    }
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open })
  }

  render() {
    return (
      <Sidebar
        sidebar={
          <b>
            <div css={pic}>
              <Profile />
            </div>
            <div style={{textAlign:'center'}}>
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
            <ul css={list}>
              <li>
                <Link
                  to="/"
                  css={link}
                  className="menu-item"
                  activeStyle={{
                    color: '#ffb237',
                    textDecoration: 'underline',
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about/"
                  css={link}
                  className="menu-item"
                  activeStyle={{
                    color: '#ffb237',
                    textDecoration: 'underline',
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/"
                  css={link}
                  className="menu-item"
                  activeStyle={{
                    color: '#ffb237',
                    textDecoration: 'underline',
                  }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact/"
                  css={link}
                  className="menu-item"
                  activeStyle={{
                    color: '#ffb237',
                    textDecoration: 'underline',
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </b>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        pullRight
        styles={{
          root: { overflow: 'auto' },
          sidebar: { background: 'white', width: '20em' },
          content: { position: 'fixed' },
          overlay: { position: 'fixed' },
        }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)} css={burger}>
          X
        </button>
      </Sidebar>
    )
  }
}
