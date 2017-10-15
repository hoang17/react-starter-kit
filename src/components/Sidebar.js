import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import { space, width, fontSize, color } from 'styled-system'
import { Grid, Cell } from "styled-css-grid";

const Sidebar = styled.div`
  position: fixed
  top: 0
  right: 0
  z-index: 3
  height: 100%
  padding: 10px
  background-color: #eee
  will-change: transform
  border: 1px solid ${props => props.theme.gold}
  transition: .3s cubic-bezier(.25,.8,.5,1);
  ${width}
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
    font-weight: 700
    margin-bottom: 0.2em
    text-transform: uppercase
  `

  const Input = styled.input`
    display: block;
    width: 100%;
    padding: .3rem .4rem;
    font-size: 13px;
    line-height: 1.25;
    color: #464a4c;
    background-color: #fff;
    background-image: none;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 2px;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    &:focus {
      color: #464a4c;
      background-color: #fff;
      border-color: #5cb3fd;
      outline: 0;
    }
  `
  return (
    <Box>
      <Label>{props.label}</Label>
      <Input type="text" placeholder={props.placeholder || props.label} />
    </Box>
  )
}

export default props => {
  return (
    <Sidebar {...props}>
      <FieldSet>
        <Field width={2/3} label="Font Family" />
        <Field width={1/3} label="Font Size" />
      </FieldSet>
      <FieldSet>
        <Field label="Weight" />
        <Field label="Line Height" />
        <Field label="Spacing" />
      </FieldSet>
    </Sidebar>
  )
}
