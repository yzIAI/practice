// Node201
const express = require('express')
const app = express()
// use json response for objects
app.use(express.json())

// GET request
app.get('/hello', async (req, resp) => {
  resp.send('Hello, ' + req.query.name)
})

// POST request
app.post('/body', async (req, resp) => {
  if (!req.body.content) {
    // use status() to set http status code
    resp.status(400).send('Missing content in request body')
    return
  }
  resp.send('content is ' + req.body.content)
})

// PUT request
app.put('/params/:id', async (req, resp) => {
  resp.send({
    id: req.params.id, // extract params from url
    content: req.body.content
  })
})

// DELETE request
app.delete('/bye', async (req, resp) => {
  resp.send('bye, ' + req.query.name)
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
