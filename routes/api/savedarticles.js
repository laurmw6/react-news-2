const router = require("express").Router();
const savedArticlesController = require("../../controllers/avedArticlesController");

// Matches with "/api/savedarticles"
router.route("/")
  .get(avedArticlesController.findAll)
  .post(avedArticlesController.create);

// Matches with "/api/savedarticles/:id"
router
  .route("/:id")
  .get(avedArticlesController.findById)
  .put(avedArticlesController.update)
  .delete(avedArticlesController.remove);

module.exports = router;