import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import { space, width, fontSize, color } from 'styled-system'

const Navbar = styled.div`
  position: fixed
  top: 0
  left: 0
  z-index: 3
  height: 100%
  background-color: #eee
  will-change: transform
  border: 1px solid ${props => props.theme.gold}
  transition: .3s cubic-bezier(.25,.8,.5,1);
  ${width}
`

export default props => {
  return (
    <Navbar {...props}></Navbar>
  )
}
