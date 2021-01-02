// Node201
const express = require('express')
const app = express()

// anonymous handler
app.get('/hello', async (req, resp) => {
  resp.send('Hello, world!')
})

// use json response for objects
app.use(express.json())

// extract body content
app.post('/body', async (req, resp) => {
  // make sure the arguments are passed in
  if (!req.body.content) {
    resp.status(400).send('Missing content')
    return
  }
  resp.send('content is ' + req.body.content)
})

// extract params from url
app.put('/params/:id', async (req, resp) => {
  resp.send('id is ' + req.params.id)
})

// delete
app.delete('/del', async (req, resp) => {
  resp.send('bye')
})
app.listen(3000, () => {
  console.log('Server started on port 3000')
})
