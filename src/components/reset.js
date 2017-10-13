import { injectGlobal } from 'emotion'

injectGlobal`
  html, body {
    margin: 0
    padding: 0
    box-sizing: border-box
  }
  * {
    box-sizing: inherit
  }
  ol, ul {
    list-style: none
  }
`
