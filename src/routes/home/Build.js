import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
// import styled from 'styled-components'

// Define a class
const flexCenter = css`
  display: flex
  justify-content: center
  align-items: center
  border: 2px solid lightblue
`
const flexWrap = props => css`
  flex-wrap: ${props.wrap ? 'wrap' : 'nowrap'}
`
// Use in styled and the css prop
const FlexCenterBox = styled.div`
  ${flexCenter}
`
// Compose with multiple classes
const ColumnCenteredBox = styled.div`
  ${flexCenter}
  ${flexWrap}
`
const Box = styled.div`
  ${flexCenter}
  ${flexWrap}
  padding: 32px
  background-color: #eee
  font-size: ${props => props.fontSize}px
`

const Build = (props) => {
  return ([
    <div css={`
      ${flexCenter}
      background-color: papayawhip
      border-radius: 4px
      color: blue
      font-size: ${props.fontSize}px
      &:hover {
        color: green
      }
    `}>
      This will be blue until hovered.</div>,
    <Box wrap {...props}>React.js News :D~</Box>
  ])
}

export default Build
