var mongoose = require('mongoose'),
    findOrCreate = require('mongoose-findorcreate');

module.exports = function() {
  var schema = mongoose.Schema({
    login: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    },
    name: {
      type: String,
      required : true,
    },
    photo: {
      type:String,
      default: '/images/user.jpg'
    },
    books: [{type: mongoose.Schema.ObjectId, ref: 'Book'}],
    requests: []
  });

  schema.plugin(findOrCreate);
  return mongoose.model('User', schema);
}
