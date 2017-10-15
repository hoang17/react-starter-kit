import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import reset from './reset'
import Toolbar from './Toolbar'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Canvas = styled.div`
  padding: 48px ${props => props.pr} 0 300px;
  min-height: 100vh
  height: 100%
  outline: none
  background-color: #fafafa
  will-change: margin-left
  border: 1px solid ${props => props.theme.gold}
  transition: margin 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  ${props => props.width && 'width:'+props.width}
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
  const left = "300px"
  const right = "28em"
  return ([
    <Toolbar pl={left} pr={right} />,
    <Navbar width={left}>
      <Link>Navbar</Link></Navbar>,
    <Sidebar width={right}>
      <Link>Sidebar</Link></Sidebar>,
    <Canvas pr={right}>
      {/* <Heading>Hello</Heading>
      <Button>Rebass</Button> */}
      <Link>Canvas</Link>
    </Canvas>
  ])
}
