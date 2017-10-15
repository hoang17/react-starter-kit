import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import { observable, computed, extendObservable } from "mobx"
import { observer } from 'mobx-react'
import { Transition } from 'react-transition-group'

const duration = 300

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  padding: 20,
  display: 'inline-block',
  backgroundColor: '#8787d8'
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        I'm A fade Transition!
      </div>
    )}
  </Transition>
)

export const Expansion = styled.ul`
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  flex-wrap: wrap
  justify-content: center
  list-style-type: none
  padding: 0
  text-align: left
  width: 100%
  border-bottom: 1px solid #d1d1d1
`
const Label = styled.div`
  flex: 1 1 auto;
`
const Icon = styled.i`
  color: rgba(0,0,0,.54)
  font-size: 20px
`
const ExpandHeader = styled.div`
  cursor: pointer
  text-transform: uppercase
  font-weight: 500
  height: 49px
  display: flex
  cursor: pointer
  align-items: center
  position: relative
  padding: 10px 24px 10px 15px
  background-color: #fafafa
  border-bottom: 1px solid #d1d1d1
`
const ExpandBody = styled.div`
  overflow: hidden
  background-color: #eee
  transition: ${duration}ms cubic-bezier(.25,.8,.5,1);
`

const ExpandPanel = styled.li`
  border-top: 1px solid rgba(0,0,0,.12)
  color: rgba(0,0,0,.87)
  flex: 1 0 100%
  outline: none
  transition: .3s cubic-bezier(.25,.8,.5,1)
`

@observer export class Expand extends Component {
  active = true
  height = 'auto'

  constructor(props) {
    super(props)
    extendObservable(this, {
      active: this.active,
      height: this.height,
    })
  }

  componentDidMount(){
    this.height = this.refs.expandBody.clientHeight + 'px'
  }

  render() {
    return (
      <ExpandPanel>
        <ExpandHeader onClick={e => this.active = !this.active}>
          <Label>{this.props.title}</Label>
          <Icon className="material-icons">keyboard_arrow_down</Icon>
        </ExpandHeader>
        <Fade in={this.active} />
        <ExpandBody style={{height: this.active ? this.height : 0}}>
          <div ref="expandBody" css={`padding:12px 10px`}>{this.props.children}</div>
        </ExpandBody>
      </ExpandPanel>
    )
  }
}
