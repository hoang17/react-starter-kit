import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import { space, width, fontSize, color } from 'styled-system'

const shawdow = css`
  box-shadow: 0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)!important
`

const Toolbar = styled.div`
  width: 100%
  height: 48px
  position: fixed
  color: rgba(0,0,0,.87);
  background-color: #f5f5f5;
  will-change: padding-left, padding-right
  transition: .3s cubic-bezier(.25,.8,.5,1);
  ${shawdow}
  ${space}
  ${width}
  ${fontSize}
  ${color}
`
const Button = styled.button`
  cursor: pointer
  background: transparent
  box-shadow: none
  border-radius: 50%
  justify-content: center
  height: 36px
  width: 36px
  min-width: 0
  align-items: center
  display: inline-flex
  flex: 0 1 auto
  font-size: 16px
  font-weight: 500
  margin: 6px 8px
  outline: 0
  position: relative
  vertical-align: middle
  user-select: none
  border-style: none
  ${props => props.right && 'float:right' };
  color: ${props => props.disabled ? 'rgba(0,0,0,.26)' : 'rgba(0,0,0,.54)' };
  pointer-events: ${props => props.disabled ? 'none' : 'auto' };
`
const Icon = styled.i`
  font-size: ${props => props.fa ? '16px':'18px'}!important;
  color: inherit
  align-items: center
  display: inline-flex
  justify-content: center
  vertical-align: middle
  transition: .3s cubic-bezier(.25,.8,.5,1)
`
const BtnIcon = props => {
  return (
    <Button {...props}>
      <Icon
        className={props.fa ? `fa fa-${props.fa}` : `material-icons`}
        {...props}>
        {props.ma}
      </Icon>
    </Button>
  )
}

export default props => {
  return (
    <Toolbar {...props}>
      <BtnIcon ma="menu" />
      <BtnIcon fa="save" disabled />
      <BtnIcon fa="copy" />
      <BtnIcon fa="cut" />
      <BtnIcon ma="content_paste" />
      <BtnIcon fa="clone" />
      <BtnIcon fa="trash-o" />
      <BtnIcon ma="undo" />
      <BtnIcon ma="redo" />
      <BtnIcon ma="visibility" />
      <BtnIcon fa="cube" />
      <BtnIcon fa="cubes" />
      <BtnIcon ma="menu" right />
    </Toolbar>
  )
}
