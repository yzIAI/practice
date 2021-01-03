// Node202

'use strict'

const express = require('express')

const app = express()
app.use(express.json())
app.disable('x-powered-by') // hide express identity
let api = express.Router() // router
app.use('/api', api) // register with middleware

const controller = require('./controller.js')
api.use('/book', controller)

app.listen(3001, () => {
  console.log('# API server started!')
})
