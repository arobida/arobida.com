import React from 'react'
import { css } from '@emotion/core'

const Ext_link = ({ href, styles, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    css={styles}
  >
    {children}
  </a>
)

export default Ext_link
