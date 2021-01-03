const express = require('express')
const router = express.Router()

let books = {}

router.get('/', async (req, resp) => {
  resp.send('GET')
})

router.post('/:id', async (req, resp) => {
  resp.send('POST')
})

router.put('/:id', async (req, resp) => {
  resp.send('PUT')
})

router.delete('/:id', async (req, resp) => {
  resp.send('DELETE')
})

module.exports = router
