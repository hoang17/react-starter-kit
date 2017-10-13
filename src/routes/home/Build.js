import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
// import styled from 'styled-components'

const flexCenter = css`
  display: flex
  justify-content: center
  align-items: center
  border: 2px solid lightblue
`
const flexWrap = props => css`
  flex-wrap: ${props.wrap ? 'wrap' : 'nowrap'}
`
const Box = styled.div`
  ${flexCenter}
  ${flexWrap}
  padding: 32px
  background-color: #eee
  border: 1px solid ${props => props.theme.gold}
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
    <Box wrap={1} {...props}>React.js News :D~</Box>
  ])
}

export default Build
