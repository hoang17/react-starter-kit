import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import reset from './reset'
import Toolbar from './Toolbar'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { observe, observable } from "mobx"
import { observer } from 'mobx-react'

// import { space, width, fontSize, color } from 'styled-system'
import { space } from 'styled-system'

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
  padding-top: 48px
  min-height: 100vh
  background-color: #fafafa
  will-change: padding-left, padding-right
  border: 1px solid ${props => props.theme.gold}
  transition: .3s cubic-bezier(.25,.8,.5,1);
  ${space}
`

const Link = styled.a`
  color: #000
  cursor: pointer
  text-decoration: underline
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
@observer export default class Build extends Component {
  @observable state = {
    pl: "300px",
    pr: "28em",
    drawer: { left: true, right: true }
  }
  render(){
    let { pl, pr, drawer } = this.state
    return ([
      <Toolbar pl={drawer.left && pl} pr={drawer.right && pr} drawer={drawer} />,
      <Navbar w={pl} css={!drawer.left && `transform: translate3d(-${pl},0,0)`}><Link>Navbar</Link></Navbar>,
      <Sidebar w={pr} css={!drawer.right && `transform: translate3d(${pr},0,0)`}><Link>Sidebar</Link></Sidebar>,
      <Canvas pl={drawer.left && pl} pr={drawer.right && pr}><Link>Canvas</Link></Canvas>
    ])
  }
}
