import React from 'react'
import { css, injectGlobal } from 'emotion'
import styled from 'react-emotion'
const PropTypes = require('prop-types')
import { space, width, fontSize, color } from 'styled-system'
import reset from './reset'

const Toolbar = styled.div`
  position: fixed
  width: 100%
  height: 48px
  background-color: #eee
  border: 1px solid ${props => props.theme.gold}
  transition: .3s cubic-bezier(.25,.8,.5,1);
  ${space}
  ${width}
  ${fontSize}
  ${color}
`
const Navbar = styled.div`
  position: fixed
  width: 300px
  top: 0
  left: 0
  z-index: 3
  height: 100%
  background-color: #eee
  will-change: transform
  border: 1px solid ${props => props.theme.gold}
  transition: .3s cubic-bezier(.25,.8,.5,1)
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
  ${space}
  ${width}
  ${fontSize}
  ${color}
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
  const width = "26em"
  return ([
    <Toolbar color='blue' pl={300} pr={width}>
      <Link>Toolbar</Link></Toolbar>,
    <Navbar>
      <Link>Navbar</Link></Navbar>,
    <Sidebar width={width}>
      <Link>Sidebar</Link></Sidebar>,
    <Canvas pr={width}>
      <Link>Canvas</Link></Canvas>
  ])
}

export default Build
