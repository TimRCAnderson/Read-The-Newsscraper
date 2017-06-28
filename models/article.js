var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  link: {
    type: String,
    unique: true
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
})
