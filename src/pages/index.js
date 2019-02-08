import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Typing from 'react-typing-animation'

import SEO from '../components/seo'
import Header from '../components/header'
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
  height: 40vh;
`
const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`
const IndexPage = () => (
  <div className="bg" css={bg}>
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
    <Header />
    <h1 className="title" css={center}>
      <Typing speed={80}>
        <span>Modern Web Developer</span>
      </Typing>
    </h1>
    <h2 className="subtitle" css={center}>
      <Typing speed={80}>
        <Typing.Delay ms={2600} />
        <span>With: </span>
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
    <Footer />
  </div>
)

export default IndexPage
