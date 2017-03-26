import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../common/App'

const app = express()

app.get('/api', (req, res) =>
  res.send('hi.'))

app.get('*', (req, res) => {
  let application = renderToString(<App />)

  let html = `
  <div id="root">${application}</div>
  <script src="http://localhost:3001/client.js"></script>
  `

  res.send(html)
})

export default app