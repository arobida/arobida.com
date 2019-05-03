import React from 'react'
import { css } from '@emotion/core'
import Typing from 'react-typing-animation'
import { sidebarService } from 'react-sidebarjs'
import { FaCode } from 'react-icons/fa'
import SEO from '../components/seo'
import Header from '../components/header'
import SideNav from '../components/sidenav'
import Footer from '../components/footer'
import Floater from '../components/floater'

const bg = css``
const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #663399;
  font-size: 2.5em;
  @media (max-width: 450px) {
    width: 100%;
    font-size: 1.5em;
  }
`
const text = css`
  z-index: 50;
  margin: 0 auto;
  padding-top: 8em;
  @media (max-width: 450px) {
    padding-top: 15em;
  }
`
const burger = css`
  @media (min-width: 450px) {
    display: none;
  }
  position: fixed;
  width: 40px;
  height: 40px;
  bottom: 20px;
  right: 25px;
  background: #663399;
  border-radius: 100%;
  box-shadow: 3px 3px #666666;
  :active {
    background-color: #663399;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`
const toggleSidebar = () => {
  setTimeout(() => {
    sidebarService.toggle('MainSidebar')
  }, 400)
}

const IndexPage = () => (
  <>
    <SEO
      title="🏠Welcome"
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
      ]}
    />
    <div>
      <Header />
      <Floater/>
      <div css={text}>
        <h1 css={center}>
          <Typing speed={80}>
            <span>Modern Web Developer</span>
          </Typing>
        </h1>
        <h2 css={center}>
          <Typing speed={80}>
            <Typing.Delay ms={2600} />
            <span>With: </span>
            <span style={{ color: '#ffb237' }}>
              react{' '}
              <span role="img" aria-label="emoji rock-on">
                🤘
              </span>
            </span>
            <Typing.Backspace count={8} delay={500} />
            <span style={{ color: '#ffb237' }}>
              node{' '}
              <span role="img" aria-label="emoji nerdy face">
                🤓
              </span>
            </span>
            <Typing.Backspace count={7} delay={500} />
            <span style={{ color: '#ffb237' }}>
              gatsby{' '}
              <span role="img" aria-label="emoji rocket">
                🚀
              </span>
            </span>
            <Typing.Backspace count={9} delay={500} />
            <span style={{ color: '#ffb237' }}>
              & much more!{' '}
              <span role="img" aria-label="emoji thumbs up">
                👍
              </span>
            </span>
          </Typing>
        </h2>
      </div>
    </div>
    <SideNav />
    <div css={burger} onClick={toggleSidebar} className="hatch">
      <FaCode color="#ffb237" size="3em" />
    </div>
    <Footer />
  </>
)

export default IndexPage
