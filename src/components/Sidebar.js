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
  ${props => props.width && 'flex: 1 1 '+props.width*100+'%;'}
  width: ${props => props.width ? props.width*100 : 100}%;
  &:not(:last-child) {
    margin-right: 0px
  }
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
  ${props => props.width && 'flex: 1 1 '+props.width*100+'%;'}
  width: ${props => props.width ? props.width*100 : 100}%;
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
  ${props => props.width && 'flex: 1 1 '+props.width*100+'%;'}
  width: ${props => props.width ? props.width*100 : 100}%;
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
        <Expand title="Text" expand={true}>
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
            <Field width={1/2} label="Color" />
            <Field width={1/2} label="Gradient" />
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
        <Expand title="Layout">
          <FieldSet>
            <Label width={2/8} css='margin:0'>Display</Label>
            <Select width={6/8} label="Display">
              <option>--</option>
              <option>Block</option>
              <option>Inline</option>
              <option>Inline Block</option>
              <option>Flex</option>
              <option>Inline Flex</option>
            </Select>
          </FieldSet>
          <FieldSet>
            <Label width={2/8} css='margin:0'>Dimensions</Label>
            <Input width={3/8} placeholder="Width" />
            <Input width={3/8} placeholder="Height" />
          </FieldSet>
          <FieldSet>
            <Label width={2/8} css='margin:0'>Magin</Label>
            <Input width={6/8} placeholder="Margin" />
          </FieldSet>
          <FieldSet>
            <Label width={2/8} css='margin:0'>Padding</Label>
            <Input width={6/8} placeholder="Padding" />
          </FieldSet>
          <FieldSet>
            <Label width={2/8} css='margin:0'>Transform</Label>
            <Input width={6/8} placeholder="Transform" />
          </FieldSet>
          {/* <FieldSet>
            <Label width={2/8} css='margin:0'>Min</Label>
            <Input width={3/8} placeholder="Width" />
            <Input width={3/8} placeholder="Height" />
            <Label width={2/10} css='margin:0'>Min Width</Label>
            <Input width={3/10} placeholder="Width" />
            <Label width={2/10} css='margin:0'>Min Height</Label>
            <Input width={3/10} placeholder="Height" />
          </FieldSet>
          <FieldSet>
            <Label width={2/8} css='margin:0'>Max</Label>
            <Input width={3/8} placeholder="Width" />
            <Input width={3/8} placeholder="Height" />
            <Label width={2/10} css='margin:0'>Max Width</Label>
            <Input width={3/10} placeholder="Width" />
            <Label width={2/10} css='margin:0'>Max Height</Label>
            <Input width={3/10} placeholder="Height" />
          </FieldSet> */}
        </Expand>
        <Expand title="Border">
          <FieldSet>
            <ButtonGroup label="Style">
              <Button>Solid</Button>
              <Button>Dotted</Button>
              <Button>Dashed</Button>
            </ButtonGroup>
          </FieldSet>
          <FieldSet>
            <ButtonGroup label="Sides">
              <Button>Top</Button>
              <Button>Right</Button>
              <Button>Bottom</Button>
              <Button>Left</Button>
            </ButtonGroup>
          </FieldSet>
          <FieldSet>
            <Field width={1/3} label="Width" />
            <Field width={1/3} label="Color" />
            <Field width={1/3} label="Radius" />
          </FieldSet>
        </Expand>
        <Expand title="Position">
          <FieldSet>
            <Label width={2/8} css='margin:0'>Position</Label>
            <Select width={6/8} label="Position">
              <option>Static</option>
              <option>Absolute</option>
              <option>Relative</option>
              <option>Fixed</option>
              <option>Sticky</option>
            </Select>
          </FieldSet>
          <FieldSet>
            <Field width={1/4} label="Top" />
            <Field width={1/4} label="Bottom" />
            <Field width={1/4} label="Left" />
            <Field width={1/4} label="Right" />
          </FieldSet>
        </Expand>
      </Expansion>
    </Sidebar>
  )
}
