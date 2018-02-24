const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  web_url: { type: String, required: true }
});

const SavedArticle = mongoose.model("SavedArticle", articleSchema);

module.exports = SavedArticle;