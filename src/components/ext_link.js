import React from 'react'

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
