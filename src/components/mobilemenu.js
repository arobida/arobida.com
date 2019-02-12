import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { stack as Menu } from 'react-burger-menu'
import './mobilemenu.css'

const mobile = css`
  @media (min-width: 450px) {
    display: none;
  }
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
  // used for more complex animations that need to wrap the entire page
  //   showSettings(event) {
  //     event.preventDefault()
  //   }

  render() {
    return (
      <div css={mobile}>
        <Menu right>
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
        </Menu>
      </div>
    )
  }
}
