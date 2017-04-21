import React from 'react'
import { render } from 'react-dom'

import App from './App'

console.log('   ...(I\'m loaded!)   => ' + new Date().toLocaleTimeString())
console.log('*\\o/*')

render(
  <App />,
  document.getElementById('root')
)
