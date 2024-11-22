const mongoose = require('mongoose');
const { Schema } = mongoose;

const Course = new Schema({
  title: String,
  author: String,
  body: String,
  createAt: { type: Date, default: Date.now },
  hidden: Boolean,
  // comments: [{ body: String, date: Date }],
});

module.exports = mongoose.model('Course', Course);