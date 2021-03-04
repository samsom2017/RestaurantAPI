const Restaurant = require("../model/restaurantModel");

/**
 * Get a simplified list of all restaurants
 * @param {*} req 
 * @param {*} res 
 */

exports.restaurantList = (req, res) => {
  const sortBy = req.query.q;
  Restaurant.find((err, item) => {
    if (err) {
      console.error(err);
      res.status(400).end();
      return;
    }
    res.status(200).json({ item });
  });
};
/**
 * Get detailed information about a single restaurant
 * @param {*} req 
 * @param {*} res 
 */
 
exports.restaurantInfo = (req, res) => {
  Restaurant.findOne({ id: req.params.id }, (err, item) => {
    if (err) {
      console.error(err);
      res.status(400).end();
      return;
    } else if (!item) {
      res.status(404).end();
      return;
    }
    res.status(200).json({ item });
  });
};
/**
 * Add a new restaurant to the DB
 * @param {*} req 
 * @param {*} res 
 */

exports.restaurantCreate = (req, res) => {
  Restaurant.create(req.body, (err, item) => {
    if (err) {
      console.error(err);
      res.status(400).end();
      return;
    }
    res.status(201).json({ item });
  });
};
/**
 * Delete a restaurant from the DB
 * @param {*} req 
 * @param {*} res 
 */

exports.restaurantDelete = (req, res) => {
  Restaurant.findOneAndRemove({ id: req.params.id }, (err, item) => {
    if (err) {
      console.error(err);
      res.status(400).end();
      return;
    } else if (!item) {
      res.status(404).end();
      return;
    }
    res.status(200).end();
  });
};
/**
 * Update information about a restaurant
 * @param {*} req 
 * @param {*} res 
 */

exports.restaurantUpdate = (req, res) => {
  Restaurant.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    {},
    (err, item) => {
      if (err) {
        console.error(err);
        res.status(400).end();
        return;
      } else if (!item) {
        res.status(404).end();
        return;
      }
      res.status(201).end();
    }
  );
};
