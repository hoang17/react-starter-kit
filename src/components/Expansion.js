import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import { space, width, fontSize, color } from 'styled-system'

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

const ExpandHeader = props => {
  const ExpandHeader = styled.div`
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
  const Label = styled.label`
    flex: 1 1 auto;
  `
  const Icon = styled.i`
    color: rgba(0,0,0,.54);
    font-size: 20px;
  `
  return (
    <ExpandHeader>
      <Label>{props.title}</Label>
      <Icon className="material-icons">keyboard_arrow_down</Icon>
    </ExpandHeader>
  )
}

const ExpandBody = styled.div`
  padding: 12px 10px
  background-color: #eee
  overflow: hidden;
  transition: .3s cubic-bezier(.25,.8,.5,1);
`

export const Expand = props => {
  const Expand = styled.li`
    border-top: 1px solid rgba(0,0,0,.12)
    color: rgba(0,0,0,.87)
    flex: 1 0 100%
    outline: none
    transition: .3s cubic-bezier(.25,.8,.5,1)
  `
  return (
    <Expand>
      <ExpandHeader {...props}></ExpandHeader>
      <ExpandBody {...props}>{props.children}</ExpandBody>
    </Expand>
  )
}
