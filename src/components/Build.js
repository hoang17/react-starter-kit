import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import { space, width, fontSize, color } from 'styled-system'
import reset from './reset'
import Toolbar from './Toolbar'

const Navbar = styled.div`
  position: fixed
  top: 0
  left: 0
  z-index: 3
  height: 100%
  background-color: #eee
  will-change: transform
  border: 1px solid ${props => props.theme.gold}
  transition: .3s cubic-bezier(.25,.8,.5,1);
  ${width}
`
const Sidebar = styled.div`
  position: fixed
  top: 0
  right: 0
  z-index: 3
  height: 100%
  will-change: transform
  background-color: #eee
  transition: .3s cubic-bezier(.25,.8,.5,1);
  border: 1px solid ${props => props.theme.gold}
  ${width}
`
const Canvas = styled.div`
  padding: 48px ${props => props.pr} 0 300px;
  min-height: 100vh
  height: 100%
  outline: none
  background-color: #eee
  will-change: margin-left
  transition: margin 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  border: 1px solid ${props => props.theme.gold}
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

const Build = (props) => {
  const left = 300
  const right = "28em"
  return ([
    <Toolbar pl={left} pr={right} />,
    <Navbar width={left}>
      <Link>Navbar</Link></Navbar>,
    <Sidebar width={right}>
      <Link>Sidebar</Link></Sidebar>,
    <Canvas pr={right}>
      <Link>Canvas</Link></Canvas>
  ])
}

export default Build
