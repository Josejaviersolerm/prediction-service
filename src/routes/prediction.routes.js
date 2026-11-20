const express = require("express");

const controller = require("../controllers/prediction.controller");
const router = express.Router();

router.get("/features", controller.getFeatures);
router.post("/predict", controller.predict);

module.exports = router;