import React from 'react'
// import { css } from 'emotion'
// import styled from 'react-emotion'
import { space, width, fontSize, color } from 'styled-system-fork'
import styled from 'styled-components'

const Box = styled.div`
  padding: 32px;
  background-color: #eee;
  border: 1px solid ${props => props.theme.gold};
  font-size: ${props => props.fontSize}px;
  ${space}
  ${width}
  ${fontSize}
  ${color}
`

// const flexCenter = css`
//   display: flex
//   justify-content: center
//   align-items: center
//   border: 2px solid lightblue
// `
// const flexWrap = props => css`
//   flex-wrap: ${props.wrap ? 'wrap' : 'nowrap'}
// `
// const Box = styled.div`
//   ${flexCenter}
//   ${flexWrap}
//   padding: 32px
//   background-color: #eee
//   border: 1px solid ${props => props.theme.gold}
//   font-size: ${props => props.fontSize}px
// `

const Build = (props) => {
  return ([
    <Box wrap={1} {...props}>React.js News :D~</Box>,
    // width: 50%
    <Box width={1/2}>width: 50%</Box>,
    // font-size: 20px
    <Box fontSize={4}>font-size: 20px</Box>,
    // margin: 16px
    <Box m={2}>margin: 16px</Box>,
    // padding: 32px
    <Box p={4}>padding: 32px</Box>,
    // color
    <Box color='tomato'>color: tomato</Box>,
    <Box color='grays.0'>color: grays.0</Box>,
    // background color
    <Box bg='tomato'>background color: tomato</Box>,
  ])
}

export default Build
