var mongoose = require('mongoose');

module.exports = function () {
  var schema = mongoose.Schema({
    bookId:{
      type: mongoose.Schema.ObjectId,
      ref: 'Book'
    },
    ownerId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    requesterId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    approved:{
      type: Boolean,
      default: false
    },
    active:{
      type:Boolean,
      default: true
    }
  });

  return mongoose.model('Request', schema);
}
