import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import { space, width, fontSize, color } from 'styled-system'
import { Grid, Cell } from "styled-css-grid"

const Sidebar = styled.div`
  position: fixed
  top: 0
  right: 0
  z-index: 3
  height: 100%
  will-change: transform
  border-left: 1px solid #d1d1d1
  transition: .3s cubic-bezier(.25,.8,.5,1);
  ${width}
  background-color: #f5f5f5
`

const FieldSet = styled.div`
  display: flex
`

const Field = props => {
  const Box = styled.div`
    flex: 1 1 ${props.width ? props.width*100+'%':'auto'}
    max-width: ${props.width ? props.width*100:100}%
    &:not(:last-child) {
      margin-right: 3px
      margin-bottom: 0.75rem
    }
    &:not(:last-child) {
      margin-bottom: 0.75rem
    }
  `
  const Label = styled.label`
    color: #363636
    display: block
    font-size: 10px
    font-weight: 600
    margin-bottom: 0.2em
    text-transform: uppercase
  `

  const Input = styled.input`
    display: block
    width: 100%
    padding: .3rem .4rem
    font-size: 13px
    line-height: 1.25
    color: #464a4c
    background-color: #fff
    background-image: none
    background-clip: padding-box
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 2px
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s
    &:focus {
      color: #464a4c
      background-color: #fff
      border-color: #5cb3fd
      outline: 0
    }
  `
  return (
    <Box>
      <Label>{props.label}</Label>
      <Input type="text" placeholder={props.placeholder || props.label} />
    </Box>
  )
}

const Expansion = styled.ul`
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
const Expand = styled.li`
  border-top: 1px solid rgba(0,0,0,.12)
  color: rgba(0,0,0,.87)
  flex: 1 0 100%
  outline: none
  transition: .3s cubic-bezier(.25,.8,.5,1)
`
const ExpandHeader = styled.div`
  text-transform: uppercase
  font-weight: 500
  height: 49px
  display: flex
  cursor: pointer
  align-items: center
  position: relative
  padding: 12px 18px
  background-color: #fafafa
  border-bottom: 1px solid #d1d1d1
`
const ExpandBody = styled.div`
  padding: 12px 10px
  background-color: #eee
`

export default props => {
  return (
    <Sidebar {...props}>
      <Expansion>
        <Expand>
          <ExpandHeader>Text</ExpandHeader>
          <ExpandBody>
            <FieldSet>
              <Field width={2/3} label="Font Family" />
              <Field width={1/3} label="Font Size" />
            </FieldSet>
            <FieldSet>
              <Field label="Weight" />
              <Field label="Line Height" />
              <Field label="Spacing" />
            </FieldSet>
            <FieldSet>
              <Field width={2/3} label="Color" />
              <Field width={1/3} label="Transform" />
            </FieldSet>
          </ExpandBody>
        </Expand>
      </Expansion>
    </Sidebar>
  )
}
