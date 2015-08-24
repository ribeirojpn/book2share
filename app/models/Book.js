var mongoose = require('mongoose');

module.exports = function() {
  var schema = mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    author:{
      type: String,
      required: true
    },
    description: {
      type: String,
    },
    image:{
      type: String,
    },
    owner:{
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    requests:[]
  });

  return mongoose.model('Book', schema);
}
