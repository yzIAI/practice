// Node301

'use strict'

const model = require('./model')

async function main () {
  // insert a document
  await model('collection').insert({ _id: 'test', content: 'anything' })
  // find all documents
  console.log(await model('collection').find({}))
  // play by yourself!

}

// the initialization of model takes time.
// Accessing it too early will cause problems.
setTimeout(main, 5000)
