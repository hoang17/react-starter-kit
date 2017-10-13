/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import color from './color'
import palx from 'palx'
// import { ThemeProvider } from 'styled-components'

export const font = `-apple-system, BlinkMacSystemFont, sans-serif`
export const monospace = '"SF Mono", "Roboto Mono", Menlo, monospace'

const palette = palx('#07c')

const flattened = Object.keys(palette)
  .reduce((a, key) => {
    const value = palette[key]
    if (Array.isArray(value)) {
      a[key] = value[5]
      value.forEach((val, i) => {
        a[key + i] = val
      })
    } else {
      a[key] = value
    }
    return a
  }, {})

export const colors = Object.assign({}, flattened, {
  black: '#000',
  white: '#fff'
})

// console.log(colors);

const ContextType = {
  // Enables critical path CSS rendering
  insertCss: PropTypes.func.isRequired,
  // Universal HTTP client
  fetch: PropTypes.func.isRequired,
}

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   }
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   )
 */
class App extends React.PureComponent {
  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.element.isRequired,
  }

  static childContextTypes = ContextType

  getChildContext() {
    return this.props.context
  }

  render() {
    const theme = {
      fg: 'palevioletred',
    	bg: 'white',
      main: 'mediumseagreen',
      borderRadius: '50%',
      borderColor: '#BF67AD',
      white: '#f8f9fa',
      purple: '#8c81d8',
      gold: '#ffd43b',
      colors
      // colors: {
      //   black: '#111',
      //   blue: '#07c',
      //   gray1: "#f8f9f9",
      // }
    }
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    // return React.Children.only(this.props.children)
    return (<ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>)
  }
}

export default App
