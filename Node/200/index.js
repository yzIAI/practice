// Node200
const express = require('express')
const app = express()

// anonymous handler
app.get('/hello', async (req, resp) => {
  resp.send('Hello, world!')
})

// use json response for objects
app.use(express.json())

// predefined handler
function handle (req, resp) {
  resp.send({
    id: 'Node200',
    title: '[Express] Simplest Example'
    contributors: ['Phantomlsh', 'Queenie', 'QZA']
  })
}
app.post('/', handle)

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
