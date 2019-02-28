import React from 'react'
import { css } from '@emotion/core'
import { FaTwitter } from 'react-icons/fa'

import Ext_link from '../components/ext_link'

const container = css`
  background: #131921;
  color: white;
  padding: 5px;
  border-radius: 0.4em;
  height: 20em;
  overflow: auto;
  float: left;
  position: relative;
  padding-top:0;
  padding-left:1em;
  padding-right:2em;
`
const tweet = css`
  font-style: italic;
`
const user_link = css`
  margin-right: 10px;
  color: #70cd88;
`
const source_link = css`
  color: #70cd88;
`
const Tweets = ({ twits }) => {
  return (
    <div css={container}>
      <h2 style={{ background: '#131921', width:'86%', color: 'white', position: 'fixed' }}>
        <FaTwitter /> Follow Me On Twitter
      </h2>
      <br/><br/>
      {twits.map((x, i) => {
        // let tweet = x.node
        const { created_at, entities, full_text, place, user } = x.node
        const url = () =>
          entities.urls.length === 1 ? (
            <Ext_link href={entities.urls[0].url} styles={source_link}>
              Source
            </Ext_link>
          ) : (
            ''
          )
        const city = () => (place ? place.name : '')
        console.log(entities.urls)
        return (
          <div key={i} css={tweet}>
            <Ext_link
              href={`https://twitter.com/${user.screen_name}`}
              styles={user_link}
            >
              @{user.screen_name}
            </Ext_link>
            <span>
              {created_at.slice(0, 11)} {city()}
            </span>
            <p>
              {full_text} {url()}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Tweets
