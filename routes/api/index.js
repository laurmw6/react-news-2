const router = require("express").Router();
const savedArticleRoutes = require("./articles");

// Book routes
router.use("/articles", savedArticleRoutes);

module.exports = router;
