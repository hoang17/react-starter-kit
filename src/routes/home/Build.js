import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
const PropTypes = require('prop-types')
import { space, width, fontSize, color } from 'styled-system-fork'
// import styled from 'styled-components'

const Box = styled.div`
  padding: 32px
  background-color: #eee
  border: 1px solid ${props => props.theme.gold}
  font-size: ${props => props.fontSize}px
  ${space}
  ${width}
  ${fontSize}
  ${color}
`

const flexCenter = css`
  display: flex
  justify-content: center
  align-items: center
  border: 2px solid lightblue
`
const flexWrap = props => css`
  flex-wrap: ${props.wrap ? 'wrap' : 'nowrap'}
`
const Header = styled.div`
  ${flexCenter}
  ${flexWrap}
  padding: 32px
  margin: 16px 0
  background-color: #eee
  border: 1px solid ${props => props.theme.gold}
  font-size: ${props => props.fontSize}px
`

const Build = (props) => {
  return ([
    <div css={`
      ${flexCenter}
      color: blue
      background-color: papayawhip
      font-size: ${props.fontSize}px
      &:hover {
        color: green
      }
    `}>This will be blue until hovered.</div>,
    <Header wrap={1} {...props}>React.js News :D~</Header>,
    <Box width={1/2}>width: 50%</Box>,
    <Box fontSize={3}>font-size: 20px</Box>,
    <Box m={2}>margin: 16px</Box>,
    <Box p={4}>padding: 32px</Box>,
    <Box color='tomato'>color: tomato</Box>,
    <Box bg='tomato'>background color: tomato</Box>,
  ])
}

export default Build
