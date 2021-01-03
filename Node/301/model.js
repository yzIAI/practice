'use strict'

const mongodb = require('mongodb')
const dbName = 'test'

const { db } = require('./config')
const client = new mongodb.MongoClient(db, { useUnifiedTopology: true })

// connect
client.connect(err => {
  if (err) throw err
  console.log('# Mongodb Ready')
})

// model interface
module.exports = (col) => {
  const collection = client.db(dbName).collection(col)
  return {
    async insert (doc) {
      try {
        const res = await collection.insertOne(doc)
        return res.result.ok // 1 for success
      } catch { return 0 }
    },
    async delete (filter) {
      const res = await collection.deleteMany(filter)
      return res.result.ok // 1 for success
    },
    async find (filter, opt = {}) {
      return await collection.find(filter, opt).toArray()
    },
    async update (filter, update, upsert = false) {
      const res = await collection.updateOne(filter, { $set: update }, { upsert })
      return res.result.nModified
    }
  }
}
