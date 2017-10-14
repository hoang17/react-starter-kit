import React from 'react'
// import styled from 'styled-components'
import { css, injectGlobal } from 'emotion'
import styled from 'react-emotion'
import { space, width, fontSize, color } from 'styled-system'
import { normalize } from 'polished'
injectGlobal`${normalize()}`

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
  padding: 32px
  background-color: #eee
  border: 1px solid ${props => props.theme.gold}
  ${space}
  ${width}
  ${fontSize}
  ${color}
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
const Link = styled.a`
  color: #000
  text-decoration: underline
  cursor: pointer
  &::before {
    content: '💩'
  }
  &:after {
    content: '🍺'
  }
  &:hover {
    opacity: .2
    &:before, &:after {
      content: '😻'
    }
  }
`
const Emotion = (props) => {
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
    <Header wrap {...props}>React.js News :D~</Header>,
    <Box width={1/2}>width: 50%</Box>,
    <Box fontSize={3}>font-size: 20px</Box>,
    <Box m={3}>margin: 16px</Box>,
    <Box p={4}>
      <Link>padding: 32px
        </Link></Box>,
    <Box color='tomato'>color: tomato</Box>,
    <Box color='blue'>color: tomato</Box>,
    <Box color='lime'>color: tomato</Box>,
    <Box bg='tomato'>background color: tomato</Box>,
  ])
}

export default Emotion
