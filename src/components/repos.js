import React from 'react'
import { css } from '@emotion/core'
import { FaGithub } from 'react-icons/fa'


import Ext_link from '../components/ext_link'

const project = css`
  margin-bottom: 40px;
`
const ext_link = css`
margin-right:15px;
`

const Repos = ({ repositories }) => {
  return (
    <div>
      {repositories.nodes.map((repository, i) => (
        <div key={i} css={project}>
          <h2>{repository.name}</h2>
          <p>Last Updated: {repository.updatedAt.slice(0, 10)}</p>
          <span>
            <a
              href={`https://raw.githubusercontent.com${
                repository.resourcePath
              }/master/README.md`}
            >
              README.md
            </a>
          </span>
          <p>{repository.description}</p>
           <Ext_link href={repository.url} styles={ext_link}><FaGithub/></Ext_link>
          {repository.homepageUrl === null ? (
            <span>No Preview</span>
          ) : (
            <Ext_link href={repository.homepageUrl} styles={ext_link}>Preview</Ext_link>
          )}
        </div>
      ))}
    </div>
  )
}

export default Repos
