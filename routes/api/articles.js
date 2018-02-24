const router = require("express").Router();
const savedArticlesController = require("../../controllers/savedArticlesController");

// Matches with "/api/savedarticles"
router.route("/")
  .get(savedArticlesController.findAll)
  .post(savedArticlesController.create);

// Matches with "/api/savedarticles/:id"
router
  .route("/:id")
  .get(savedArticlesController.findById)
  .put(savedArticlesController.update)
  .delete(savedArticlesController.remove);

module.exports = router;