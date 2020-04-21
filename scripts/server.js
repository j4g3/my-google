const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const { ApiOfSearch } = require('./index')
const fs = require('fs')
const cache = require('./db/cacheSchema')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/GoogleOfJ4G3', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.get('/search/:query', async (req, res) => {
  const { query } = req.params
  // console.log(query)
  try {
    const verify = await cache.findOne({ name: query })
    if (!verify) {
      const response = await ApiOfSearch(query)
      let links = []
      for (let i = 0; i < response.length; i++) {
        const element = response[i];
        links.push(element)
      }
      await cache.create({
        'name': query,
        'body': links
      })
      res.send(response)
    } else {
      const { body } = await cache.findOne({ name: query })
      res.send(body)
    }
  } catch (err) {
    res.send(err)
  }

})

app.listen(3001)