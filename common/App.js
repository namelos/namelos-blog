import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const Root = () => <h1>Hi...</h1>

const App = () =>
  <BrowserRouter>
    <Root />
  </BrowserRouter>

export default App