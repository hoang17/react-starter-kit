import { injectGlobal } from 'emotion'

injectGlobal`
  html,body,ul {
    margin: 0
    padding: 0
    box-sizing: border-box
  }
  * {
    box-sizing: inherit
  }
  body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Helvetica Neue", "HelveticaNeue", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", sans-serif
    text-rendering: optimizeLegibility
    font-size: 14px
    word-spacing: 0.05em
    line-height: 1.5
  }
  ol,ul {
    list-style: none
  }
`
