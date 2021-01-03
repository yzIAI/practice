const express = require('express')
const router = express.Router()

let books = {}

router.get('/', async (req, resp) => {
  resp.send('test')
})

router.post('/:id', async (req, resp) => {
  resp.send('test post')
})

router.put('/:id', async (req, resp) => {
  resp.send('test put')
})

router.delete('/:id', async (req, resp) => {
  resp.send('test delete')
})

module.exports = router
