import React from 'react'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './App'

console.log('   ...(I\'m loaded!)   => ' + new Date().toLocaleTimeString())
console.log('*\\o/*')

injectTapEventPlugin()

render(
  React.createElement( MuiThemeProvider, null, React.createElement(App) ),
  document.getElementById('root')
)
