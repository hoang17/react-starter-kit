import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import reset from './reset'
import Toolbar from './Toolbar'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

// import { space, width, fontSize, color } from 'styled-system'

// Add styled-system functions to your component
// const Box = styled.div`
//   ${space}
//   ${width}
//   ${fontSize}
//   ${color}
// `

const Canvas = styled.div`
  height: 100%
  outline: none
  min-height: 100vh
  background-color: #fafafa
  will-change: padding-left, padding-right
  border: 1px solid ${props => props.theme.gold}
  padding: 48px ${props => props.pr} 0 ${props => props.pl};
  transition: margin 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
`

const Link = styled.a`
  color: #000
  text-decoration: underline
  cursor: pointer
  &::before {
    content: '💩'
  }
  &:after {
    content: '🍺'
  }
  &:hover {
    opacity: .2
    &:before, &:after {
      content: '😻'
    }
  }
`

export default props => {
  const pl = "300px"
  const pr = "28em"
  return ([
    <Toolbar pl={pl} pr={pr} />,
    <Navbar width={pl}>
      <Link>Navbar</Link></Navbar>,
    <Sidebar width={pr}>
      <Link>Sidebar</Link></Sidebar>,
    <Canvas pl={pl} pr={pr}>
      <Link>Canvas</Link>
    </Canvas>
  ])
}
