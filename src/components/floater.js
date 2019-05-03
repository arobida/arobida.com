import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { useSpring, animated } from 'react-spring'
import './floater.css'
import gatsby from '../images/gatsby-icon.png'
import react from '../images/react.png'
import node from '../images/node.png'
import npm from '../images/npm.png'
import js from '../images/js.png'

const Logos = styled.img({ width: '4em' })
const pos = css`
  position: fixed;
  z-index: -100;
`
const Floater = ({ props }) => {
  const bounce = useSpring({
    width: '4em',
    transform: 'translate(0,50%)',
    from: { transform: 'translate(0,0%)' },
    config: { mass: 600, tension: 800, friction: 0 },
  })
  return (
    <div css={pos}>
      <div style={{position:'fixed', top:'10%', left:'10%'}}>
        <animated.img style={bounce} src={gatsby} alt="gatsby logo" />
      </div>
      <div style={{position:'fixed', top:'20%', left:'45%'}}>
        <animated.img style={bounce} src={npm}
          alt="npm logo"/>
      </div>
      <div style={{position:'fixed', top:'45%', left:'20%'}}>
        <animated.img style={bounce} src={js}
          alt="js logo"/>
      </div>
<div style={{position:'fixed', top:'15%', left:'80%'}}>
  <animated.img style={bounce} src={node} alt="node logo"/>
</div>
<div style={{position:'fixed', top:'40%', left:'75%'}}>
  <animated.img style={bounce} src={react}
          alt="react logo"/>
</div>


    </div>
  )
}

export default Floater
