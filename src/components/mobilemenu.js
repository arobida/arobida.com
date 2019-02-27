import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Sidebar from 'react-sidebar'

const mobile = css`
z-index:100;
  @media (min-width: 450px) {
    display: none;
  }
`
const burger = css`
  position: fixed;
  width: 36px;
  height: 30px;
  bottom: 20px;
  right: 25px;
`
const list = css`
  list-style: none;
`
const link = css`
  margin-bottom: 30px;
  padding: 10px;
  font-weight: 200;
  font-size: 1.4em;
  color: #663399;
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
        touch
        touchHandleWidth={30}
        styles={{ sidebar: { background: 'white', position:'fixed' } }}
        css={mobile}
      >
        <div onClick={() => this.onSetSidebarOpen(true)} css={burger}>
        </div>
      </Sidebar>
    )
  }
}
