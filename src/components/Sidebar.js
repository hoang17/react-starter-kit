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
  background-color: #f5f5f5;
  border-left: 1px solid #d1d1d1;
  transition: .3s cubic-bezier(.25,.8,.5,1);
  ${({width}) => width && `width:${width}`};
`
const FieldSet = styled.div`
  display: flex;
  &:not(:last-child) {
    margin-bottom: .8rem
  }
`
const Label = styled.label`
  color: #363636
  display: block
  font-size: 11px
  font-weight: 600
  margin-bottom: 0.4em
  text-transform: uppercase
`
const Box = styled.div`
  flex: 1 1 ${({width}) => width ? width*100+'%':'auto'}
  max-width: ${({width}) => width ? width*100:100}%
  &:not(:last-child) {
    margin-right: 3px
  }
`
const Button = styled.button`
  cursor: pointer
  background: transparent
  justify-content: center
  height: 28px
  min-width: 0
  align-items: center
  display: inline-flex
  flex: 1 1 auto
  font-size: 1rem
  outline: 0
  background-color: white;
  border-radius: 2px
  border: 1px solid rgba(0,0,0,.15);
  position: relative
  vertical-align: middle
  user-select: none
  font-weight: 500
  margin-right: -1px
  color: ${props => props.disabled ? 'rgba(0,0,0,.26)' : 'rgba(0,0,0,.64)' };
  pointer-events: ${props => props.disabled ? 'none' : 'auto' };
  &:not(:first-child):not(:last-child) {
    border-radius: 0
  }
  &:first-child:not(:last-child) {
    border-bottom-right-radius: 0
    border-top-right-radius: 0
  }
  &:last-child:not(:first-child) {
    border-bottom-left-radius: 0
    border-top-left-radius: 0
  }
  &:hover{
    z-index: 2
    border-color: #b5b5b5;
    color: #363636;
    background-color: #e6e6e6;
  }
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
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  &:focus {
    color: #464a4c
    background-color: #fff
    border-color: #5cb3fd
    outline: 0
  }
`
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
  border-radius: 2px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="#d1d1d1" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>') center right no-repeat;
  background-color: #fff;
  padding-right: 1.0rem;
  appearance: none;
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  &:focus {
    color: #464a4c
    background-color: #fff
    border-color: #5cb3fd
    outline: 0
  }
`

const ButtonIcon = props => {
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

const Field = props => {
  return (
    <Box {...props}>
      <Label>{props.label}</Label>
      <Input type="text" placeholder={props.placeholder || props.label} />
    </Box>
  )
}

const SelectField = props => {
  return (
    <Box {...props}>
      <Label>{props.label}</Label>
      <Select>{props.children}</Select>
    </Box>
  )
}

const ButtonGroup = props => {
  return (
    <Box {...props}>
      <Label>{props.label}</Label>
      <div css={`
        display: flex;
        justify-content: flex-start;
      `}>
        {props.children}
      </div>
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
            <SelectField width={1/3} label="Weight">
              <option>Light</option>
              <option>Thin</option>
              <option>Normal</option>
              <option>Bold</option>
              <option>Heavy</option>
            </SelectField>
            <Field width={1/3} label="Line Height" placeholder="20px" />
            <Field width={1/3} label="Spacing" placeholder="normal" />
          </FieldSet>
          <FieldSet>
            <Field width={2/3} label="Color" />
            <ButtonGroup width={1/3} label="Transform">
              <Button>AA</Button>
              <Button>Aa</Button>
              <Button>aa</Button>
            </ButtonGroup>
          </FieldSet>
          <FieldSet>
            <ButtonGroup label="Style">
              <ButtonIcon fa="bold" />
              <ButtonIcon fa="italic" />
              <ButtonIcon fa="underline" />
              <ButtonIcon fa="strikethrough" />
            </ButtonGroup>
          </FieldSet>
          <FieldSet>
            <ButtonGroup label="Alignment">
              <ButtonIcon fa="align-left" />
              <ButtonIcon fa="align-center" />
              <ButtonIcon fa="align-right" />
              <ButtonIcon fa="align-justify" />
            </ButtonGroup>
          </FieldSet>
        </Expand>
        <Expand title="Background">
          <FieldSet>
            <Field width={2/3} label="Color" />
            <Field width={1/3} label="Gradient" />
          </FieldSet>
          <FieldSet>
            <SelectField label="Select Image">
              <option>Light</option>
              <option>Thin</option>
              <option>Normal</option>
              <option>Bold</option>
              <option>Heavy</option>
            </SelectField>
          </FieldSet>
          <FieldSet>
            <SelectField width={1/3} label="Position">
              <option>Position</option>
            </SelectField>
            <SelectField width={1/3} label="Repeat">
              <option>Repeat</option>
            </SelectField>
            <SelectField width={1/3} label="Size">
              <option>Size</option>
            </SelectField>
          </FieldSet>
        </Expand>
      </Expansion>
    </Sidebar>
  )
}
