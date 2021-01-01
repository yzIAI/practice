const express = require('express')
const app = express()

app.get('/hello', async (req, resp) => {
  resp.send('hello!')
})

app.listen(3000, () => {
  console.log('listening on 3000!')
  console.log('hello, express!')
})
