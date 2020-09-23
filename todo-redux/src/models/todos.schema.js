'use strict';

const mongoose = require('mongoose');

const todos = mongoose.Schema({
  text: {type: String, required: true},
  assignee: {type: String},
  
})