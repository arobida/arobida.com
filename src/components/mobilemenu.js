import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { stack as Menu } from 'react-burger-menu'

const mobile = css`
  display: overlay;
  z-index: 100;
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
        <Menu styles={styles} right>
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

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    bottom: '20px',
    right: '25px',
  },
  bmBurgerBars: {
    background: '#ffb237',
  },
  bmBurgerBarsHover: {
    background: '#ffb237',
  },
  bmCrossButton: {
    height: '35px',
    width: '35px',
  },
  bmCross: {
    background: '#ffb237',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: 'rgba(0, 0, 0, 0.3)',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
}
