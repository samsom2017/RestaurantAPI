const express = require("express");
const restaurantController = require("../controller/controller");

const router = express.Router();
router.get("/", restaurantController.restaurantList); // GET "http://localhost:3000/routes/restaurant/"
router.get("/:id", restaurantController.restaurantInfo); // GET "http://localhost:3000/routes/restaurant/15"
router.post("/", restaurantController.restaurantCreate); // POST "http://localhost:3000/routes/restaurant/"
router.put("/:id", restaurantController.restaurantUpdate); // PUT "http://localhost:3000/routes/restaurant/15"
router.delete("/:id", restaurantController.restaurantDelete); // DELETE "http://localhost:3000/routes/restaurant/15"

module.exports = router;
