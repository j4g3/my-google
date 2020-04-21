const { Schema, model } = require('mongoose');

const cacheSchema = new Schema({
  "name": {
    type: String,
    require: true,
    lowercase: true
  },
  "body": []
})

module.exports = model('cache', cacheSchema);