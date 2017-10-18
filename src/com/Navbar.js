import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'

const Navbar = styled.div`
  position: fixed
  top: 0
  left: 0
  z-index: 3
  height: 100%
  background-color: #f5f5f5
  will-change: transform
  border: 1px solid ${props => props.theme.gold}
  transition: .3s cubic-bezier(.25,.8,.5,1);
  ${props => props.width && 'width:'+props.width}  
`

export default props => {
  return (
    <Navbar {...props}></Navbar>
  )
}
