import React from 'react'
import { css } from '@emotion/core'
import Typing from 'react-typing-animation'

import SEO from '../components/seo'
import Header from '../components/header'
import MobileMenu from '../components/mobilemenu'
import Footer from '../components/footer'

const bg = css`
  background: #ffffff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #ffffff,
    #00e676,
    #ffffff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #ffffff,
    #00e676,
    #ffffff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 50vh;
`
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
  margin: 0 auto;
  @media (max-width: 450px) {
    padding-top: 40%;
  }
`

const IndexPage = () => (
  <>
    <SEO
      title="Welcome"
      keywords={[
        `arobida`,
        `Andrew Robida`,
        `portfolio`,
        `web developer`,
        `javascript`,
      ]}
    />

    <div className="bg" css={bg}>
      <Header />
      <div css={text}>
        <h1 css={center}>
          <Typing speed={80}>
            <span>Modern Web Developer</span>
          </Typing>
        </h1>
        <h2 css={center}>
          <Typing speed={80}>
            <Typing.Delay ms={2600} />
            <span style={{color:'white'}}>With: </span>
            <span>
              react{' '}
              <span role="img" aria-label="emoji rock-on">
                🤘
              </span>
            </span>
            <Typing.Backspace count={8} delay={500} />
            <span>
              node{' '}
              <span role="img" aria-label="emoji nerdy face">
                🤓
              </span>
            </span>
            <Typing.Backspace count={7} delay={500} />
            <span>
              gatsby{' '}
              <span role="img" aria-label="emoji rocket">
                🚀
              </span>
            </span>
            <Typing.Backspace count={9} delay={500} />
            <span>
              & much more!{' '}
              <span role="img" aria-label="emoji thumbs up">
                👍
              </span>
            </span>
          </Typing>
        </h2>
      </div>
    </div>
    <MobileMenu />
    <Footer />
  </>
)

export default IndexPage
