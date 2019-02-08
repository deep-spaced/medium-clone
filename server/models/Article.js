const mongoose = require('mongoose');

let ArticleScheme = new mongoose.Schema(
  {
    text: String,
    title: String,
    description: String,
    feature_img: String,
    claps: Number,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    comments: [
      {
        author: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
      }
    ]
  }
);

ArticleSchema.methods.clap = () => {
  this.claps++;
  return this.save();
};

ArticleSchema.methods.comment = (c) => {
  this.comments.push(c);
  return this.save();
};

ArticleSchema.methods.addAuthor = (author) => {
  this.author = author.id;
  return this.save();
};

ArticleSchema.methods.getUserArticle = (_id) => {
  Article.find({'author': _id}).then((article) => {
    return article
  })
};

module.exports = mongoose.model('Article', ArticleSchema);
