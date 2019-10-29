import React from 'react'
import { css } from '@emotion/core'
import { FaTwitter } from 'react-icons/fa'

import Ext_link from '../components/ext_link'

const container = css`
  background: #131921;
  color: white;
  border-radius: 0.4em;
  height: 20em;
  overflow: auto;
  float: left;
  position: relative;
  padding:1em;
  margin-bottom:5em;
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
    <>
    <h2 style={{ marginTop:'1em' }}>
        <FaTwitter color="#1CA1F2" size="1.2em"/>
        Follow Me On Twitter
        <FaTwitter color="#1CA1F2" size="1.2em"/>
      </h2>
    <div css={container} >
      {twits.map((x, i) => {
        // let tweet = x.node
        const { created_at, entities, full_text, id_str, place, user } = x.node
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
              href={`https://twitter.com/${user.screen_name}/status/${id_str}`}
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
    </>
  )
}

export default Tweets
