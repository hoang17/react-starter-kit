import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import defaultTheme from './theme'
// import { ThemeProvider } from 'styled-components'

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
      borderColor: '#BF67AD',
      white: '#f8f9fa',
      purple: '#8c81d8',
      gold: '#ffd43b',
      // colors: {
      //   black: '#111',
      //   blue: '#07c',
      //   gray1: "#f8f9f9",
      // }
    }
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    // return React.Children.only(this.props.children)
    return (<ThemeProvider theme={Object.assign(theme, defaultTheme, this.props.theme)}>{this.props.children}</ThemeProvider>)
  }
}

export default App
