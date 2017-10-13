import React from 'react'
// import { css } from 'emotion'
// import styled from 'react-emotion'
import styled from 'styled-components'

const Box = styled.div`
  padding: 32px;
  background-color: #eee;
  font-size: ${props => props.fontSize}px;
`

const Build = (props) => {
  // // Define a class
  // const flexCenter = css`
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // `
  // // interpolate it where you want to apply the styles
  // const flexCenterClass = css`
  //   ${flexCenter};
  //   flex-direction: column;
  // `
  // // You can also use it in styled and the css prop
  // const FlexCenterComponent = styled.div`
  //   ${flexCenter};
  // `
  // const flexWrap = props => css`
  //   flex-wrap: ${props.wrap ? 'wrap' : 'nowrap'};
  // `
  // // You can compose with multiple classes
  // const ColumnCenteredComponent = styled.div`
  //   ${flexCenter};
  //   ${flexWrap};
  // `
  // // Composition can be very powerful. For example, styles are expanded where you interpolate,
  // // so the following class has flex-direction: column because ${flexCenter} is interpolated
  // // after flex-direction: row
  // const stillColumn = css`
  //   flex-direction: row;
  //   ${flexCenter}
  // `
  // // Nested composing is supported
  // const cls = css`
  //   & .flex {
  //       ${flexCenter};
  //   }
  // `

  return ([
    <Box fontSize={20}>React.js News :D~</Box>,
  ])
}

export default Build
