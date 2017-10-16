import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import { observable, computed, extendObservable } from "mobx"
import { observer } from 'mobx-react'
import { Transition } from 'react-transition-group'

const duration = 300

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
  font-size: 12px
  flex: 1 1 auto
`
const Icon = styled.i`
  font-size: 20px
  color: rgba(0,0,0,.54);
`
const ExpandHeader = styled.div`
  cursor: pointer
  text-transform: uppercase
  font-weight: 500
  height: 32px
  display: flex
  cursor: pointer
  align-items: center
  position: relative
  padding: 10px 24px 10px 15px
  background-color: #fafafa
`
const ExpandBody = styled.div`
  overflow: hidden
  background-color: #eee
  border-top: 1px solid #d1d1d1
  transition: ${duration}ms cubic-bezier(.25,.8,.5,1);
`

const ExpandPanel = styled.li`
  outline: none;
  flex: 1 1 100%;
  color: rgba(0,0,0,.87);
  border-top: 1px solid rgba(0,0,0,.12);
  transition: ${duration}ms cubic-bezier(.25,.8,.5,1);
`

const Fade = ({ in: exp, children }) => (
  <Transition
    in={exp}
    timeout={duration}
    onEnter={el => {
      el.style.height = 0
    el.style.display = ''
      setTimeout(() => el.style.height = el.height, 10)
    }}
    onExit={el => {
      el.height = el.style.height = `${el.clientHeight}px`
      setTimeout(() => el.style.height = 0, 10)
    }}
    onEntered={el => el.style = ''}
    onExited={el => el.style.display = 'none'}>
    <ExpandBody>{children}</ExpandBody>
  </Transition>
)

@observer export class Expand extends Component {
  expand = true

  constructor(props) {
    super(props)
    extendObservable(this, {
      expand: this.expand,
    })
    // this.expand = this.props.expand || false
  }

  componentDidMount(){
    this.expand = this.props.expand || false
  }

  render() {
    return (
      <ExpandPanel>
        <ExpandHeader onClick={e => this.expand = !this.expand}>
          <Label>{this.props.title}</Label>
          <Icon css={this.expand && 'transform: rotate(-180deg)'} className="material-icons">keyboard_arrow_down</Icon>
        </ExpandHeader>
        <Fade in={this.expand} init={this.props.expand}>
          <div css="padding:12px 10px">{this.props.children}</div>
        </Fade>
      </ExpandPanel>
    )
  }
}
