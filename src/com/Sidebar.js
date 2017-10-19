import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import { Expansion, Expand } from './Expansion'
import { space, width } from 'styled-system'

// import { Grid, Cell } from "styled-css-grid"

const Sidebar = styled.div`
  position: fixed
  top: 0
  right: 0
  z-index: 3
  height: 100%
  overflow-y: auto
  padding-bottom: 100px
  user-select: none
  will-change: transform
  background-color: #f5f5f5;
  border-left: 1px solid #d1d1d1;
  transition: .3s cubic-bezier(.25,.8,.5,1);
  ${width}
`
const FieldSet = styled.div`
  display: flex;
  align-items: center;
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
  ${props => props.w && 'flex: 1 1 '+props.w*100+'%;'}
  width: ${props => props.w ? props.w*100 : 100}%;
  &:not(:last-child) {
    margin-right: 0px
  }
`
const Box = styled.div`
  flex: 1 1 ${({w}) => w ? w*100+'%':'auto'}
  max-width: ${({w}) => w ? w*100:100}%
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
  font-size: 14px
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
  ${props => props.w && 'flex: 1 1 '+props.w*100+'%;'}
  width: ${props => props.w ? props.w*100 : 100}%;
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
  &:not(:last-child) {
    margin-right: 5px
  }
  &:focus {
    color: #464a4c
    background-color: #fff
    border-color: #5cb3fd
    outline: 0
  }
`
const Select = styled.select`
  display: block
  ${props => props.w && 'flex: 1 1 '+props.w*100+'%;'}
  width: ${props => props.w ? props.w*100 : 100}%;
  height: 28px
  padding: .3rem .4rem
  font-size: 13px
  line-height: 1.25
  color: #464a4c
  background-clip: padding-box
  border: 1px solid rgba(0,0,0,.15);
  border-radius: 2px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" w="29"><path fill="#d1d1d1" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>') center right no-repeat;
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
      <Label>{props.lb}</Label>
      <Input type="text" placeholder={props.ph || props.lb} />
    </Box>
  )
}

const SelectField = props => {
  return (
    <Box {...props}>
      <Label>{props.lb}</Label>
      <Select>{props.children}</Select>
    </Box>
  )
}

const ButtonGroup = props => {
  return (
    <Box {...props}>
      <Label>{props.lb}</Label>
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
        <Expand title="Text" expand={1}>
          <FieldSet>
            <Field w={2/3} lb="Font Family" />
            <Field w={1/3} lb="Font Size" />
          </FieldSet>
          <FieldSet>
            <SelectField w={1/3} lb="Weight">
              <option>Light</option>
              <option>Thin</option>
              <option>Normal</option>
              <option>Bold</option>
              <option>Heavy</option>
            </SelectField>
            <Field w={1/3} lb="Line Height" ph="20px" />
            <Field w={1/3} lb="Spacing" ph="normal" />
          </FieldSet>
          <FieldSet>
            <Field w={2/3} lb="Color" />
            <ButtonGroup w={1/3} lb="Transform">
              <Button>AA</Button>
              <Button>Aa</Button>
              <Button>aa</Button>
            </ButtonGroup>
          </FieldSet>
          <FieldSet>
            <ButtonGroup lb="Style">
              <ButtonIcon fa="bold" />
              <ButtonIcon fa="italic" />
              <ButtonIcon fa="underline" />
              <ButtonIcon fa="strikethrough" />
            </ButtonGroup>
          </FieldSet>
          <FieldSet>
            <ButtonGroup lb="Alignment">
              <ButtonIcon fa="align-left" />
              <ButtonIcon fa="align-center" />
              <ButtonIcon fa="align-right" />
              <ButtonIcon fa="align-justify" />
            </ButtonGroup>
          </FieldSet>
        </Expand>
        <Expand title="Background">
          <FieldSet>
            <Field w={1/2} lb="Color" />
            <Field w={1/2} lb="Gradient" />
          </FieldSet>
          <FieldSet>
            <SelectField lb="Select Image">
              <option>Light</option>
              <option>Thin</option>
              <option>Normal</option>
              <option>Bold</option>
              <option>Heavy</option>
            </SelectField>
          </FieldSet>
          <FieldSet>
            <SelectField w={1/3} lb="Position">
              <option>Position</option>
            </SelectField>
            <SelectField w={1/3} lb="Repeat">
              <option>Repeat</option>
            </SelectField>
            <SelectField w={1/3} lb="Size">
              <option>Size</option>
            </SelectField>
          </FieldSet>
        </Expand>
        <Expand title="Layout">
          <FieldSet>
            <Label w={2/8} css='margin:0'>Display</Label>
            <Select w={6/8} lb="Display">
              <option>--</option>
              <option>Block</option>
              <option>Inline</option>
              <option>Inline Block</option>
              <option>Flex</option>
              <option>Inline Flex</option>
            </Select>
          </FieldSet>
          <FieldSet>
            <Label w={2/8} css='margin:0'>Dimensions</Label>
            <Input w={3/8} ph="Width" />
            <Input w={3/8} ph="Height" />
          </FieldSet>
          <FieldSet>
            <Label w={2/8} css='margin:0'>Magin</Label>
            <Input w={6/8} ph="Margin" />
          </FieldSet>
          <FieldSet>
            <Label w={2/8} css='margin:0'>Padding</Label>
            <Input w={6/8} ph="Padding" />
          </FieldSet>
          <FieldSet>
            <Label w={2/8} css='margin:0'>Transform</Label>
            <Input w={6/8} ph="Transform" />
          </FieldSet>
          {/* <FieldSet>
            <Label w={2/8} css='margin:0'>Min</Label>
            <Input w={3/8} ph="Width" />
            <Input w={3/8} ph="Height" />
            <Label w={2/10} css='margin:0'>Min Width</Label>
            <Input w={3/10} ph="Width" />
            <Label w={2/10} css='margin:0'>Min Height</Label>
            <Input w={3/10} ph="Height" />
          </FieldSet>
          <FieldSet>
            <Label w={2/8} css='margin:0'>Max</Label>
            <Input w={3/8} ph="Width" />
            <Input w={3/8} ph="Height" />
            <Label w={2/10} css='margin:0'>Max Width</Label>
            <Input w={3/10} ph="Width" />
            <Label w={2/10} css='margin:0'>Max Height</Label>
            <Input w={3/10} ph="Height" />
          </FieldSet> */}
        </Expand>
        <Expand title="Border">
          <FieldSet>
            <ButtonGroup lb="Style">
              <Button>Solid</Button>
              <Button>Dotted</Button>
              <Button>Dashed</Button>
            </ButtonGroup>
          </FieldSet>
          <FieldSet>
            <ButtonGroup lb="Sides">
              <Button>Top</Button>
              <Button>Right</Button>
              <Button>Bottom</Button>
              <Button>Left</Button>
            </ButtonGroup>
          </FieldSet>
          <FieldSet>
            <Field w={1/3} lb="Width" />
            <Field w={1/3} lb="Color" />
            <Field w={1/3} lb="Radius" />
          </FieldSet>
        </Expand>
        <Expand title="Position">
          <FieldSet>
            <Label w={2/8} css='margin:0'>Position</Label>
            <Select w={6/8} lb="Position">
              <option>Static</option>
              <option>Absolute</option>
              <option>Relative</option>
              <option>Fixed</option>
              <option>Sticky</option>
            </Select>
          </FieldSet>
          <FieldSet>
            <Field w={1/4} lb="Top" />
            <Field w={1/4} lb="Bottom" />
            <Field w={1/4} lb="Left" />
            <Field w={1/4} lb="Right" />
          </FieldSet>
        </Expand>
      </Expansion>
    </Sidebar>
  )
}
