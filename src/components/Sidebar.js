import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import { Grid, Cell } from "styled-css-grid"
import { Expansion, Expand } from './Expansion'

const Sidebar = styled.div`
  position: fixed
  top: 0
  right: 0
  z-index: 3
  height: 100%
  user-select: none
  will-change: transform
  border-left: 1px solid #d1d1d1
  transition: .3s cubic-bezier(.25,.8,.5,1);
  ${({width}) => width && `width:${width}`}
  background-color: #f5f5f5
`
const FieldSet = styled.div`
  display: flex
`
const Label = styled.label`
  color: #363636
  display: block
  font-size: 10px
  font-weight: 600
  margin-bottom: 0.2em
  text-transform: uppercase
`
const Box = styled.div`
  flex: 1 1 ${({width}) => width ? width*100+'%':'auto'}
  max-width: ${({width}) => width ? width*100:100}%
  &:not(:last-child) {
    margin-right: 3px
    margin-bottom: 0.75rem
  }
  &:not(:last-child) {
    margin-bottom: 0.75rem
  }
`
const Field = props => {
  const Input = styled.input`
    display: block
    width: 100%
    height: 28px
    padding: .3rem .4rem
    font-size: 13px
    line-height: 1.25
    color: #464a4c
    background-color: #fff
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
    <Box {...props}>
      <Label>{props.label}</Label>
      <Input type="text" placeholder={props.placeholder || props.label} />
    </Box>
  )
}

const Select = props => {
  const Select = styled.select`
    display: block
    width: 100%
    height: 28px
    padding: .3rem .4rem
    font-size: 13px
    line-height: 1.25
    color: #464a4c
    background-clip: padding-box
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 2px
    -webkit-appearance: none
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="#d1d1d1" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>') center right no-repeat;
    background-color: #fff
    padding-right: 1.0rem;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s
    &:focus {
      color: #464a4c
      background-color: #fff
      border-color: #5cb3fd
      outline: 0
    }
  `
  return (
    <Box {...props}>
      <Label>{props.label}</Label>
      <Select>{props.children}</Select>
    </Box>
  )
}

export default props => {
  return (
    <Sidebar {...props}>
      <Expansion>
        <Expand title="Text">
          <FieldSet>
            <Field width={2/3} label="Font Family" />
            <Field width={1/3} label="Font Size" />
          </FieldSet>
          <FieldSet>
            <Select width={1/3} label="Weight">
              <option>Light</option>
              <option>Thin</option>
              <option>Normal</option>
              <option>Bold</option>
              <option>Heavy</option>
            </Select>
            <Field width={1/3} label="Line Height" placeholder="20px" />
            <Field width={1/3} label="Spacing" placeholder="normal" />
          </FieldSet>
          <FieldSet>
            <Field width={2/3} label="Color" />
            <Field width={1/3} label="Transform" />
          </FieldSet>
        </Expand>
      </Expansion>
    </Sidebar>
  )
}
