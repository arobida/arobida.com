import React from 'react'
import { css } from '@emotion/core'
import { FaEnvelope } from 'react-icons/fa'

const button = css`
  background: #131921;
  border-radius: 0.4em;
  width: 4em;
`

const Form = ({ onSubmit, name, email, message }) => {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '1em',
      }}
    >
      <input type="hidden" name="contact" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <h2>Send A Message</h2>
      <label>Name</label>
      <input
        type="text"
        placeholder="ex. john doe"
        required
        name="name"
        value={name.value}
        onChange={name.onChange}
        style={{
          textAlign: 'center',
          height: '3em',
          width: '13em',
          marginBottom: '5px',
          borderTop: '0',
          borderLeft: '0',
          borderRight: '0',
          borderBottomWidth: '1px',
          borderBottomColor: '#333',
          background: '#fff',
        }}
      />
      <label>Email</label>
      <input
        type="email"
        placeholder="ex. john@gmail.com"
        required
        name="email"
        value={email.value}
        onChange={email.onChange}
        style={{
          textAlign: 'center',
          height: '3em',
          width: '13em',
          marginBottom: '5px',
          borderTop: '0',
          borderLeft: '0',
          borderRight: '0',
          borderBottomWidth: '1px',
          borderBottomColor: '#333',
          background: '#fff',
        }}
      />
      <label>Reason For Contact</label>
      <textarea
        type="text"
        required
        name="message"
        value={message.value}
        onChange={message.onChange}
        style={{
          height: '6em',
          width: '20em',
          marginBottom: '1em',
          borderTop: '0',
          borderLeft: '0',
          borderRight: '0',
          borderBottomWidth: '1px',
          borderBottomColor: '#333',
          background: '#fff',
        }}
      />
      <button css={button} onSubmit={onSubmit}>
          <FaEnvelope size="2em" color="#70cd88" />
      </button>
    </form>
  )
}

export default Form
