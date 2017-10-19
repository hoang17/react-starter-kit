import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import reset from './reset'
import Toolbar from './Toolbar'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { observe, observable, computed } from "mobx"
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

class Drawer {
  @observable width
  @observable left = true
  @observable show = true
  constructor(width, left = true) {
    this.width = width
    this.left = left
  }
  toggle = () => {
    this.show = !this.show
  }
  @computed get padding() {
    return this.show && this.width
  }
  @computed get transform() {
    let transform = 'transform: translate3d(' + (this.left ? '-' : '') + this.width + ',0,0)'
    return !this.show && transform
  }
}

// const dl = new Drawer('300px')
// const dr = new Drawer('28em', false)

@observer export default class Build extends Component {
  dl = new Drawer('300px')
  dr = new Drawer('28em', false)
  render() {
    let {dl, dr} = this
    return ([
      <Toolbar
        pl={dl.padding}
        pr={dr.padding}
        leftClick={dl.toggle}
        rightClick={dr.toggle} />,
      <Navbar w={dl.width} css={dl.transform}><Link>Navbar</Link></Navbar>,
      <Sidebar w={dr.width} css={dr.transform}><Link>Sidebar</Link></Sidebar>,
      <Canvas pl={dl.padding} pr={dr.padding}><Link>Canvas</Link></Canvas>
    ])
  }
}
