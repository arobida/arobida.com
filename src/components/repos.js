import React from 'react'
import { css } from '@emotion/core'

const project = css`
  margin-bottom: 40px;
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
          <a
            href={repository.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '15px' }}
          >
            View Source
          </a>
          {repository.homepageUrl === null ? (
            <span>No Preview</span>
          ) : (
            <a
              href={repository.homepageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview
            </a>
          )}
        </div>
      ))}
    </div>
  )
}

export default Repos
