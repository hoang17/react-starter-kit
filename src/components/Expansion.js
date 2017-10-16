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
  font-size: 20px !important;
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
const expandBodyCSS = css`
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

@observer export class Expand extends Component {
  constructor(props) {
    super(props)
    extendObservable(this, {
      height: 'auto',
      expand: this.props.expand,
    })
  }

  componentDidMount(){
    let el = this.refs.panel
    el.style = ''
    this.height = el.clientHeight + 1 + 'px'
    if (!this.expand) el.style.display = 'none'
  }

  geStyle(){
    return this.props.expand ? null : {height:0, display:'none'}
  }

  render() {
    return (
      <ExpandPanel>
        <ExpandHeader onClick={e => {
          this.expand = !this.expand
          let el = this.refs.panel
          if (this.expand){
            el.style.display = ''
            el.style.height = 0
            setTimeout(() => el.style.height = this.height, 10)
            setTimeout(() => el.style = '', duration)
          } else {
            el.style.height = this.height
            setTimeout(() => el.style.height = 0, 10)
            setTimeout(() => el.style.display = 'none', duration)
          }
        }}>
          <Label>{this.props.title}</Label>
          <Icon css={this.expand && 'transform: rotate(-180deg)'} className="material-icons">keyboard_arrow_down</Icon>
        </ExpandHeader>
        <div
          ref="panel"
          css={expandBodyCSS}
          style={this.geStyle()}
          >
          <div css="padding:12px 10px">{this.props.children}</div>
        </div>
      </ExpandPanel>
    )
  }
}
