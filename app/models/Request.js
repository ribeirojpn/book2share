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
      type: Boolean
    },
    active:{
      type:Boolean
    }
  });

  return mongoose.model('Request', schema);
}
