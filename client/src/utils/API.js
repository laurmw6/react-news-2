import axios from "axios";

export default {
  getArticles: function(topic) {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=" + topic);
  },

  // Gets all books
  getSavedArticles: function() {
    return axios.get("/api/savedarticles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/savedarticles/" + id);
  },
  // Deletes the Articles with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/savedarticles/" + id);
  },
  // Saves a Articles to the database
  saveArticle: function(articleData) {
    return axios.post("/api/savedarticles", articleData);
  }
};